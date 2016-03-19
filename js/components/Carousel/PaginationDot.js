import React from "react";

export default class ReactCarouselPaginationDot extends React.Component {
    constructor() {
        super();
        this.css = {};
    }

    setActiveStyle() {
        if (this.props.currentSlide !== this.props.position) {
            this.css = {
                background: '#999'
            };
        } else {
            this.css = {
                background: '#333'
            };
        }
    }

    render() {
        this.setActiveStyle();
        return (
            <div class="pagination-dot" style={this.css}></div>
        );
    }
}