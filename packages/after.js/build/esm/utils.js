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
import NotFoundComponent from './NotFoundComponent';
/** @private is the given object a Function? */
export var isFunction = function (obj) { return 'function' === typeof obj; };
/** @private is the given object an Object? */
export var isObject = function (obj) { return obj !== null && typeof obj === 'object'; };
/** @private is the given object/value a promise? */
export var isPromise = function (value) {
    return isObject(value) && isFunction(value.then);
};
/** @private we render on client? */
export var isDOM = function () {
    return typeof window === 'object' && typeof window.document === 'object';
};
/** @private we render on server? */
export var isServer = function () { return !isDOM(); };
/** @private Guard cluase to narrow the AsyncRouteableComponent union type on getInitialProps */
export function isAsyncComponent(Component) {
    return (Component.getInitialProps !== undefined);
}
/** @private Guard cluase to narrow the AsyncRouteableComponent union type on load */
export function isLoadableComponent(Component) {
    return Component.load !== undefined;
}
/** @private is given routes array have a 404 page?  */
export function is404ComponentAvailable(routes) {
    return (routes.find(function (route) { return ['**', '*', '', undefined].includes(route.path); }) ||
        false);
}
/** @private Returns 404Component from given routes if component was not avaliable returns default 404component */
export function get404Component(routes) {
    var match = is404ComponentAvailable(routes);
    return match ? match.component : NotFoundComponent;
}
/** @private Checks if 404Component is in routes, if it's not available add default 404 component */
export function getAllRoutes(routes) {
    return is404ComponentAvailable(routes)
        ? routes
        : __spread(routes, [{ component: NotFoundComponent }]);
}
/** @private Checks if given string ends with ".js" */
export function isJS(str) {
    return str.endsWith('.js');
}
/** @private Checks if given transition type is instant */
export function isInstantTransition(transition) {
    return transition === "instant";
}
//# sourceMappingURL=utils.js.map