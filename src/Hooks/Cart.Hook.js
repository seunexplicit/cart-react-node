import React, { useState, createContext } from 'react';

export const CartContext  = createContext();

export const CartProvider = ({ children })=>{

	const [ cart ] = useState([
			{
				name:'Meeysoo P45 Pro',
				quantity:2,
				cost:45000,
<<<<<<< HEAD
				imgsrc:'phone 2.jpg'
=======
				imgsrc:'meeysoo.png'
>>>>>>> origin/main
			},
			{
				name:'Men\'s Long Sleeve Shirt',
				quantity:3,
				cost:12000,
<<<<<<< HEAD
				imgsrc:'mens shirt.jpg'
=======
				imgsrc:'longsleeveshirt.png'
>>>>>>> origin/main
			},
			{
				name:'MacBook 5 Pro',
				quantity:1,
				cost:230000,
<<<<<<< HEAD
				imgsrc:'apple laptop.png'
=======
				imgsrc:'macbookpro.jpg'
>>>>>>> origin/main
			}
		]);
	

	return(
		<CartContext.Provider value={ cart }>
			{ children }
		</CartContext.Provider>
	)
} 