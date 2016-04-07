// Dependencies
import React from "react";

// Components
import Pagination from "./Pagination";
import Slides from "./Slides";
import classNames from 'classnames';

export default class SlideContainer extends React.Component {
    constructor() {
        super();
        this.state = { 
            currentPage: 0,
            slideOffset: 0
        };
    }

    advanceSlide(direction) {
        let currentPage = this.state.currentPage,
            pageCount = Math.ceil(this.props.slideData.length / this.props.slidesPerPage);

        if (direction === 'backward') {
            if (currentPage > 0) { 
                this.setState({ currentPage: currentPage-1 })
            } else {
                this.setState({ currentPage: pageCount-1 })
            }
        } else {
            if (currentPage < pageCount-1) {
                this.setState({ currentPage: currentPage+1 });
            } else {
                this.setState({ currentPage: 0 });
            }
        }
    }

    render() {
        let slideCount = this.props.slideData.length,
            pageCount = Math.ceil(this.props.slideData.length / this.props.slidesPerPage),
            currentPage = this.state.currentPage,
            slideWidth = this.props.containerWidth / this.props.slidesPerPage,
            slidePageWidth = slideWidth * this.props.slidesPerPage,
            slideWrapperWidth = slideWidth * slideCount,
            canAdvance = currentPage < pageCount -1 ? true : false,
            canRewind = currentPage > 0,
            prevArrowClasses = classNames('react-carousel__slide-arrow react-carousel__slide-arrow--prev', {'react-carousel__slide-arrow--active': canRewind}),
            nextArrowClasses = classNames('react-carousel__slide-arrow react-carousel__slide-arrow--next', {'react-carousel__slide-arrow--active': canAdvance});

        if (currentPage > pageCount-1) {
            currentPage = pageCount-1;
        }

        return (
            <div class="react-carousel__container">
                <div class="react-carousel__wrapper">
                    <Slides 
                        {...this.props}
                        slideOffset={this.state.slideOffset}
                        currentPage={currentPage}
                        slideWidth={slideWidth}
                        slidePageWidth={slidePageWidth}
                        slideWrapperWidth={slideWrapperWidth} 
                    />
                </div>
                <Pagination 
                    {...this.props} 
                    currentPage={currentPage} 
                />
                <div className={prevArrowClasses} onClick={() => this.advanceSlide('backward')}><i class="fa fa-chevron-left"></i></div>
                <div className={nextArrowClasses} onClick={() => this.advanceSlide('forward')}><i class="fa fa-chevron-right"></i></div>
            </div>
        );
    }
}
