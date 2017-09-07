import Component from "../Component";
import ProjectTemplate from "./ProjectTemplate.hbs";
import "./ProjectStyle.css";
import "./ProjectStyleMobile.css";
import "./ProjectStyleDesktop.css";

class Project extends Component {
	constructor(root, projects) {
		super(root);
		super.render(ProjectTemplate({
			projects,
		}));
	}
}

export default Project;
