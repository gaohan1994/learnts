import * as React from 'react';
import { isFunction } from '../class/util';

interface InterfaceProps {
    children: RenderCallback;
    render  : RenderCallback;
}

type Props = Partial<InterfaceProps>;

type RenderCallback = (args: InterfaceToogleableRenderArgs) => React.ReactNode;

export interface InterfaceToogleableRenderArgs {
    show    : boolean;
    toogle  : Toogleable['toogle'];
}

interface InterfaceState {
    show: boolean;
}

type State = Readonly <InterfaceState>;
  
class Toogleable extends React.Component <Props, State> {

    public readonly state: State = {
        show: false
    };

    public render () {

        const { children, render } = this.props;

        const { show } = this.state;

        const renderArgs = { show, toogle: this.toogle };

        if (render) {
            return render(renderArgs);
        } else if (isFunction(children)) {
            return children(renderArgs);
        } else {
            return null;
        }
    }

    private toogle = (e: React.MouseEvent<HTMLElement>) => {
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }
}

export default Toogleable;