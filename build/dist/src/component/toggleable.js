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
import { isFunction } from '../class/util';
var Toogleable = /** @class */ (function (_super) {
    __extends(Toogleable, _super);
    function Toogleable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            show: false
        };
        _this.toogle = function (e) {
            _this.setState(function (prevState) { return ({
                show: !prevState.show
            }); });
        };
        return _this;
    }
    Toogleable.prototype.render = function () {
        var _a = this.props, children = _a.children, render = _a.render;
        var show = this.state.show;
        var renderArgs = { show: show, toogle: this.toogle };
        if (render) {
            return render(renderArgs);
        }
        else if (isFunction(children)) {
            return children(renderArgs);
        }
        else {
            return null;
        }
    };
    return Toogleable;
}(React.Component));
export default Toogleable;
//# sourceMappingURL=toggleable.js.map