// Dependencies
import React from "react";

// Components
import ReactCarousel from "./Carousel/ReactCarousel";

export default class BodyContent extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <ReactCarousel slidesPerPage="1" slideData={window.mockSlideData} />
                </div>
            </div>
        );
    }
}