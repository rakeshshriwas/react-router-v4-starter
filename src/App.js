import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componentes/layout/Header";
import HomePage from './componentes/home/HomePage';
import AboutPage from './componentes/about/AboutPage';
import ContactPage from './componentes/contact/ContactPage';
import NestedRouted from './componentes/nested-route/NestedRouted';
// import NestedContent from "./componentes/nested-content/NestedContent";
import PromptComponent from "./componentes/prompt/PromptComponent";
import QueryString from "./componentes/query-string/QueryString";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />

            <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/about" component={AboutPage}></Route>
              <Route path="/contact" component={ContactPage}></Route>
              <Route path="/prompt" component={PromptComponent}></Route>
              <Route path="/stores" component={ () => <h4>Store Components</h4>}></Route>
              <Route path="/nestedroutes" component={NestedRouted}></Route>
              {/* <Route path="/nestedroutes/:contentName" component={NestedContent} /> */}
              <Route path="/result" component={QueryString}></Route>
              <Route render={ () => <h1>Page Not Found</h1>}/>
            </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
