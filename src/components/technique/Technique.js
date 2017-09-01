import TechniqueTemplate from "./TechniqueTemplate.hbs";
import "./TechniqueStyle.css";

class Technique {
	constructor(data) {
		this.data = data;
		this.template = TechniqueTemplate;
	}
}

export default Technique;
