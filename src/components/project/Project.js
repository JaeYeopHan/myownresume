import ProjectTemplate from "./ProjectTemplate.hbs";
import "./ProjectStyle.css";

class Project {
	constructor(data) {
		this.data = data;
		this.template = ProjectTemplate;
	}
}

export default Project;
