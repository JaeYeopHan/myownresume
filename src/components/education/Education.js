import EducationTemplate from "./EducationTemplate.hbs";
import "./EducationStyle.css";

class Education {
	constructor(data) {
		this.data = data;
		this.template = EducationTemplate;
	}
}

export default Education;
