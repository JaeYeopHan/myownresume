import data from "../../data/data.json";
import MainContainer from "../container";

import "../assets/css/index.css";

/**
 * @class
 * 1. load data(default: data.json)
 * 2. selected theme
 */
export default class App {
	constructor() {
		this.main = new MainContainer("default", data);
	}
}
