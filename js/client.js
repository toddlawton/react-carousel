// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

// Components
import Layout from "./components/Layout";

// Pages
import Demos from "./pages/Demos";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Options from "./pages/Options";

let RouteHandler = Router.RouteHandler;
const app = document.getElementById('app');

window.mockSlideData = [{name: 'Slide 1', image: 'http://cdn.businessoffashion.com/uploads/feed/bof_5391d4caa507a_l_small.jpg'}, {name: 'Slide 2', image: 'http://cdn.businessoffashion.com/uploads/feed/bof_5391d4a75a07d_l_small.jpg'}, {name: 'Slide 3', image: 'http://cdn.businessoffashion.com/uploads/feed/bof_5391d45cb79e7_l_small.jpg'}];

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="demos" component={Demos}></Route>
            <Route path="options" component={Options}></Route>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>,
 app);
