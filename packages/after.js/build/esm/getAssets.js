import { isLoadableComponent } from './utils';
// @ts-ignore
import logger from 'razzle-dev-utils/logger';
export var errorMeesage = "all async routes must have a chunkName property with value of /* webpackChunkName: \"MyChunkName\" */ check your routes config or use babel-plugin-after";
export function getAssets(_a) {
    var route = _a.route, chunks = _a.chunks;
    var scripts = [];
    var styles = [];
    // if route.component is not an asyncComponent
    // it's assets (JS and CSS files) will go into the
    // main bundle.js and bundle.css ...
    if (!route || !isLoadableComponent(route.component)) {
        return { scripts: scripts, styles: styles };
    }
    var chunkName = route.component.getChunkName();
    // if component was LoadableComponent and chunkName was undefined
    // print an error message to console so Developer can fix it
    // todo add link to documentation or show more useful error message
    if (chunkName === undefined) {
        logger.error(errorMeesage);
        throw new Error();
    }
    // we look for component assets from chunks.json
    if (chunks[chunkName] && chunks[chunkName].js) {
        scripts = chunks[chunkName].js;
    }
    if (chunks[chunkName] && chunks[chunkName].css) {
        styles = chunks[chunkName].css;
    }
    return { scripts: scripts, styles: styles };
}
//# sourceMappingURL=getAssets.js.map