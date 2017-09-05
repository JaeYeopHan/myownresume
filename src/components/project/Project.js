import Component from "../Component";
import ProjectTemplate from "./ProjectTemplate.hbs";
import "./ProjectStyle.css";
import "./ProjectStyleMobile.css";
import "./ProjectStyleDesktop.css";

class Project extends Component {
	constructor(root, data) {
		super(root);
		this.data = data;
		super.render(ProjectTemplate({}));
	}
}

export default Project;
