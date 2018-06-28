var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Panel from '../component/Panel';
var Collapse = /** @class */ (function (_super) {
    __extends(Collapse, _super);
    function Collapse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collapse.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Panel, { title: "\u6807\u98981" },
                React.createElement("p", null, "\u5185\u5BB91"),
                React.createElement("p", null, "\u5185\u5BB91"),
                React.createElement("p", null, "\u5185\u5BB91")),
            React.createElement(Panel, { title: "\u6807\u98982" },
                React.createElement("p", null, "\u5185\u5BB92")),
            React.createElement(Panel, { title: "\u6807\u98983" },
                React.createElement("p", null, "\u5185\u5BB93"))));
    };
    return Collapse;
}(React.Component));
export default Collapse;
//# sourceMappingURL=collapse.js.map