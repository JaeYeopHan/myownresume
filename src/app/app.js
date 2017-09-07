import {
	profile,
	work,
	projects,
	technique,
	study,
} from "../../data/data.json";
import MainContainer from "../container";

import "../assets/css/index.css";

export default class App {
	constructor() {
		this.main = new MainContainer({
			profile,
			work,
			projects,
			technique,
			study,
		});
	}
}
