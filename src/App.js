import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './Screens/UserList';
import UserAdd from './Screens/UserAdd';

function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={UserList} />
				<Route exact path='/adduser' component={UserAdd} />
			</Router>
		</div>
	);
}

export default App;
