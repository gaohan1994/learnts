import * as React from 'react';
import { InterfaceToogleableRenderArgs } from './toggleable';

type PanelItemProps = {
    title: string;
}

const PanelItem: React.SFC <PanelItemProps & InterfaceToogleableRenderArgs> = (props) => {
    const { title, children, show, toogle } = props;
    return (
        <div onClick={toogle}>
            <h1>{title}</h1>
            {show ? children : null}
        </div>
    );
};

export default PanelItem;