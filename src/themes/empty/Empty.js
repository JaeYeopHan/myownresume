import Component from "../Component";
import EmptyTemplate from "./EmptyTemplate.hbs";
import "./EmptyStyleCommon.css";
import "./EmptyStyleMobile.css";
import "./EmptyStyleDesktop.css";

class Empty extends Component {
	constructor(root) {
		super(root);
		super.render(EmptyTemplate({
		}));
	}
}

export default Empty;
