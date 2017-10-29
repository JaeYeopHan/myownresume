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

	/**
     * @param {Array} arr
     */
	makeObj: (arr, val = undefined) => {
		if (!Array.isArray(arr)) {
			throw Error("[Error] Required array for first parameter.");
		}
		const target = {};

		arr.forEach(value => {
			if (typeof value === "string") {
				if (val) {
					target[value] = val[value];
				} else {
					target[value] = value;
				}
			} else {
				target[Object.keys(value)[0]] = Object.values(value)[0];
			}
		});

		return target;
	},
};

export default utils;
