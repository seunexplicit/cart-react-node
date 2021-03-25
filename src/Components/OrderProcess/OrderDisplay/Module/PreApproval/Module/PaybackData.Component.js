import React, { Fragment, useReducer } from 'react';

const planTypes = [
		{
			index:1,
			title:'Aggressive',
			color:'red'
		},
		{
			index:2,
			title:'Stretchy',
			color:'#ff5173'
		},	
		{
			index:3,
			title:'Focused',
			color:'#6751ff'
		},
		{
			index:4,
			title:'Council',
			color:'#51ffed'
		},
		{
			index:5,
			title:'Mid',
			color:'#ffae51'
		},
		{
			index:6,
			title:'Gentle',
			color:'#6dff51'
		}
	];


function reducePayment(state){
	
	if(!state.downPayment&&!state.passiveDownPayment) 
		return state;
	else if(!(/^\d+$/.test(state.passiveDownPayment))) 
		return {...state, errorMessage:'Enter Numbers Only For Down Payment'}
	else if(Number(state.passiveDownPayment)<(0.3*state.cartValue)) 
		return{...state, errorMessage:'Your Down Payment Must Be At Least 30% Of Your Cart Value : >'+(0.3*state.cartValue)} 
	
	const downPayment = Number(state.passiveDownPayment);
	const shoppingCredit = state.cartValue - downPayment;
	const rate = 0.04*shoppingCredit;
	const totalCredit = (rate*state.activePlan)+shoppingCredit;
	return { ...state, 
		shoppingCredit:shoppingCredit, 
		monthlyRepayment:totalCredit/state.activePlan,
		downPayment:downPayment,
		passiveDownPayment:passiveDownPayment }
}

function reducePlan(state, planState){
	return {...state, activePlan:planState}
}

function reducer(state, action){

	let newState;

	switch(action.type){
		case 'updateRepayment':
			return reducePayment(state); 
		case 'updatePlan':
			newState = reducePlan(state, action.payload);
			return reducePayment(newState);
		case 'updatePassiveDownPayment':
			return {...state, passiveDownPayment:action.payload}
	}
}

const PlansType = (props)=>{
	return (
		<Fragment>
			{
				planTypes.map(function(value){
					<div className={'plans', props.selected===value.index?'active':''} onClick={e=>props.changePlan(value.index)}>
						<div className="pl-bn" style={'backgroundColor':value.color}></div>
						<div className="pl-det">
							<p className="pl-title">{value.title}</p>
							<p className="pl-index">{value.index}</p>
							<p>Month{{value.index!==1?'s':''}}</p>						
						</div>
				
					</div>
				})
			}
		</Fragment>
			
	)
}

export const PayBackComponent = (props)=>{
	
	const [state, dispatch] = useReducer(reducer, {
		cartValue:props.cartValue, 
		activePlan:1, 
		downPayment:0, 
		passiveDownPayment:'', 
		shoppingCredit:0,
		errorMessage:''
	})

	changePaymentPlan(plan){
		dispatch({action:'updatePlan', payload:plan})
	}
	
	return(
		<div>
			<p className="h2">Choose Your Name</p>
			<div className="flex-row">
				<PlansType active={activePlan} changePlan={changePaymentPlan}></PlansType>
			</div>
			<p>Payment BreakDown</p>
			<div className="flex-row">
				<div className="flex-row">
					<div className="w-50">
						<label for="shoppingCredit">Shopping Credit</label>
						<label for="downPayment">Down Payment</label>
						<label for="monthInstalment">Monthly Installment</label>
						<label for="tenure">Tenure</label>
					</div>
					<div className="w-50">
						<p class="h2">{state.shoppingCredit?state.shoppingCredit:''}</p>
						<p class="h2">{state.downPayment?state.downPayment:''}</p>
						<p class="h2">{state.monthRepayment?state.monthRepayment:''}</p>
						<p class="h2">{state.activePlan} Month{state.activePlan>1?'s':''}</p>
					</div>
				</div>
				<div className="flex-col dp-col">
					<div>
						<p className="white">Customize Down Payment</p>
						<div className="form-icon-div left-icon">
							<span></span>
							<input id="downPayment" onChange={e=>dispatch({action:'updatePassiveDownPayment', payload:e.target.value})}/>
						</div>
					</div>
					<div>
						<button onClick={dispatch({action:'updateRepayment'})}>Update Breakdown</button>
					</div> 
				</div>
			</div>
		</div>
	)
}
