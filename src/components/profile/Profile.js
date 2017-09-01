import ProfileTemplate from "./ProfileTemplate.hbs";
import "./ProfileStyle.css";

class Profile {
	constructor(data) {
		this.data = data;
		this.template = ProfileTemplate;
	}
}

export default Profile;
