import MainContainer from "../container/MainContainer.ts";

import "../assets/style/index.css";
import "../assets/style/normalize.css";

import data from "../../data/data.js";
import themesObj from "../../data/themes.js";

/**
 * @class
 * 1. load data(default: data.js)
 * 2. selected theme
 */
export default class App {
	constructor() {
		const {themes} = themesObj;
		(() => new MainContainer(data, themes))();
	}
}
