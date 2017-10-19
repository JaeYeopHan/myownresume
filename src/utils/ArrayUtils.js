const utils = {
	/**
	 * @param {Array} arr
	 * @param {Object} {condition, callback} args
	 */
	applyTo: (arr, ...args) => {
		if (!Array.isArray(arr)) {
			throw Error("[Error] Required array for first parameter.");
		}

		if (arr.length < 1) {
			throw Error("[Error] Invalid parameter.");
		}

		args.forEach(({condition, callback}) => {
			arr.filter(condition).forEach(val => callback(val));
		});
	},
};

export default utils;
