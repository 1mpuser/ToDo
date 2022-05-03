import './styles/App.css';
// import { nanoid } from 'nanoid';
// import fetchTodos from './scripts/fetchTodos';
// import { useState, useMemo, useEffect } from 'react';
// import FormDiv from './components/UI/FormDiv/FormDiv';
// import ToDoList from './components/UI/TodoList/ToDoList';
// import MySelect from './components/UI/select/MySelect';
// import MyInput from './components/UI/input/MyInput';
// import SearchDiv from './components/SearchDiv/SearchDiv';
// import TodoFilter from './components/TodoFilter/TodoFilter';
// import ModalWindow from './components/UI/ModalWIndow/ModalWindow';
// import MyButton from './components/UI/button/MyButton';
// import { useSortedTodos } from './hooks/useSortedTodos';
// import { useSearchTodos } from './hooks/useSearchTodos';
// import Loader from './components/UI/Loader/Loader';
// import useFetching from './hooks/useFetching';
// import getOptionsWithSortText from './scripts/getOptionsWithSortText';
// import getPageCount from './scripts/getPageCount';
// import usePagination from './hooks/usePagination';
// import PageWrapper from './components/pageWrapper/PageWrapper';
import AboutStartPage from './pages/AboutStartPage';
import ToDoPage from './pages/ToDoPage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
	//return needed and commit with indications wat this is old version of react router dom
	return (
		<BrowserRouter>
			<Route path='/about'>
				<AboutStartPage />
			</Route>
			<Route path='/todos'>
				<ToDoPage />
			</Route>
		</BrowserRouter>
	);
}

export default App;
