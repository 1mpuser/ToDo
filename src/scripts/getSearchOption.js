export default getSearchOptionText;
function getSearchOptionText(optionText) {
	let text = String(optionText); // its better String(optionText) the new String(optionText)
	if (text != optionText) return optionText;
	const split = text.split(' ');
	split[0] = split[0].toLowerCase();
	split.unshift('Поиск');
	text = split.join(' ');
	return text;
}
