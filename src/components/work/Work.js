import Component from "../Component";
import WorkTemplate from "./WorkTemplate.hbs";
import "./WorkStyle.css";
import "./WorkStyleDesktop.css";
import "./WorkStyleMobile.css";

class Work extends Component {
	constructor(root, data) {
		super(root);
		this.data = data;
		super.render(WorkTemplate({}));
	}
}

export default Work;
