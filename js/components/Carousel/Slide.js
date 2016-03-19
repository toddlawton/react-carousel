import React from "react";

export default class ReactCarouselSlide extends React.Component {
    render() {
        return (
            <div class="react-carousel-slide" style={{ width: this.props.slideWidth }}><img src={this.props.image} alt={this.props.name} /></div>
        )
    }
}