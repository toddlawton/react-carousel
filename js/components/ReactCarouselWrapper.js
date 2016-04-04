import React from "react";
import ReactCarousel from "../components/ReactCarousel";

export default class ReactCarouselWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            containerWidth: 0
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
            
                <ReactCarousel {...this.props} containerWidth={this.state.containerWidth} />
            </div>
        )
    }
}
