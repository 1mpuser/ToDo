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
import SearchDiv from './components/SearchDiv/SearchDiv';
import getSearchOptions from './scripts/NewOptionSearchOptionArr';
import TodoFilter from './components/TodoFilter';
import ModalWindow from './components/UI/ModalWIndow/ModalWindow';
import MyButton from './components/UI/button/MyButton';

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
	const [options, setOptions] = useState([
		{
			value: 'title',
			name: 'По названию todo',
		},
		{
			value: 'body',
			name: 'По тексту todo',
		},
	]);

	const [sortType, setSortType] = useState('');

	const createToDo = (newToDo) => {
		//this createbutton would throw in form div which would return an object
		setVisible(false);
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
		if (sortType)
			return [...toDoContent].sort((a, b) =>
				a[sortType].localeCompare(b[sortType])
			);
		return toDoContent;
	}
	let optionsWithSearchText = useMemo(
		() => getSearchOptions(options),
		[options]
	);
	const sortedContent = useMemo(
		() => getSortedPosts(),
		[sortType, toDoContent]
	);
	//this search functional is not much needed but we'll do it 4 practice
	const [searchText, setSearchText] = useState('');
	const [searchType, setSearchType] = useState('');

	const [searchedAndSortedTODOS, setSearchedAndSortedTODOS] = useState('');

	function search() {
		if (searchText !== '' && searchType !== 'Тип поиска') {
			setSearchedAndSortedTODOS(sortedContent);
			setSearchedAndSortedTODOS(
				[...searchedAndSortedTODOS].filter((item) =>
					item[searchType].toLowerCase().includes(searchText.toLowerCase())
				)
			);
		} else setSearchedAndSortedTODOS(sortedContent);
	}
	const searchingRender = useMemo(
		() => search(),
		[sortedContent, searchType, searchText]
	);
	function setType(type) {
		setSearchType(type);
	}
	function setSearchingText(text) {
		setSearchText(text);
	}
	const [visible, setVisible] = useState(false);
	return (
		<>
			{/* <MyButton style={{ margin: 30 }} onClick={() => setVisible(true)}>
				Создать пользователя
			</MyButton> */}
			<ModalWindow visible={visible} setVisible={setVisible}>
				<FormDiv create={createToDo} />
			</ModalWindow>
			<br></br>
			<br></br>
			<SearchDiv
				options={optionsWithSearchText}
				typeSetter={setType}
				setQuery={setSearchingText}
			/>
			{/* <br></br>
			<br></br> */}
			{/* <MyInput
				type='text'
				value={searchText}
				onChange={(event) => setSearchText(event.target.value)}
			/> */}
			<br></br>
			<br></br>
			<TodoFilter options={options} returnSortArr={sortObjs} />
			<ToDoList remove={removeTodo} objs={searchedAndSortedTODOS} />
		</>
	);
}

export default App;
