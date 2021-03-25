import React from 'react';
import { PayBackComponent } from './Module/PaybackData.Component';
import { CustomerDataComponent } from './Module/CustomerWorkData.Component'

const imageUrl = '../../../../../../';

function ProgressIndicator(index){
	if(state===1){
		return(
			<div className="flex-row center-justify center-align">
				<span>{index}</span>
				<img src={imageUrl+'mark.png'} />
			</div>
		)
	}
	else if(state===2){
		return(
			
		)
	}
}

export const PreApproval = (props)=>{
	return(
		<div>
			<div>
				<a href={}>
					<img src={imageUrl+'backicon.png'}/>
				</a>
				<div>
					<div className="flex-row center-justify">
						<div className="flex-row center-justify center-align">
							<span>1</span>
							<img src={imageUrl+'mark.png'} />
						<div>
					</div>
				</div>
			</div>
		<div>
	)
}


