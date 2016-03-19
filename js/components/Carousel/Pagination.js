import React from "react";
import ReactCarouselPaginationDot from "./PaginationDot";

export default class ReactCarouselPagination extends React.Component {
    render() {
        var self = this,
            slideData = this.props.slideData.map(function(slide, index) {
                return (
                    <ReactCarouselPaginationDot 
                        key={index} 
                        position={index}
                        currentSlide={self.props.currentSlide} 
                    />
                );
            });
        return (
            <div class="pagination">
                <div class="pagination-dots">
                    {slideData}
                </div>
            </div>
        );
    }
}