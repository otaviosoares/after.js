"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NotFoundComponent_1 = __importDefault(require("./NotFoundComponent"));
/** @private is the given object a Function? */
exports.isFunction = function (obj) { return 'function' === typeof obj; };
/** @private is the given object an Object? */
exports.isObject = function (obj) { return obj !== null && typeof obj === 'object'; };
/** @private is the given object/value a promise? */
exports.isPromise = function (value) {
    return exports.isObject(value) && exports.isFunction(value.then);
};
/** @private we render on client? */
exports.isDOM = function () {
    return typeof window === 'object' && typeof window.document === 'object';
};
/** @private we render on server? */
exports.isServer = function () { return !exports.isDOM(); };
/** @private Guard cluase to narrow the AsyncRouteableComponent union type on getInitialProps */
function isAsyncComponent(Component) {
    return (Component.getInitialProps !== undefined);
}
exports.isAsyncComponent = isAsyncComponent;
/** @private Guard cluase to narrow the AsyncRouteableComponent union type on load */
function isLoadableComponent(Component) {
    return Component.load !== undefined;
}
exports.isLoadableComponent = isLoadableComponent;
/** @private is given routes array have a 404 page?  */
function is404ComponentAvailable(routes) {
    return (routes.find(function (route) { return ['**', '*', '', undefined].includes(route.path); }) ||
        false);
}
exports.is404ComponentAvailable = is404ComponentAvailable;
/** @private Returns 404Component from given routes if component was not avaliable returns default 404component */
function get404Component(routes) {
    var match = is404ComponentAvailable(routes);
    return match ? match.component : NotFoundComponent_1.default;
}
exports.get404Component = get404Component;
/** @private Checks if 404Component is in routes, if it's not available add default 404 component */
function getAllRoutes(routes) {
    return is404ComponentAvailable(routes)
        ? routes
        : __spread(routes, [{ component: NotFoundComponent_1.default }]);
}
exports.getAllRoutes = getAllRoutes;
/** @private Checks if given string ends with ".js" */
function isJS(str) {
    return str.endsWith('.js');
}
exports.isJS = isJS;
//# sourceMappingURL=utils.js.map