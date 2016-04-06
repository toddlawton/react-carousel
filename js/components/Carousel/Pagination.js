// Dependencies
import React from "react";

// Components
import ReactCarouselPaginationDot from "./PaginationDot";

export default class ReactCarouselPagination extends React.Component {
    
    render() {
        let self = this,
        slideData = this.props.slideData.map(function(slide, index) {
            let active = false;
            
            if (self.props.currentSlide === index) {
                active = true;
            }

            return (
                <ReactCarouselPaginationDot 
                    {...self.props}
                    key={index} 
                    position={index}
                    active={active}
                    currentSlide={self.props.currentSlide} 
                />
            );
        });

        return (
            <div class="react-carousel__pagination">
                <div class="react-carousel__pagination-dots">
                    {slideData}
                </div>
            </div>
        );
    }
}
