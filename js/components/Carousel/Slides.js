// Dependencies
import React from "react";

// Components
import Slide from "./Slide";

export default class Slides extends React.Component {
    render() {
        let self = this,
            translatePageWidth = this.props.currentPage * this.props.slidePageWidth,
            cssTranslate = 'translate3d(-' + translatePageWidth + 'px, 0, 0)',
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
