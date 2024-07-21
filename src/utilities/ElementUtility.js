export const createClassedElement = (elementType, className) => {
	const element = document.createElement(elementType);

	element.classList.add(className);

	return element;
};
