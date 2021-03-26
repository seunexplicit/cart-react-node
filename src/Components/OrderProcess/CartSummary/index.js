import { OrderList } from './Module/OrdersList.Component';
import { CartProvider } from '../../../Hooks/Cart.Hook';

export const OrderListTab = ()=>{
		return(
			<CartProvider>
				<OrderList />
			</CartProvider>
			)
	}  