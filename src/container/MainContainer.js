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
		this.profile = new Profile(Dom.elm("#root"), profile);
		this.Work = Work;
		this.Project = Project;
		this.Technique = Technique;
		this.Study = Study;
	}
}

export default MainContainer;
