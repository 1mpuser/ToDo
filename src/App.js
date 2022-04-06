import Todo from './components/Todo';
import './styles/App.css';
import { nanoid } from 'nanoid';
import { useState, useRef } from 'react';
import MyButton from './components/UI/button/MyButton';
import WantedButton from './components/UI/normal button/WantedButton';
import MyInput from './components/UI/input/MyInput';
import FormDiv from './components/UI/FormDiv/FormDiv';

function App() {
	let id = nanoid;
	const buttonRef = useRef();
	const [arr, setArr] = useState(['JS', 'Java', 'Le petuhon']);
	//todo
	//сделать

	//в идеале тут должен быть массив объектов, которые мы можем перебирать там,
	//добавлять различный функционал
	const todos = arr.map((item, index) => (
		<Todo key={id()} id={index} name={item} />
	));
	const createToDo = (newToDo) => {
		setArr([...arr, newToDo]);
	};
	return (
		<>
			<FormDiv create={createToDo} />
			{todos}
			<br></br>
		</>
	);
}

export default App;
