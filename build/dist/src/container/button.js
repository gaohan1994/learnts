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
import Button from '../component/button';
var incrementClicksCount = function (prevState) { return ({
    clicksCount: prevState.clicksCount + 1
}); };
var decrementClicksCount = function (prevState) { return ({
    clicksCount: prevState.clicksCount - 1
}); };
var ButtonContainer = /** @class */ (function (_super) {
    __extends(ButtonContainer, _super);
    function ButtonContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            clicksCount: 0
        };
        _this.handleIncrement = function () {
            _this.setState(incrementClicksCount);
        };
        _this.handleDecrement = function () {
            _this.setState(decrementClicksCount);
        };
        _this.handleDecrement = _this.handleDecrement.bind(_this);
        _this.handleIncrement = _this.handleIncrement.bind(_this);
        return _this;
    }
    ButtonContainer.prototype.render = function () {
        var clicksCount = this.state.clicksCount;
        return (React.createElement("div", null,
            React.createElement(Button, { onClick: this.handleIncrement }, "Increment"),
            React.createElement(Button, { onClick: this.handleDecrement }, "Decrement"),
            "You've clicked me ",
            clicksCount,
            " times!"));
    };
    return ButtonContainer;
}(React.Component));
export default ButtonContainer;
//# sourceMappingURL=button.js.map