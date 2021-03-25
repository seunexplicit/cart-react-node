import React from 'react';


export const CartValue = (props)=>{
	return(
		<div className="flex-row center-align">
			<p className="grey">Total Cart Value</p>
			<p>
			{
				TotalCost(props)
			}
			</p>
		</div>
	)
}


function TotalCost(props){
	let totalValue = 0;
	for( let item of props.items){
		totalValue+=item.cost*item.quantity;
	}

	return(
		<p className="h2">{ totalValue }</p>
	)
}