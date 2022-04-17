// import Todo from './components/UI/todo/Todo';
// import WantedButton from './components/UI/normal button/WantedButton';
import './styles/App.css';
//import { nanoid } from 'nanoid';
import fetchTodos from './scripts/fetchTodos';
import { useState, useMemo, useEffect } from 'react';
import FormDiv from './components/UI/FormDiv/FormDiv';
import ToDoList from './components/UI/TodoList/ToDoList';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import SearchDiv from './components/SearchDiv/SearchDiv';
import getSearchOptions from './scripts/NewOptionSearchOptionArr';
import TodoFilter from './components/TodoFilter';
import ModalWindow from './components/UI/ModalWIndow/ModalWindow';
import MyButton from './components/UI/button/MyButton';
import { useSortedTodos } from './hooks/useSortedTodos';
import { useSearchTodos } from './hooks/useSearchTodos';
import Loader from './components/UI/Loader/Loader';
import useFetching from './hooks/useFetching';
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
	const archivedOptions = useMemo(() => {
		console.log('Options changed');
		return options;
	}, [options]);

	const [sortType, setSortType] = useState('');

	const optionsWithSearchText = useMemo(
		() => getSearchOptions([...options]),
		[options]
	);
	const sortedContent = useSortedTodos(toDoContent, sortType);
	//this search functional is not much needed but we'll do it 4 practice
	const [searchText, setSearchText] = useState('');
	const [searchType, setSearchType] = useState('');

	const searchedAndSortedTODOS = useSearchTodos(
		sortedContent,
		searchType,
		searchText
	);

	const [modalVisible, setModalStatus] = useState(false);

	const [fetching, isLoadingStatus, error] = useFetching(async () => {
		const responce = await fetchTodos();
		return setToDoContentArr(responce);
	});
	useEffect(() => {
		async function fet() {
			await fetching();
		}
		fet();
	}, []);
	return (
		<>
			{/* <MyButton
				style={{ margin: 50 }}
				onClick={() => {
					fetchTodos().then(setToDoContentArr);
				}}
			>
				ДАТА
			</MyButton> */}
			<MyButton
				style={{ margin: 10 }}
				onClick={() => setModalStatus(!modalVisible)}
			>
				Создать пользователя
			</MyButton>
			<ModalWindow visible={modalVisible} setVisible={setModalStatus}>
				<FormDiv
					create={(newToDo) => setToDoContentArr([...toDoContent, newToDo])}
				/>
			</ModalWindow>
			<br></br>
			<br></br>
			<SearchDiv
				typeSetter={(type) => setSearchType(type)}
				setQuery={(text) => setSearchText(text)}
				options={optionsWithSearchText}
				defaultValue={'Тип поиска'}
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
			<TodoFilter
				options={archivedOptions}
				returnSortArr={(sort) => setSortType(sort)}
			/>
			{isLoadingStatus ? (
				<div
					style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
				>
					<Loader />
				</div>
			) : (
				<ToDoList
					remove={(removeElem) =>
						setToDoContentArr(toDoContent.filter((item) => item !== removeElem))
					}
					objs={searchedAndSortedTODOS}
				/>
			)}
		</>
	);
}

export default App;
