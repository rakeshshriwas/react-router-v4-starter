import React, { Component } from 'react';

class NestedContent extends Component {
    state = {  }
    render(props) { 
        return ( 
            <p>{this.props.match.params.contentName}</p>
         );
    }
}
 
export default NestedContent;