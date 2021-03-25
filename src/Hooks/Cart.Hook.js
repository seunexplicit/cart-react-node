import React, { useState, createContext } from 'react';

export const CartContext  = createContext();

export const CartProvider = ({ children })=>{

	const [ cart ] = useState([
			{
				name:'Meeysoo P45 Pro',
				quantity:2,
				cost:45000,
				imgsrc:'meeysoo.png'
			},
			{
				name:'Men\'s Long Sleeve Shirt',
				quantity:3,
				cost:12000,
				imgsrc:'longsleeveshirt.png'
			},
			{
				name:'MacBook 5 Pro',
				quantity:1,
				cost:230000,
				imgsrc:'macbookpro.jpg'
			}
		]);
	

	return(
		<CartContext.Provider value={ cart }>
			{ children }
		</CartContext.Provider>
	)
} 