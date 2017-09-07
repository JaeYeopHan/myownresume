import Component from "../Component";
import ToTopBtnTemplate from "./ToTopBtnTemplate.hbs";
import "./ToTopBtnStyle.css";

class ToTopBtn extends Component {
	constructor(root) {
		super(root);
		super.render(ToTopBtnTemplate({}));
	}
}

export default ToTopBtn;
