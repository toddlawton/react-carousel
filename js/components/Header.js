// Dependencies
import React from "react";
import { Link } from "react-router";

// Components
import Title from "./Header/Title";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="page-header">
                    <Title title={this.props.title} />
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <nav class="navbar navbar-default">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <ul class="nav navbar-nav">
                                        <li><Link to="/">home</Link></li>
                                        <li><Link to="demos">demos</Link></li>
                                        <li><Link to="options">options</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
