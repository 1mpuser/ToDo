export default getOptionsWithSortText;
function getOptionsWithSortText(arr) {
	const tmpOption = [...arr];
	tmpOption.map((item) => {
		const split = item.name.split(' ');
		split[0] = split[0].toLowerCase();
		split.unshift('Сортировка');
		item.name = split.join(' ');
		return item;
	});
	return tmpOption;
}
