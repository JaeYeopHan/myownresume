import StudyTemplate from "./StudyTemplate.hbs";
import "./StudyStyle.css";

class Study {
	constructor(data) {
		this.data = data;
		this.template = StudyTemplate;
	}
}

export default Study;
