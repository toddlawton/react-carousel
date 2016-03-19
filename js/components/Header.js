import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
    render() {
        return (
            <div class="page-header">
                <Title title={this.props.title} />
            </div>
        );
    }
}
