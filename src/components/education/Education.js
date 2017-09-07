import Component from "../Component";
import EducationTemplate from "./EducationTemplate.hbs";
import "./EducationStyle.css";
import "./EducationStyleMobile.css";
import "./EducationStyleDesktop.css";

class Education extends Component {
	constructor(root, data) {
		super(root);
		this.data = data;
		super.render(EducationTemplate({}));
	}
}

export default Education;
