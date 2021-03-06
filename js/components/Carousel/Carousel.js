// Dependencies
import React from "react";

// Components
import SlideContainer from "./SlideContainer";

export default class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            containerWidth: 0,
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
        this.updateCarouselWidth();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize() {
        this.updateCarouselWidth();
    }

    updateCarouselWidth() {
        this.setState({ containerWidth: this.refs.element.offsetWidth })
    }

    render() {
        return (
            <div ref="element">
                <SlideContainer {...this.props} containerWidth={this.state.containerWidth} />
            </div>
        )
    }
}
