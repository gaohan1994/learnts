import * as React from 'react';
import Toggleable from './toggleable';
var Panel = function (_a) {
    var title = _a.title, children = _a.children;
    return (React.createElement(Toggleable, { render: function (_a) {
            var show = _a.show, toogle = _a.toogle;
            return (React.createElement("div", null,
                React.createElement("h1", { onClick: toogle }, title),
                show ? children : null));
        } }));
};
export default Panel;
//# sourceMappingURL=Panel.js.map