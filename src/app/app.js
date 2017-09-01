import {
	profile,
	work,
	project,
	technique,
	study,
} from "../../data/data.json";
import {
	ProfileSectionContainer,
	WorkSectionContainer,
	ProjectSectionContainer,
	TechniqueSectionContainer,
	StudySectionContainer,
} from "../container";

import "../assets/css/style.css";

export default class App {
	constructor() {
		this.profile = new ProfileSectionContainer(profile);
		this.work = new WorkSectionContainer(work);
		this.project = new ProjectSectionContainer(project);
		this.technique = new TechniqueSectionContainer(technique);
		this.study = new StudySectionContainer(study);
	}
}
