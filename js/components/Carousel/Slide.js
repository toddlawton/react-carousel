// Dependencies
import React from "react";

export default class Slide extends React.Component {
    render() {
        let slideWidth = {
            width: this.props.slideWidth + 'px'
        };
        return (
            <div class="react-carousel__slide" style={slideWidth}>
                <figure>
                    <img class="react-carousel__slide-img" src={this.props.image} alt={this.props.name} />
                    {this.props.captionsEnabled == 'true' ? <figcaption>{this.props.name}</figcaption> : ''}
                </figure>
            </div>
        )
    }
}
