import * as themesTemplate from "../themes/index.ts";
import {ArrayUtils, DOM as Dom} from "../utils/index.js";

/**
 * @class
 * @description Render resume by selected theme.
 */
class MainContainer {
    private themesInfo: string[];
    private baseElementSelector: string;

    constructor(data: object, themesInfo: string[]) {
        this.themesInfo = themesInfo;
        this.baseElementSelector = "#root";
        this.generateResume(data);
    }

    /**
     * @private
     * @param {String} theme
     * @param {Object} data
     * @description Create real render component. end point!!
     */
    private generateResume(data: any): void {
        const {theme} = data;
        const themes = ArrayUtils.makeObj(this.themesInfo, themesTemplate);

        (() => new themes[theme](Dom.elm(this.baseElementSelector), data))();
    }
}

export default MainContainer;
