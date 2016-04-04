import React from "react";
import ReactCarouselSlide from "./Slide";

export default class ReactCarouselSlides extends React.Component {
    render() {
        let self = this,
            cssTranslate = 'translate3d(-' + this.props.currentSlide * this.props.slideWidth + 'px, 0, 0)',
            css = {
                transform: cssTranslate,
                width: this.props.slideWrapperWidth
            },
            slideData = this.props.slideData.map(function(slide, index) {
            return (
                <ReactCarouselSlide 
                    {...self.props}
                    key={index} 
                    name={slide.name} 
                    image={slide.image} 
                />
            );
        });
        
        return (
            <div class="react-carousel-slide-container" 
                style={css}>{slideData}
            </div>
        );
    }
}