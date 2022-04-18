import axios from 'axios';
export default async function fetchTodos(limit = 10, page = 1) {
	const responce = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);
	return responce;
}
