import React from "react";
import ReactCarouselWrapper from "../components/ReactCarouselWrapper";
import { storiesOf, action } from '@kadira/storybook';

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

storiesOf('Carousel', module)
  .add('with a text', () => (
    <button onClick={action('clicked')}>My First Button</button>
  ))
  .add('with no text', () => (
    <button></button>
  ));