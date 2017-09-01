import WorkTemplate from "./WorkTemplate.hbs";
import "./WorkStyle.css";

class Work {
	constructor(data) {
		this.data = data;
		this.template = WorkTemplate;
	}
}

export default Work;
