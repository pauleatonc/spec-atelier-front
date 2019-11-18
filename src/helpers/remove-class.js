const removeClassToAllItems = (items, classToRemove) => {
	items.forEach(item => {
		item.classList.remove(classToRemove);
	});
};

export default removeClassToAllItems;
