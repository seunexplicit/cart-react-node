import React, { Fragment, useState } from 'react';

const workType = [
	{
		type:'Paid Employment',
		imageUrl:'paidemployment'
	},
	{
		type:'Self Employed / Freelance',
		imageUrl:'selfemployed'
	},
	{
		type:'Corporate Organization',
		imageUrl:'corporateorganization'
	}
]

const imgRelLink = '../../../../../';

function CustomerWork({ data, setData }){
	return(
		<Fragment>
			{
				workType.map(function(value){
					<div className={"workType"+data.workType===value.type?'active':''} onClick={setData({...data, workType:value.type})}>
						<div className={"flex-row center-justify center-align "}>
							<img src={imgRelLink+value.imageUrl}/>
						</div>
						<p>{ value.type }</p>
					</div>	
				})
			}
		</Fragment>
	)
}

export const CustomerDataComponent = (props)=>{

	[data, setData] = useState({
		monthlyPay:'',
		lastPayDate:'',
		existingLoan:'',
		workType:''
	});

	function changeCustomer(value){
		if(!value){}
		else if(!(/^\d+$/.test(value))){
			setData({...data, monthlyPay:value.substring(0, value.length-1)})
		}
		else{
			setData({...data, monthlyPay:value})
		}
	}

	return(
		<div>
			<p className="h2">What Do You Do?</p>
			<CustomerWork data={ data }, setData={ setData }></CustomerWork>
			<div>
				<div className="flex-col">
					<label>How Much Do You Get Paid Monthly?</label>
					<div>
						<span></span>
						<input name="" value={ data.monthlyPay } onChange={e=>changeCustomer(e.target.value)}/>
					</div>
				</div>
				<div className="flex-col">
					<label>When Is Your Last Salary Date?</label>
					<div>
						<span></span>
						<input type="date" name="" onChange={e=>setData({...data, lastPayDate:e.target.value})}/>
					</div>
				</div>
				<div className="flex-col">
					<label>Do You Have Any Existing Loan?</label>
					<div className="flex-col form-radio-group">
						<div>
							<input type="radio" value="yes" name="existingloan" onChange={e=>setData({...data, existingLoan:e.target.checked?"Yes", "No"})}/>
							<label>Yes</label>
						</div>
						<div>
							<input type="radio" value="no" name="existingloan"/>
							<label>Yes</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}