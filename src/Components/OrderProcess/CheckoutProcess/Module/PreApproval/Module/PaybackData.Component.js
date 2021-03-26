import React, { Fragment, useReducer, useContext } from 'react';
import { CartContext } from '../../../../../../Hooks/Cart.Hook';
<<<<<<< HEAD
import Prompter from '../../../../../GlobalComponents/Prompter.Component.js';
=======
>>>>>>> origin/main

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
<<<<<<< HEAD
		monthlyRepayment:Math.ceil(totalCredit/state.activePlan),
=======
		monthlyRepayment:totalCredit/state.activePlan,
>>>>>>> origin/main
		downPayment:downPayment }
}

function reducePlan(state, planState){
	return {...state, activePlan:planState}
}

function reducer(state, action){

	let newState;

	switch(action.type){
		case 'updateRepayment':
<<<<<<< HEAD
			console.log('am here', reducePayment(state))
=======
>>>>>>> origin/main
			return reducePayment(state); 
		case 'updatePlan':
			newState = reducePlan(state, action.payload);
			return reducePayment(newState);
		case 'updatePassiveDownPayment':
<<<<<<< HEAD
			console.log('updatePassiveDownPayment....');
			return {...state, passiveDownPayment:action.payload}
		case 'clearErrorMessage':
			return {...state, errorMessage:''}
=======
			return {...state, passiveDownPayment:action.payload}
>>>>>>> origin/main
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
<<<<<<< HEAD
		dispatch({type:'updatePlan', payload:plan})
=======
		dispatch({action:'updatePlan', payload:plan})
>>>>>>> origin/main
	}
	
	return(
		<div>
<<<<<<< HEAD
			<div>
				{ state.errorMessage?<Prompter errorMessage={ state.errorMessage } closeMessage={ dispatch } />:null }
			</div>
=======
>>>>>>> origin/main
			<p className="h2 red flex-row center-justify mb-3">Choose Your Plan</p>
			<div className="flex-row">
				<PlansType active={ state.activePlan } changePlan={ changePaymentPlan }></PlansType>
			</div>
			<p className="h2 red flex-row center-align center-justify mt-3 mb-2">Payment Breakdown</p>
			<div className="flex-row br-dw-sec">
				<div className="flex-row w-60">
					<div className="flex-row out-sec">
						<div className="flex-col w-50">
<<<<<<< HEAD
							<div><label htmlFor="shoppingCredit" className="red">Shopping Credit</label></div>
							<div><label htmlFor="downPayment" className="red">Down Payment</label></div>
							<div><label htmlFor="monthInstalment" className="red">Monthly Installment</label></div>
							<div><label htmlFor="tenure" className="red">Tenure</label></div>
						</div>
						<div className="w-50 flex-col">
							<div><label className="h2 red ml-1" id="shoppingCredit">{state.shoppingCredit?state.shoppingCredit:''}</label></div>
							<div><label className="h2 red ml-1" id="downPayment">{state.downPayment?'N'+state.downPayment:''}</label></div>
							<div><label className="h2 red ml-1" id="monthInstalment">{state.monthlyRepayment?'N'+state.monthlyRepayment:''}</label></div>
							<div><label className="h2 red ml-1" id="tenure">{state.activePlan} Month{state.activePlan>1?'s':''}</label></div>
=======
							<label htmlFor="shoppingCredit" className="red">Shopping Credit</label>
							<label htmlFor="downPayment" className="red">Down Payment</label>
							<label htmlFor="monthInstalment" className="red">Monthly Installment</label>
							<label htmlFor="tenure" className="red">Tenure</label>
						</div>
						<div className="w-50">
							<label className="h2 red ml-1" id="shoppingCredit">{state.shoppingCredit?state.shoppingCredit:''}</label>
							<label className="h2 red ml-1" id="downPayment">{state.downPayment?state.downPayment:''}</label>
							<label className="h2 red ml-1" id="monthInstalment">{state.monthRepayment?state.monthRepayment:''}</label>
							<label className="h2 red ml-1" id="tenure">{state.activePlan} Month{state.activePlan>1?'s':''}</label>
>>>>>>> origin/main
						</div>
					</div>
				</div>
				<div className="flex-col form-col dp-col w-40">
					<div className="flex-col center-align">
						<p className="flex-row center-justify center-align white">Customize Down Payment</p>
						<div className="flex-row form-icon-div left-icon">
							<div className="red"><span className="naira">N</span></div>
							<input id="downPayment" 
<<<<<<< HEAD
								onChange={e=>dispatch({type:'updatePassiveDownPayment', payload:e.target.value})} />
						</div>
					</div>
					<div className="flex-row center-justify center-align mt-3">
						<button className="oval white white-bdr" onClick={()=>dispatch({type:'updateRepayment'})}>Update Breakdown</button>
=======
								onChange={e=>dispatch({action:'updatePassiveDownPayment', payload:e.target.value})} />
						</div>
					</div>
					<div className="flex-row center-justify center-align mt-3">
						<button className="oval white white-bdr" onClick={()=>dispatch({action:'updateRepayment'})}>Update Breakdown</button>
>>>>>>> origin/main
					</div> 
				</div>
			</div>
		</div>
	)
}
