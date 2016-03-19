import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

const app = document.getElementById('app');
window.mockSlideData = [{name: 'Slide 1', image: 'http://cdn.businessoffashion.com/uploads/feed/bof_5391d4caa507a_l_small.jpg'}, {name: 'Slide 2', image: 'http://cdn.businessoffashion.com/uploads/feed/bof_5391d4a75a07d_l_small.jpg'}, {name: 'Slide 3', image: 'http://cdn.businessoffashion.com/uploads/feed/bof_5391d45cb79e7_l_small.jpg'}];
ReactDOM.render(<Layout/>, app);
