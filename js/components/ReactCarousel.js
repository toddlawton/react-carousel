import React from "react";
import ReactDOM from "react-dom";
import Dimensions from "react-dimensions";
import ReactCarouselPagination from "./Carousel/Pagination";
import ReactCarouselSlides from "./Carousel/Slides";

class ReactCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
            currentSlide: 0
        };

        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
    }

    componentWillMount() {
        this.parseSlides();          
    }

    parseSlides() {
        var containerWidth = this.props.containerWidth,
            slides = this.props.slideData,
            slidesPerPage = this.props.slidesPerPage;

        this.slideCount = slides.length;
        this.slideWidth = containerWidth / slidesPerPage;
        this.slideWrapperWidth = this.slideWidth * this.slideCount;
    }

    goToNextSlide() {
        var currentSlide = this.state.currentSlide;
        if (currentSlide < this.slideCount-1) {
            currentSlide += 1;
            this.setState({
                currentSlide: currentSlide
            });
        } else {
            this.setState({
                currentSlide: 0
            });
        }
    }

    goToPrevSlide() {
        var currentSlide = this.state.currentSlide;
        if (currentSlide > 0) { 
            currentSlide -= 1;
            this.setState({
                currentSlide: currentSlide
            })
        } else {
            this.setState({
                currentSlide: this.slideCount-1
            })
        }
    }

    render() {
        return (
            <div class="react-carousel">
                <div class="react-carousel-wrapper" 
                     containerWidth={this.props.containerWidth}
                     containerHeight={this.props.containerHeight}>
                     <ReactCarouselSlides 
                         slidesPerPage={this.props.slidesPerPage} 
                         slideData={this.props.slideData} 
                         slideWidth={this.slideWidth} 
                         slideWrapperWidth={this.slideWrapperWidth}
                         currentSlide={this.state.currentSlide} />
                </div>
                <ReactCarouselPagination 
                    slideData={this.props.slideData} 
                    currentSlide={this.state.currentSlide} />
                    <div class="slide-arrow prev-slide" onClick={this.goToPrevSlide}><i class="fa fa-chevron-left"></i></div>
                    <div class="slide-arrow next-slide" onClick={this.goToNextSlide}><i class="fa fa-chevron-right"></i></div>
            </div>
        );
    }
}

export default Dimensions()(ReactCarousel)