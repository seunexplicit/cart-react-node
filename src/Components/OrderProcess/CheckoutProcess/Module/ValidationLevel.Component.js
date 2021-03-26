import React from 'react';
import { PayBackComp, CustomerDataComp } from './PreApproval';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom';

const imageUrl = '../../../../images/';


function ProgressIndicator(index, state){
	if(Number(state)<index){
		return(
			<div className="flex-row center-justify p-ind center-align">
				<span>{index}</span>
			</div>
		)
	}
	else if(Number(state)===index){
		return(
			<div className="flex-row center-justify p-ind center-align active">
				<span>{index}</span>
			</div>
		)
	}
	else{
		return(
			<div className="flex-row center-justify p-ind active center-align">
				<img alt='complete' src={imageUrl+'check-mark-white.png'} />
			</div>
		)
	}
}

export const PreApproval = (props)=>{
	
	const location = useLocation();
	const history = useHistory();
	

	return(
		<div className="order-process">
			<div className="flex-row center-align navigate-indicator">
				<div className="flex-row center-justify center-align">
					<img onClick={()=>backTrackRoute() } className="sm-icon" alt="go back" src={imageUrl+'back-arrow-red.png'}/>
				</div>
				<div className="flex-row center-justify">
					<div className="flex-row center-justify center-align">
						<ProgressIndicator index={1} state={ location.pathname.charAt(1) } />
							<div className={"ind-conn"}></div>
						<ProgressIndicator index={2} state={ location.pathname.charAt(1) } />
							<div className={"ind-conn"}></div>
						<ProgressIndicator index={3} state={ location.pathname.charAt(1) } />
							<div className={"ind-conn"}></div>
						<ProgressIndicator index={4} state={ location.pathname.charAt(1) }/>
					</div>
				</div>
			</div>
			<div>
				<Router>
					<Switch>
						<Route path='/2' exact component={ CustomerDataComp } />
						<Route path='/1' exact component={ PayBackComp } />
					</Switch>
				</Router>
			</div>
			<div className="flex-row center-align center-justify mt-5">
				<button className="white-bg red oval red-bdr con-butt">Continue</button>
			</div>
		</div>
	)

	function backTrackRoute(){
		console.log(location, 'location');
		if(location.pathname.charAt(1)<2){}
		else{
			history.goBack();
		}
	}
}


