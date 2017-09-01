import Component from "../Component";
import ProfileTemplate from "./ProfileTemplate.hbs";
import "./ProfileStyle.css";
import "./ProfileStyleMobile.css";
import "./ProfileStyleDesktop.css";

class Profile extends Component {
	constructor(root, data) {
		super(root);
		this.data = data;
		this.template = ProfileTemplate;

		super.render(ProfileTemplate({}));
	}
}

export default Profile;
