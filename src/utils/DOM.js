const DOM = {
	render: (root, template, value) => {
		const wrapper = document.createElement("DIV");

		wrapper.innerHTML = template;
		root.appendChild(wrapper);

		if (value) {
			return document.querySelector(value);
		}
		return wrapper;
	},
	elm: selector => document.querySelector(selector),
};

export default DOM;
