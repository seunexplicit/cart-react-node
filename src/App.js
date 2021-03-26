import { OrderProcessPage } from './Components/OrderProcess';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    	<Router>
    		<Switch>
      			<Route path="/" component={ OrderProcessPage } />
      		</Switch>
      	</Router>
    </div>
  );
}

export default App;
