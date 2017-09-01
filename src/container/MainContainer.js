import {
	Profile,
	Work,
	Project,
	Technique,
	Study,
} from "../components";


class MainContainer {
	constructor(data) {
		console.log(data);
		this.Profile = Profile;
		this.Work = Work;
		this.Project = Project;
		this.Technique = Technique;
		this.Study = Study;
	}
}

export default MainContainer;
