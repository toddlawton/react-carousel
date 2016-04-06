// Dependencies
import React from "react";

// Components
import Slide from "./Slide";

export default class Slides extends React.Component {
    render() {
        let self = this,
            cssTranslate = 'translate3d(-' + this.props.currentSlide * this.props.slideWidth + 'px, 0, 0)',
            mutableStyles = {
                transform: cssTranslate,
                width: this.props.slideWrapperWidth
            },
            slideData = this.props.slideData.map(function(slide, index) {
            return (
                <Slide 
                    {...self.props}
                    key={index} 
                    name={slide.name} 
                    image={slide.image} 
                />
            );
        });
        
        return (
            <div class="react-carousel__slides" 
                style={mutableStyles}>{slideData}
            </div>
        );
    }
}
