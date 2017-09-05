import {
	Profile,
	Work,
	Project,
	Technique,
	Study,
} from "../components";

import Dom from "../utils/DOM";

class MainContainer {
	constructor({
		profile,
		work,
		project,
		technique,
		study,
	}) {
		this._profile = new Profile(Dom.elm("#root"), profile);
		this._work = new Work(this._profile.subRoot, work);
		this._project = new Project(this._work.subRoot, project);
		this._technique = Technique;
		this._study = Study;
	}
}

export default MainContainer;
