import React, { useState, createContext } from 'react';

export const CartContext  = createContext();

export const CartProvider = ({ children })=>{

	const [ cart ] = useState([
			{
				name:'Meeysoo P45 Pro',
				quantity:2,
				cost:45000,
				imgsrc:'phone 2.jpg'
			},
			{
				name:'Men\'s Long Sleeve Shirt',
				quantity:3,
				cost:12000,
				imgsrc:'mens shirt.jpg'
			},
			{
				name:'MacBook 5 Pro',
				quantity:1,
				cost:230000,
				imgsrc:'apple laptop.png'
			}
		]);
	

	return(
		<CartContext.Provider value={ cart }>
			{ children }
		</CartContext.Provider>
	)
} 