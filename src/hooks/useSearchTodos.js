import { useMemo } from 'react';
export const useSearchTodos = (sortedTodos, searchTypeNSearchTextInArr) => {
	let defaultTextSearchOption = 'Тип поиска';
	const [searchType, textToSearch] = searchTypeNSearchTextInArr;

	const foundTodos = useMemo(
		() => search(),
		[sortedTodos, searchType, textToSearch, defaultTextSearchOption]
	);
	function search() {
		if (textToSearch !== '' && searchType !== defaultTextSearchOption) {
			return [...sortedTodos].filter((item) =>
				item[searchType].toLowerCase().includes(textToSearch.toLowerCase())
			);
		} else return sortedTodos;
	}
	return foundTodos;
};
