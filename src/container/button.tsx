import * as React from 'react';
import Button from '../component/button';

interface InterfaceState {
    clicksCount: number;   
}

type State = Readonly <InterfaceState>;


const incrementClicksCount = (prevState: State): State => ({
    clicksCount: prevState.clicksCount + 1
});

const decrementClicksCount = (prevState: State): State => ({
    clicksCount: prevState.clicksCount - 1
});

class ButtonContainer extends React.Component <{}, State> {

    public readonly state: State = { 
        clicksCount: 0 
    };

    constructor (props: {}) {
        super(props);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    public render (): React.ReactNode {

        const { clicksCount } = this.state;

        return (
            <div>
                <Button onClick={this.handleIncrement}>Increment</Button>
                <Button onClick={this.handleDecrement}>Decrement</Button>

                You've clicked me { clicksCount } times!
            </div>
        );
    }

    private handleIncrement = (): void => {
        this.setState(incrementClicksCount)
    };

    private handleDecrement = (): void => {
        this.setState(decrementClicksCount)
    };
}

export default ButtonContainer;