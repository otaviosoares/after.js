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
import React from 'react';
import { Route } from 'react-router-dom';
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFound.prototype.render = function () {
        return (React.createElement(Route, { render: function (_a) {
                var staticContext = _a.staticContext;
                if (staticContext)
                    staticContext.statusCode = 404;
                return NotFound.data;
            } }));
    };
    // just for test purpose
    NotFound.data = "The Page You Were Looking For Was Not Found";
    return NotFound;
}(React.Component));
export default NotFound;
//# sourceMappingURL=NotFoundComponent.js.map