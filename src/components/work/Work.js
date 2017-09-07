import Component from "../Component";
import WorkTemplate from "./WorkTemplate.hbs";
import "./WorkStyle.css";
import "./WorkStyleDesktop.css";
import "./WorkStyleMobile.css";

import Dom from "../../utils/DOM";

class Work extends Component {
	constructor(root, works) {
		super(root);
		super.render(WorkTemplate({
			works,
		}));
		works.forEach(({logo}) => {
			Dom.elm("#work_logo").style.backgroundImage = `url("../../../data/image/work/${logo}.png")`;
		});
	}
}

export default Work;
