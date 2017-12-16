import {ArrayUtils, DOM as Dom} from "../utils/index.js";
/**
 * Parent class for component
 */
class Component {
    private root;
    private sections;
    /**
     * @param {HTMLElement} root The root element for which the component will be rendered.
     * @param {Array} sections The data to rendering resume.
     */
    constructor(root, sections) {
        this.root = root;
        this.sections = sections;
    }

    /**
     * @param {HandlebarTemplate} template
     * @param {HTMLSelector} selector (optional)
     * @return undefined
     */
    public render(template, selector: string = "") {
        Dom.render(
            this.root,
            template({...ArrayUtils.makeObj(this.sections)}),
            selector,
        );

        this.renderImage();
    }

    /**
     * @param {Object[]} sections
     */
    private renderImage() {
        return ArrayUtils.applyTo(this.buildSectionInfo(),
            {
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
                condition: ({value}) => Array.isArray(value),
            },
            {
                callback: ({key, value}) => {
                    if (value.image === "") {
                    Dom.elm(`#${key}_image`).style.backgroundImage = `url("/images/sudo/default_image_1.png")`;
                    return;
                    }
                    Dom.elm(`#${key}_image`).style.backgroundImage = `url("/images/${key}/${value.image}")`;
                },
                condition: ({value}) => !Array.isArray(value),
            },
        );
    }

    /**
     * @private
     */
    private buildSectionInfo() {
        return this.sections
            .filter(({isNeedImage}) => isNeedImage)
            .map((data) => ({
                key: Object.keys(data)[0],
                value: data[Object.keys(data)[0]],
            }));
    }
}

export default Component;
