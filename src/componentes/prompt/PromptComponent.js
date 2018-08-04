import React, {Component} from 'react';
import { Prompt } from 'react-router-dom';

class PromptComponent extends Component {
    state = { 
        isChanged: false
     }
    render() { 
        return ( 
            <div>
                <h3>Prompt Component</h3>
                <Prompt when={this.state.isChanged} message="want to change option then click on ok other wise click on cancel"/>
                <input type="text" onChange={ () => { this.setState({ isChanged: true }) } } placeholder="Enter Some text" />
            </div>
         );
    }
}
 
export default PromptComponent;