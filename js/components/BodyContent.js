// Dependencies
import React from "react";

// Components
import ReactCarousel from "./Carousel/Carousel";

export default class BodyContent extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <Carousel slidesPerPage="1" slideData={window.mockSlideData} />
                </div>
            </div>
        );
    }
}