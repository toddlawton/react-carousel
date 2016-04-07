// Dependencies
import React from "react";

// Components
import Carousel from "../components/Carousel/Carousel";

export default class Demos extends React.Component {
    constructor() {
        super();
        this.state = {
            slidesPerPage: 1,
            slideData: []
        }
        this.changeSlideCount = this.changeSlideCount.bind(this);
        this.addRandomSlide = this.addRandomSlide.bind(this);
    }

    componentDidMount() {
        this.addRandomSlide();
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateRandomSlide() {
        let rand = Math.floor(Math.random() * (window.imageDump.length));
        return {
            name: 'Slide'+rand,
            image: window.imageDump[rand]
        }
    }

    addRandomSlide() {
        let slideData = this.state.slideData;
        slideData.push(this.generateRandomSlide());
        this.setState({slideData: slideData})
    }
    
    changeSlideCount(event) {
        let value = event.target.value;
        
        if (value < 0 || value > this.state.slideData.length) return;
        
        this.setState({slidesPerPage: event.target.value});
    }

    render() {
        return (
            <div class="row">
                <div class="col-sm-12">
                    <h2>Demos</h2>
                </div>
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3>Variable slides per page</h3>
                            <Carousel 
                            slidesPerPage={this.state.slidesPerPage} 
                            slideData={this.state.slideData}
                            captionsEnabled="false"
                            allowLooping="true" />

                            <h3>Fixed: 2 slides per page</h3>
                            <Carousel 
                            slidesPerPage="2" 
                            slideData={this.state.slideData}
                            captionsEnabled="false"
                            allowLooping="true" />

                            <h3>Fixed: 3 slides per page</h3>
                            <Carousel 
                            slidesPerPage="3"
                            slideData={this.state.slideData}
                            captionsEnabled="false"
                            allowLooping="true" />
                        </div>
                    </div>
                </div>
                <div class="col-sm-5 col-sm-push-1">
                    <h3>Sample settings</h3>
                    <div class="well">
                        <div class="row">
                            <div class="col-sm-12">
                                <table class="table">
                                    <tr>
                                        <td>
                                            <label for="slidesPerPage">Slides per page:</label>
                                        </td>
                                        <td>
                                            <input name="slidesPerPage" type="number" min="1" max={this.state.slideData} value={this.state.slidesPerPage} onChange={this.changeSlideCount} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="slidesPerPage">Add random slide:</label>
                                        </td>
                                        <td>
                                            <button class="btn btn-primary" name="addRandomSlide" onClick={this.addRandomSlide}>Add</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}