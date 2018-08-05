import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import NestedContent from "../nested-content/NestedContent";

class NestedRouted extends Component {
    state = {}
    render() {
        const { match } = this.props;
        return (
            <ul className="list-group mt-5  col-lg-4">
                <NavLink className="list-group-item" activeClassName="active" to={`${match.url}/first`}>Active item</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to={`${match.url}/second`}>Second item</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to={`${match.url}/third`}>Third item</NavLink>
                <Route path="/nestedroutes/:contentName" component={NestedContent} />
            </ul>
        );
    }
}

export default NestedRouted;