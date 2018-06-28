import * as React from 'react';
var PanelItem = function (props) {
    var title = props.title, children = props.children, show = props.show, toogle = props.toogle;
    return (React.createElement("div", { onClick: toogle },
        React.createElement("h1", null, title),
        show ? children : null));
};
export default PanelItem;
//# sourceMappingURL=PanelItem.js.map