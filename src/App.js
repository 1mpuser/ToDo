// import Todo from './components/UI/todo/Todo';
// import MyButton from './components/UI/button/MyButton';
// import WantedButton from './components/UI/normal button/WantedButton';
// import MyInput from './components/UI/input/MyInput';
import './styles/App.css';
//import { nanoid } from 'nanoid';
import { useState, useMemo } from 'react';
import FormDiv from './components/UI/FormDiv/FormDiv';
import ToDoList from './components/UI/TodoList/ToDoList';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
	//let id = nanoid;
	//const buttonRef = useRef();
	const [toDoContent, setToDoContentArr] = useState([
		{
			title: 'JS',
			body: 'Js - норм, а все кто его хейтит петухи',
			color: 'yellow',
		},
		{ title: 'Java', body: 'Java - ну такое', color: 'tomato' },
		{ title: 'Le petuhon', body: 'Петухон для быдла', color: 'hotpink' },
	]);
	const [sortType, setSortType] = useState('');

	const createToDo = (newToDo) => {
		//this createbutton would throw in form div which would return an object
		setToDoContentArr([...toDoContent, newToDo]);
	};
	const removeTodo = (removeElem) => {
		setToDoContentArr(toDoContent.filter((item) => item !== removeElem));
		//we'll throw this to button which would return todo object
	};
	const sortObjs = (sort) => {
		setSortType(sort);
	};
	function getSortedPosts() {
		console.log('khuynya');
		if (sortType)
			return [...toDoContent].sort((a, b) =>
				a[sortType].localeCompare(b[sortType])
			);
		return toDoContent;
	}
	let sortedContent = useMemo(() => getSortedPosts(), [sortType, toDoContent]);
	//this search functional is not much needed but we'll do it 4 practice
	const [searchText, setSearchText] = useState('');

	return (
		<>
			<FormDiv create={createToDo} />
			<br></br>
			<br></br>
			<MyInput
				type='text'
				value={searchText}
				onChange={(event) => setSearchText(event.target.value)}
			/>
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
						value: 'body',
						name: 'По названию текста todo',
					},
				]}
				value={sortType}
				setValue={sortObjs}
			/>
			<ToDoList remove={removeTodo} objs={sortedContent} />
		</>
	);
}

export default App;
