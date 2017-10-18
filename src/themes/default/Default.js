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

		Default.renderImage({
			profile,
			work,
			education,
			activity,
		});

		Default.attachEvent();
	}

	/**
	 * @static
	 * @param {Object} destructured 
	 */
	static renderImage({profile, work, education, activity}) {
		Dom.elm(`#profile_image`).style.backgroundImage = `url("/images/profile/${profile.image}")`;
		work.forEach(({logo}, idx) => {
			Dom.elm(`#work_logo_${idx}`).style.backgroundImage = `url("/images/work/${logo}")`;
		});
		education.forEach(({logo}, idx) => {
			Dom.elm(`#education_logo_${idx}`).style.backgroundImage = `url("/images/education/${logo}")`;
		});
		activity.forEach(({logo}, idx) => {
			Dom.elm(`#activity_logo_${idx}`).style.backgroundImage = `url("/images/activity/${logo}")`;
		});
	}

	/**
	 * @static
	 * @description Attach events to variables
	 */
	static attachEvent() {
		document.querySelector("#totopbtn").addEventListener("click", e => {
			e.preventDefault();
			window.scrollTo(0, 0);
		});
	}
}

export default Default;
