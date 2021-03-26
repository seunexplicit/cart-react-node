import React, { Fragment } from 'react';

export const Formatter = ({amount})=>{
	
	function processCurrency(amount){
	
		amount= amount+'';
		amount = amount.split().reverse().join();

		let formatamount = ''
		let count = 0;
		for(let digit of amount){
			if(count%3===0&&count) formatamount+=',';
			formatamount+=digit;
			count++;
	}

	return formatamount.split().reverse().join();
	if(!amount){
		return (<Fragment><Fragment/>);
	}

	return(
		<Fragment>
			<span className="naira">N</span>
			{ ()=>{processCurrency(amount)} }
		</Fragment>
	)

	
}

