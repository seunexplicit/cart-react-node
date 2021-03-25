import React from 'react';
import { Link } from 'react-router-dom';
import { PreApprovalTab } from './CheckoutProcess';
import { OrderListTab } from './CartSummary';

import './style.css';

const imgsrc = '../../public/images/';

export class OrderProcessPage  extends React.Component{

	render(){
		return(
			<div className="flex-row wrap">
				<div className="flex-col w-30">
					<div>
						<Link className="flex-row">
							<img alt="back to store" src={imgsrc+'backarrowwhite.png'}/>
							<p>Back To Store</p>
						</Link>
					</div>
					<div className="flex-row center-justify">
						<img src={imgsrc+'payqartlogo.png'} alt="paqart store center, you shop we pay"/>
					</div>
					<div>
						<ul>
							<li> Get pre-approved instantly.</li>
							<li>Spread payment for up to six months.</li>
							<li>Provide some basic information to get started</li>

						</ul>
					</div>
				</div>
				<div className="w-25">
					<OrderListTab />
				</div>
				<div className="w-45">
					<PreApprovalTab match={ this.props.match } />
				</div>
			</div>
		)
	}
}