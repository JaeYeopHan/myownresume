import * as themesTemplate from "../themes";

import {DOM as Dom, ArrayUtils} from "../utils";

/**
 * @class
 * @description Render resume by selected theme.
 */
class MainContainer {
	/**
	 * @constructor
	 * @param {Object} data
	 * @param {String[]} themesInfo
	 */
	constructor(data, themesInfo) {
		this._themesInfo = themesInfo;
		this._baseElementSelector = "#root";
		this._generateResume(data.theme, data);
	}

	/**
	 * @private
	 * @param {String} theme
	 * @param {Object} data
	 * @description Create real render component. end point!!
	 */
	_generateResume(theme, data) {
		const themes = ArrayUtils.makeObj(this._themesInfo, themesTemplate);

		/* eslint-disable no-new */
		new themes[theme](Dom.elm(this._baseElementSelector), data);
	}
}

export default MainContainer;
