import {DOM as Dom, ArrayUtils} from "../utils";
/**
 * Parent class for component
 */
class Component {
	/**
	 * @param {HTMLElement} root The root element for which the component will be rendered.
	 * @param {Array} sections The data to rendering resume.
	 */
	constructor(root, sections) {
		this._root = root;
		this._sections = sections;
	}

	/**
	 * @param {HandlebarTemplate} template
	 * @param {HTMLSelector} selector (optional)
	 * @return undefined
	 */
	render(template, selector = undefined) {
		this.subRoot = Dom.render(
			this._root,
			template({...this._buildRenderingData()}),
			selector,
		);

		this._renderImage();
	}

	/**
	 * @param {Object[]} sections
	 */
	_renderImage() {
		return ArrayUtils.applyTo(this._buildSectionInfo(),
			{
				condition: ({value}) => Array.isArray(value),
				callback: ({key, value}) => {
					value.forEach(({logo}, idx) => {
						let imageUrl;

						if (logo === "") {
							imageUrl = `url("/images/sudo/default_image_1.png")`;
						} else {
							imageUrl = `url("/images/${key}/${logo}")`;
						}
						Dom.elm(`#${key}_logo_${idx}`).style.backgroundImage = imageUrl;
					});
				},
			},
			{
				condition: ({value}) => !Array.isArray(value),
				callback: ({key, value}) => {
					if (value.image === "") {
						Dom.elm(`#${key}_image`).style.backgroundImage = `url("/images/sudo/default_image_1.png")`;
						return;
					}
					Dom.elm(`#${key}_image`).style.backgroundImage = `url("/images/${key}/${value.image}")`;
				},
			},
		);
	}

	/**
	 * @Getter
	 * @return {HTMLElement} HTMLElement to pending template
	 */
	subRoot() {
		if (this.subRoot) {
			return this.subRoot;
		}
		return undefined;
	}


	/**
	 * @private
	 */
	_buildRenderingData() {
		const renderingData = {};

		this._sections.forEach(section => {
			renderingData[Object.keys(section)[0]] = Object.values(section)[0];
		});

		return renderingData;
	}

	/**
	 * @private
	 */
	_buildSectionInfo() {
		return this._sections
			.filter(({isNeedImage}) => isNeedImage)
			.map(data => ({
				key: Object.keys(data)[0],
				value: Object.values(data)[0],
			}));
	}
}

export default Component;
