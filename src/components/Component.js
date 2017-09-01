import Dom from "../utils/DOM";
/**
 * Parent class for component
 */
class Component {
	/**
	 * @param {HTMLElement} root The root element for which the component will be rendered.
	 */
	constructor(root) {
		this._root = root;
	}

	/**
	 * @param {HandlebarTemplate} template
	 * @param {HTMLSelector} selector (optional)
	 * @return undefined
	 */
	render(template, selector = undefined) {
		this.subRoot = Dom.render(
			this._root,
			template,
			selector,
		);
	}

	/**
	 * @Getter
	 * @return {HTMLElement} HTMLElement to pending template
	 */
	get subRoot() {
		if (this.subRoot) {
			return this.subRoot;
		}
		return undefined;
	}
}

export default Component;
