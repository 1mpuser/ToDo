import './styles/App.css';
import { nanoid } from 'nanoid';
import AboutStartPage from './pages/AboutStartPage';
import ToDoPage from './pages/ToDoPage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'; //this is 5.2.0 version cause 6.3.0 doesnt work
import Router from './components/UI/Router/Router';
import NavBar from './components/UI/NavigationBar/NavBar';
function App() {
	const ArrWithRefs = [
		{ ref: '/about', description: 'About this React page' },
		{ ref: '/todos', description: 'Just Todos' },
	];
	return (
		<BrowserRouter>
			<NavBar ObjArray={ArrWithRefs} />
			<Router />
		</BrowserRouter>
	);
}

export default App;
