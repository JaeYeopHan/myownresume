import {
	Profile,
	Work,
	Project,
	Education,
	Footer,
} from "../components";

import Dom from "../utils/DOM";

class MainContainer {
	constructor({
		profile,
		work,
		projects,
		education,
	}) {
		this._profile = new Profile(Dom.elm("#root"), profile);
		this._work = new Work(this._profile.subRoot, work);
		this._project = new Project(this._work.subRoot, projects);
		this._education = new Education(this._project.subRoot, education);
		this._footer = new Footer(this._education.subRoot);
	}
}

export default MainContainer;
