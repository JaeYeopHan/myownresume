import Component from "../Component.ts";
import * as DefaultTemplate from "./DefaultTemplate.hbs";
import "./styles/main.scss";

class Default extends Component {
    private test: string;
    constructor(root, {
        profile = {},
        work = {},
        blog = {},
        projects = {},
        education = {},
        activity = {},
    } = {}) {
        super(root, [
            {profile, isNeedImage: true},
            {work, isNeedImage: true},
            {blog, isNeedImage: true},
            {projects, isNeedImage: false},
            {education, isNeedImage: true},
            {activity, isNeedImage: true},
        ]);
        super.render(DefaultTemplate);

        this.attachEvent();
    }

    /**
     * @static
     * @description Attach events to variables
     */
    private attachEvent() {
        this.test = "test";
        document.querySelector("#totopbtn").addEventListener("click", e => {
            e.preventDefault();
            window.scrollTo(0, 0);
        });
    }
}

export default Default;
