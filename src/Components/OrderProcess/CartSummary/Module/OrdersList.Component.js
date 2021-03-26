import React, { useContext } from 'react';
import { CartValue } from './CartValue.Component';
import { CartContext } from '../../../../Hooks/Cart.Hook';

<<<<<<< HEAD
const imageUrl = '../../../../images/';
=======
const imageUrl = '../../../../../public/images/';
>>>>>>> origin/main

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
<<<<<<< HEAD
								<div className="cart-sum-img flex-row center-align center-justify">
									<img src={imageUrl+value.imgsrc} className="w-100" alt={ value.name }/>
=======
								<div className="cart-sum-img center-align center-justify">
									<img src={imageUrl+value.imgsrc} alt={ value.name }/>
>>>>>>> origin/main
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