import React, { useContext } from 'react';
import { CartValue } from './CartValue.Component';
import { CartContext } from '../../../../Hooks/Cart.Hook';

const imageUrl = '../../../../../public/images/';

export const OrderList = (props)=>{

	const cartItems = useContext(CartContext);
	
	return(
		<div className="cart-summary">
			<p className="h2 cart-title">Order Summary</p>
			<div className="cart-sum-list">
				{
					cartItems.map(function(value, index){
						return(
							<div key={ 'cartlist'+index } className="flex-row center-align">
								<div className="cart-sum-img center-align center-justify">
									<img src={imageUrl+value.imgsrc} alt={ value.name }/>
								</div>
								<div className="cart-sum-d">
									<p className="grey">{ value.name }</p>
									<p className="grey">{ value.cost }</p>
									<p className="grey">Qty: { value.quantity }</p>
								</div>
							</div>
						)
					})
				}
			</div>
			<div className="cart-value">
				<CartValue items={cartItems}/>
			</div>
		</div>
	)
}