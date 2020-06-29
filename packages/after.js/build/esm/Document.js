var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import serialize from 'serialize-javascript';
import { isJS } from './utils';
export var __AfterContext = React.createContext({});
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Document.prototype.render = function () {
        var helmet = this.props.helmet;
        // get attributes from React Helmet
        var htmlAttrs = helmet.htmlAttributes.toComponent();
        var bodyAttrs = helmet.bodyAttributes.toComponent();
        return (React.createElement("html", __assign({}, htmlAttrs),
            React.createElement("head", null,
                React.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("title", null, "Welcome to the Afterparty"),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
                helmet.title.toComponent(),
                helmet.meta.toComponent(),
                helmet.link.toComponent(),
                React.createElement(AfterStyles, null)),
            React.createElement("body", __assign({}, bodyAttrs),
                React.createElement(AfterRoot, null),
                React.createElement(AfterData, null),
                React.createElement(AfterScripts, null))));
    };
    Document.getInitialProps = function (_a) {
        var renderPage = _a.renderPage;
        return __awaiter(void 0, void 0, void 0, function () {
            var page;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, renderPage()];
                    case 1:
                        page = _b.sent();
                        return [2 /*return*/, __assign({}, page)];
                }
            });
        });
    };
    return Document;
}(React.Component));
export { Document };
export var useAfterContext = function () {
    return React.useContext(__AfterContext);
};
export var AfterRoot = function () {
    var html = useAfterContext().html;
    return React.createElement("div", { id: "root", dangerouslySetInnerHTML: { __html: html } });
};
export var AfterData = function (_a) {
    var data = _a.data;
    var contextData = useAfterContext().data;
    return (React.createElement("script", { defer: true, dangerouslySetInnerHTML: {
            __html: "window.__SERVER_APP_STATE__ =  " + serialize(__assign({}, (data || contextData))),
        } }));
};
export var AfterStyles = function () {
    var _a = useAfterContext(), assets = _a.assets, styles = _a.styles;
    return (React.createElement(React.Fragment, null,
        assets.client.css && React.createElement("link", { rel: "stylesheet", href: assets.client.css }),
        styles.map(function (path) { return (React.createElement("link", { key: path, rel: "stylesheet", href: path })); })));
};
export var AfterScripts = function () {
    var _a = useAfterContext(), scripts = _a.scripts, assets = _a.assets;
    return (React.createElement(React.Fragment, null,
        scripts.filter(isJS).map(function (path) { return (React.createElement("script", { key: path, defer: true, type: "text/javascript", src: path, crossOrigin: "anonymous" })); }),
        assets.client.js && (React.createElement("script", { type: "text/javascript", src: assets.client.js, defer: true, crossOrigin: "anonymous" }))));
};
//# sourceMappingURL=Document.js.map