import {
	DefaultTheme,
} from "../themes";

import Dom from "../utils/DOM";

class MainContainer {
	constructor({
		profile,
		work,
		projects,
		education,
	}) {
		/* eslint-disable no-new */
		new DefaultTheme(Dom.elm("#root"), {
			profile,
			work,
			projects,
			education,
		});

		this._totopbtn = document.querySelector("#totopbtn");
		this._init();
	}

	_init() {
		this._totopbtn.addEventListener("click", e => {
			e.preventDefault();
			window.scrollTo(0, 0);
		});
	}
}

export default MainContainer;
