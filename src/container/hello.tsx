import * as React from 'react';

interface IProps {
    value?: string;
}

interface IState {
    number?: number;
}

type State = Readonly <IState>;

class Hello extends React.Component <IProps, State> {

    constructor (props: IProps) {
        super(props);
        this.state = {
            number: 0
        };
    }

    public render (): React.ReactNode {
        return (
            <div>
                123
            </div>
        );
    }
}

export default Hello;