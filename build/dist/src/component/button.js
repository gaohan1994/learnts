import * as React from 'react';
import { withDefaultProps } from '../class/util';
var defaultProps = {
    color: 'blue'
};
var Button = function (_a) {
    var handleClick = _a.onClick, color = _a.color, children = _a.children;
    return (React.createElement("button", { style: { color: color }, onClick: handleClick }, children));
};
export default withDefaultProps(defaultProps, Button);
//# sourceMappingURL=button.js.map