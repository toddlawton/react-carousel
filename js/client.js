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

window.imageDump = ['https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?crop=entropy&dpr=2&fit=crop&fm=jpg&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200', 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200', 'https://images.unsplash.com/photo-1449960238630-7e720e630019?crop=entropy&dpr=2&fit=crop&fm=jpg&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200', 'https://images.unsplash.com/photo-1458324124043-7803d4fec380?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200', 'https://images.unsplash.com/photo-1458640904116-093b74971de9?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200', 'https://images.unsplash.com/photo-1458640904116-093b74971de9?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200', 'https://images.unsplash.com/photo-1440557653082-e8e186733eeb?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200', 'https://images.unsplash.com/photo-1437652010333-fbf2cd02a4f8?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200', 'https://images.unsplash.com/photo-1434871619871-1f315a50efba?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200'];

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
