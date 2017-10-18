import * as themesTemplate from "../themes";

import Dom from "../utils/DOM";

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
		this._buildTheme(themesInfo);
		this._generateResume(data.theme, data);
	}

	/**
	 * @private
	 * @param {String[]} themesInfo
	 * @description build themes
	 */
	_buildTheme(themesInfo) {
		this._themes = {};
		themesInfo.forEach(theme => {
			this._themes[theme] = themesTemplate[theme];
		});
	}

	/**
	 * @private
	 * @param {String} theme 
	 * @param {Object} data 
	 * @description Create real render component. end point!!
	 */
	_generateResume(theme, data) {
		/* eslint-disable no-new */
		new this._themes[theme](Dom.elm("#root"), data);
	}
}

export default MainContainer;
