import Component from "../Component";
import DefaultTemplate from "./DefaultTemplate.hbs";
import "./DefaultStyleCommon.css";
import "./DefaultStyleMobile.css";
import "./DefaultStyleDesktop.css";

import Dom from "../../utils/DOM";

class Default extends Component {
	constructor(root, {
		profile = {},
		work = {},
		blog = {},
		projects = {},
		education = {},
		activity = {},
	}) {
		super(root);
		super.render(DefaultTemplate({
			...profile.info,
			...profile.link,
			work,
			blog,
			projects,
			education,
			activity,
		}));

		Default._render({
			work,
		});
	}

	// TODO Add description and refactoring
	static _render({work}) {
		work.forEach(({logo}, idx) => {
			Dom.elm(`#work_logo_${idx}`).style.backgroundImage = `url("/images/work/${logo}.png")`;
		});
	}
}

export default Default;
