import * as React from 'react';
import Panel from '../component/Panel';

class Collapse extends React.Component <{}, {}> {

    render () {
        return (
            <div>
                <Panel title="标题1">
                    <p>内容1</p>
                    <p>内容1</p>
                    <p>内容1</p>
                </Panel>
                <Panel title="标题2"><p>内容2</p></Panel>
                <Panel title="标题3"><p>内容3</p></Panel>
            </div>
        );
    }
}

export default Collapse;