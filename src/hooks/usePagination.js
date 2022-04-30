import { useMemo } from 'react';
const usePagination = (totalPages) => {
	let arr = useMemo(() => {
		const arr = [];
		for (let i = 1; i <= totalPages; i++) arr.push(i);
		return arr;
	}, [totalPages]);
	return arr;
};

export default usePagination;
