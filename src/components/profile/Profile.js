import Component from "../Component";
import ProfileTemplate from "./ProfileTemplate.hbs";
import "./ProfileStyle.css";
import "./ProfileStyleMobile.css";
import "./ProfileStyleDesktop.css";

class Profile extends Component {
	constructor(root, {info, link}) {
		super(root);
		super.render(ProfileTemplate({
			...info,
			...link,
		}));
	}
}

export default Profile;
