import React from "react";
import ReactCarouselPagination from "./Carousel/Pagination";
import ReactCarouselSlides from "./Carousel/Slides";

export default class ReactCarousel extends React.Component {
    constructor() {
        super();
        this.state = { 
            currentSlide: 0,
            slideOffset: 0
        };
    }

    componentWillMount() {
        this.setState({ slideCount: this.props.slideData.length })
    }

    advanceSlide(direction) {
        let currentSlide = this.state.currentSlide;

        if (direction === 'backward') {
            if (currentSlide > 0) { 
                currentSlide -= 1;
                this.setState({ currentSlide: currentSlide })
            } else {
                this.setState({ currentSlide: this.state.slideCount-1 })
            }
        } else {
            if (currentSlide < this.state.slideCount-1) {
                currentSlide += 1;
                this.setState({ currentSlide: currentSlide });
            } else {
                this.setState({ currentSlide: 0 });
            }
        }
    }

    render() {
        let currentSlide = this.state.currentSlide,
            slideWidth = this.props.containerWidth / this.props.slidesPerPage,
            slideWrapperWidth = slideWidth * this.state.slideCount;

        return (
            <div class="react-carousel">
                <div class="react-carousel-wrapper">
                    <ReactCarouselSlides 
                        {...this.props}
                        slideOffset={this.state.slideOffset}
                        currentSlide={currentSlide}
                        slideWidth={slideWidth} 
                        slideWrapperWidth={slideWrapperWidth} />
                </div>
                <ReactCarouselPagination 
                    {...this.props} 
                    currentSlide={currentSlide} />
                <div class="slide-arrow prev-slide" onClick={() => this.advanceSlide('backward')}><i class="fa fa-chevron-left"></i></div>
                <div class="slide-arrow next-slide" onClick={() => this.advanceSlide('forward')}><i class="fa fa-chevron-right"></i></div>
            </div>
        );
    }
}
