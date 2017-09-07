import Component from "../Component";
import EducationTemplate from "./EducationTemplate.hbs";
import "./EducationStyle.css";
import "./EducationStyleMobile.css";
import "./EducationStyleDesktop.css";

class Education extends Component {
	constructor(root, education) {
		super(root);
		super.render(EducationTemplate({
			education,
		}));
	}
}

export default Education;
