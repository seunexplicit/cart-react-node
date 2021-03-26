import { Fragment } from 'react'

export const Formatter = (amount)=>{
	if(amount){
		amount= amount+'';
		amount = amount.reverse();

		let formatamount = ''
		let count = 0;
		for(let digit of amount){
			count%3===0?format+=',':'';
			formatamount+=digit;
			count++;
		}

		return(
			<Fragment>
				<span className="naira">N</span>
				{ amount.reverse() }
			</Fragment>
		)
	}
	else{
		return;
	}
}