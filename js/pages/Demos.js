// Dependencies
import React from "react";

// Components
import ReactCarouselWrapper from "../components/Carousel/ReactCarouselWrapper";

export default class Demos extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-12">
                    <h2>Demos</h2>
                </div>
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <ReactCarouselWrapper 
                    slidesPerPage="1" 
                    slideData={window.mockSlideData} />
                </div>
            </div>
        );
    }
}