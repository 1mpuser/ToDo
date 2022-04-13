import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
export const useSortedTodos = (todos, sort) => {
	const sortedContent = useMemo(() => getSortedPosts(), [sort, todos]);

	function getSortedPosts() {
		if (sort) return [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
		else return todos;
	}
	return sortedContent;
};
