import * as React from 'react';
import { withDefaultProps } from '../class/util';

const defaultProps = {
    color: 'blue'
};

type DefaultProps = typeof defaultProps;

type Props = { onClick : (e: React.MouseEvent<HTMLElement>) => void; } & DefaultProps

const Button: React.SFC<Props> = ({ onClick: handleClick, color, children}) => (
    <button 
        style={{color}}
        onClick={handleClick}
    >
        {children}
    </button>
);

export default withDefaultProps(defaultProps, Button);