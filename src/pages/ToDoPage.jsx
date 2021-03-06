import './ToDoPage.css';
import { nanoid } from 'nanoid';
import fetchTodos from '../scripts/fetchTodos';
import { useState, useEffect } from 'react';
import FormDiv from '../components/UI/FormDiv/FormDiv';
import ToDoList from '../components/UI/TodoList/ToDoList';
import SearchDiv from '../components/SearchDiv/SearchDiv';
import TodoFilter from '../components/TodoFilter/TodoFilter';
import ModalWindow from '../components/UI/ModalWIndow/ModalWindow';
import MyButton from '../components/UI/button/MyButton';
import { useSortedTodos } from '../hooks/useSortedTodos';
import { useSearchTodos } from '../hooks/useSearchTodos';
import Loader from '../components/UI/Loader/Loader';
import useFetching from '../hooks/useFetching';
import getPageCount from '../scripts/getPageCount';
import usePagination from '../hooks/usePagination';
import PageWrapper from '../components/pageWrapper/PageWrapper';
export function ToDoPage() {
	const id = nanoid;
	const [toDoContent, setToDoContentArr] = useState([]);

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

	//special states 4 pagiation
	const [totalPages, setTotalPages] = useState(0);
	const [pageLimit, setPageLimit] = useState(10);
	const [pageNumber, setPageNumber] = useState(2);
	const pagesArray = usePagination(totalPages);
	//

	const [fetching, isLoadingStatus, error] = useFetching(async () => {
		const responce = await fetchTodos(pageLimit, pageNumber);
		setToDoContentArr(responce.data);
		setTotalPages(getPageCount(responce.headers['x-total-count'], pageLimit));
	});

	useEffect(() => {
		async function fet() {
			await fetching();
		}
		fet();
	}, [pageNumber]);
	return (
		<>
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
				options={options}
				defaultValue={'Тип поиска'}
			/>
			<br></br>
			<br></br>
			<TodoFilter
				options={[...options]}
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
			{
				<PageWrapper
					arrWithTotalPages={pagesArray}
					currentPage={pageNumber}
					PageSet={(numberOfPageFromButton) =>
						setPageNumber(numberOfPageFromButton)
					}
				/>
			}
		</>
	);
}

export default ToDoPage;