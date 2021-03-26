import	{ CustomerDataComponent } from './Module/CustomerWorkData.Component';
import { PayBackComponent } from './Module/PaybackData.Component';
import { CartProvider } from '../../../../../Hooks/Cart.Hook';


export const CustomerDataComp = CustomerDataComponent;
export const PayBackComp = ()=>{
		return(
			<CartProvider>
				<PayBackComponent/>
			</CartProvider>
		)
	}
