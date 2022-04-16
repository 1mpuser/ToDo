import axios from 'axios';
export default async function fetchTodos() {
	const responce = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);
	return responce.data;
	//написано для импорта
}
