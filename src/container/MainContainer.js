import {
	DefaultTheme,
} from "../themes";

import Dom from "../utils/DOM";

class MainContainer {
	constructor(userSelectTheme, data) {
		this._buildTheme();
		this._generateResume(userSelectTheme, data);
		this._initVar();
		this._attachEvent();
	}

	// Add theme
	_buildTheme() {
		this._themes = {
			default: DefaultTheme,
		};
	}

	_generateResume(theme, data) {
		/* eslint-disable no-new */
		new this._themes[theme](Dom.elm("#root"), data);
	}

	_initVar() {
		this._totopbtn = document.querySelector("#totopbtn");
	}

	_attachEvent() {
		this._totopbtn.addEventListener("click", e => {
			e.preventDefault();
			window.scrollTo(0, 0);
		});
	}
}

export default MainContainer;
