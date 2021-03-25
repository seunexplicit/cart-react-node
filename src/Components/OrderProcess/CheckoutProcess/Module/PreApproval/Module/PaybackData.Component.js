import React, { Fragment, useReducer, useContext } from 'react';
import { CartContext } from '../../../../../../Hooks/Cart.Hook';

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
		downPayment:downPayment }
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
		default:
			return state;
	}
}

const PlansType = (props)=>{
	return (
		<Fragment>
			{
				planTypes.map(function(value, index){
					return (
						<div key={ value.title } className={`plans-t mr-1 ml-1 ${props.selected===value.index?'active':''}`} onClick={e=>props.changePlan(value.index)}>
							<div className="pl-bn" style={{'backgroundColor':value.color, 'borderTop':'2px solid '+value.color}}></div>
							<div className="pl-det flex-col">
								<span className="pl-title red flex-row center-justify center-align">{value.title}</span>
								<span className="pl-index red flex-row center-justify center-align">{value.index}</span>
								<span className="flex-row red center-justify center-align">Month{value.index!==1?'s':''}</span>						
							</div>
					
						</div>
					)
				})
			}
		</Fragment>
			
	)
}

export const PayBackComponent = (props)=>{
	
	const cartItems = useContext(CartContext);
	
	
	let cartValue = 0;
	
	for(let item of cartItems){
		cartValue+=item.cost*item.quantity;
	}

	const init = {
		cartValue:cartValue, 
		activePlan:1, 
		downPayment:0, 
		passiveDownPayment:'', 
		shoppingCredit:0,
		errorMessage:''
	}

	console.log(init, 'init');

	const [state, dispatch ] = useReducer(reducer, init);

	function changePaymentPlan(plan){
		dispatch({action:'updatePlan', payload:plan})
	}
	
	return(
		<div>
			<p className="h2 red flex-row center-justify mb-3">Choose Your Plan</p>
			<div className="flex-row">
				<PlansType active={ state.activePlan } changePlan={ changePaymentPlan }></PlansType>
			</div>
			<p className="h2 red flex-row center-align center-justify mt-3 mb-2">Payment Breakdown</p>
			<div className="flex-row br-dw-sec">
				<div className="flex-row w-60">
					<div className="flex-row out-sec">
						<div className="flex-col w-50">
							<label htmlFor="shoppingCredit">Shopping Credit</label>
							<label htmlFor="downPayment">Down Payment</label>
							<label htmlFor="monthInstalment">Monthly Installment</label>
							<label htmlFor="tenure">Tenure</label>
						</div>
						<div className="w-50">
							<label className="h2">{state.shoppingCredit?state.shoppingCredit:''}</label>
							<label className="h2">{state.downPayment?state.downPayment:''}</label>
							<label className="h2">{state.monthRepayment?state.monthRepayment:''}</label>
							<label className="h2">{state.activePlan} Month{state.activePlan>1?'s':''}</label>
						</div>
					</div>
				</div>
				<div className="flex-col form-col dp-col w-40">
					<div className="flex-col center-align">
						<p className="flex-row center-justify center-align white">Customize Down Payment</p>
						<div className="flex-row form-icon-div left-icon">
							<div className="red"><span className="naira">N</span></div>
							<input id="downPayment" 
								onChange={e=>dispatch({action:'updatePassiveDownPayment', payload:e.target.value})} />
						</div>
					</div>
					<div className="flex-row center-justify center-align">
						<button className="oval white white-bdr" onClick={()=>dispatch({action:'updateRepayment'})}>Update Breakdown</button>
					</div> 
				</div>
			</div>
		</div>
	)
}
