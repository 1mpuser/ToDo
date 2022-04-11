export default getSearchOptions;
function getSearchOptions(options) {
	return [...options].map((item) => {
		let text = item.name;
		let splitText = text.split(' ');
		splitText[0] = splitText[0].toLowerCase();
		splitText.unshift('Поиск');
		item.name = splitText.join(' ');
		return item;
	});
}
