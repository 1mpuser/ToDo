import { useMemo } from 'react';
const usePagination = (totalPages) => {
	const arr = useMemo(() => {
		const arr = [];
		for (let i = 0; i < totalPages; i++) arr.push(i);
		return arr;
	}, [totalPages]);
	return arr;
};

export default usePagination;
