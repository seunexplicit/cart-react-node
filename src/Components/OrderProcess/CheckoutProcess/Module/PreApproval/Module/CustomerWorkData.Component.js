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

function CustomerWork({ data, updateData }){
	return(
		<Fragment>
			{
				workType.map(function(value){
					return(
						<div key={ value.type } className={`workType mr-2 ml-1 ${data.workType===value.type?'active':''}`} onClick={ ()=>updateData({...data, workType:value.type})}>
							<div className={"flex-row center-justify center-align "}>
								<img alt={ value.type } src={imgRelLink+value.imageUrl}/>
							</div>
							<p className="center-text red">{ value.type }</p>
						</div>
					)	
				})
			}
		</Fragment>
	)
}

export const CustomerDataComponent = (props)=>{

	const [ data, setData ] = useState({
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
		<div className="w-100">
			<p className="h2 flex-row center-justify center-align mb-1 red">What Do You Do?</p>
			<div className="flex-row center-justify w-100">
				<div className="flex-row center-justify">
					<CustomerWork data={ data } updateData={ setData }></CustomerWork>
				</div>
			</div>
			<div>
				<div className="flex-col center-align mb-2">
					<label className="mb-1 red">How Much Do You Get Paid Monthly?</label>
					<div className="flex-row form-icon-div left-icon">
						<div className="red-bg white"><span className="naira">N</span></div>
						<input name="" value={ data.monthlyPay } onChange={e=>changeCustomer(e.target.value)}/>
					</div>
				</div>
				<div className="flex-col center-align mb-2">
					<label className="mb-1 red">When Is Your Last Salary Date?</label>
					<div className="flex-row form-icon-div left-icon">
						<div className="white-bg"><img alt="last salary date" src={ imgRelLink+'calendar-icon.png' }/></div>
						<input type="date" name="" placeholder="select pay date" onChange={e=>setData({...data, lastPayDate:e.target.value})}/>
					</div>
				</div>
				<div className="flex-row mb-2 center-justify">
					<div className="flex-col w-fc">
						<label className="mb-1 red">Do You Have Any Existing Loan?</label>
						<div className="flex-row w-fc form-radio-group">
							<div className="flex-row center-justify">
								<input type="radio" value="yes" name="existingloan" onChange={e=>{/*setData({...data, existingLoan:e.target.checked?"Yes":"No"})*/}} />
								<label>Yes</label>
							</div>
							<div className="flex-row center-justify">
								<input type="radio" value="no" name="existingloan"/>
								<label>No</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}