// Dependencies
import React from "react";

// Components
import PaginationDot from "./PaginationDot";

export default class Pagination extends React.Component {
    render() {
        let self = this,
            numberOfSlides = this.props.slideData.length,
            numberOfDots = numberOfSlides / this.props.slidesPerPage,
            slideData = [];

        for (let index = 0; index < numberOfDots; index++) {
            let active = false;
            
            if (self.props.currentPage === index) {
                active = true;
            }
            slideData.push(
                <PaginationDot 
                    {...self.props}
                    key={index} 
                    position={index}
                    active={active}
                    currentPage={self.props.currentPage} />
            );
        }

        return (
            <div class="react-carousel__pagination">
                <div class="react-carousel__pagination-dots">
                    {slideData}                    
                </div>
            </div>
        );
    }
}
