import MainContainer from "../container/index.ts";

import "../assets/style/normalize.css";
import "../assets/style/index.css";

const data = require("../../data/data.json");
const {themes} = require("../../data/themes.json");

/**
 * @class
 * 1. load data(default: data.json)
 * 2. selected theme
 */
export default class App {
	constructor() {
		/* eslint-disable no-new */
		new MainContainer(data, themes);
	}
}
