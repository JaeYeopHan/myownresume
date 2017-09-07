import Component from "../Component";
import FooterTemplate from "./FooterTemplate.hbs";
import "./FooterStyle.css";

class Footer extends Component {
	constructor(root) {
		super(root);
		super.render(FooterTemplate({}));
	}
}

export default Footer;
