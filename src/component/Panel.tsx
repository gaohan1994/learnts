import * as React from 'react';
import Toggleable from './toggleable';

type Props = {
    title: string;
}

const Panel: React.SFC<Props> = ({title, children}) => (
    <Toggleable
        render={({show, toogle}) => (
            <div>
                <h1 onClick={toogle}>{title}</h1>
                {show ? children : null}
            </div>
        )}
    />
);

export default Panel;