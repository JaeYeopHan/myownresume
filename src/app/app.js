import {
	profile,
	work,
	project,
	technique,
	study,
} from "../../data/data.json";
import MainContainer from "../container";

import "../assets/css/style.css";

export default class App {
	constructor() {
		this.main = new MainContainer({
			profile,
			work,
			project,
			technique,
			study,
		});
	}
}
