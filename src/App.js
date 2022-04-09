// import Todo from './components/UI/todo/Todo';
// import MyButton from './components/UI/button/MyButton';
// import WantedButton from './components/UI/normal button/WantedButton';
// import MyInput from './components/UI/input/MyInput';
import './styles/App.css';
//import { nanoid } from 'nanoid';
import { useState /*useRef*/ } from 'react';
import FormDiv from './components/UI/FormDiv/FormDiv';
import ToDoList from './components/UI/TodoList/ToDoList';
import MySelect from './components/UI/select/MySelect';

function App() {
	//let id = nanoid;
	//const buttonRef = useRef();
	const [toDoContent, setToDoContentArr] = useState([
		{
			title: 'AS',
			body: 'Js - норм, а все кто его хейтит петухи',
			color: 'yellow',
		},
		{ title: 'cava', body: 'Java - ну такое', color: 'tomato' },
		{ title: 'be petuhon', body: 'Петухон для быдла', color: 'hotpink' },
	]);
	const [selectSort, setSelectedSort] = useState('');
	const createToDo = (newToDo) => {
		setToDoContentArr([...toDoContent, newToDo]);
	};
	const removeTodo = (removeElem) => {
		setToDoContentArr(toDoContent.filter((item) => item !== removeElem));
	};
	const sortObjs = (sort) => {
		setSelectedSort(sort);
		setToDoContentArr(
			[...toDoContent].sort((a, b) => a[sort].localeCompare(b[sort]))
		);
	};
	return (
		<>
			<FormDiv create={createToDo} />
			<br></br>
			<br></br>
			<MySelect
				defaultValue={'Сратировка'}
				options={[
					{
						value: 'title',
						name: 'По названию todo',
					},
					{
						value: 'text',
						name: 'По названию текста todo',
					},
				]}
				value={selectSort}
				setValue={sortObjs}
			/>
			<ToDoList remove={removeTodo} objs={toDoContent} />
		</>
	);
}

export default App;
