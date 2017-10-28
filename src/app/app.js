import data from "../../data/data.json";
import {themes} from "../../data/themes.json";
import MainContainer from "../container";

import "../assets/style/normalize.css";
import "../assets/style/index.css";

/**
 * @class
 * 1. load data(default: data.json)
 * 2. selected theme
 */
export default class App {
	constructor() {
		this.main = new MainContainer(data, themes);
	}
}
