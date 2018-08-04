import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import NestedContent from "../nested-content/NestedContent";

class NestedRouted extends Component {
    state = {}
    render() {
        return (
            <ul className="list-group mt-5  col-lg-4">
                <NavLink className="list-group-item" activeClassName="active" to="/nestedroutes/first">Active item</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/nestedroutes/second">Second item</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/nestedroutes/third">Third item</NavLink>
                {/* <Route path="/nestedroutes/:contentName" component={NestedContent} /> */}
            </ul>
        );
    }
}

export default NestedRouted;