import React from "react";
import Footer from "./Footer";
import BodyContent from "./BodyContent";
import Header from "./Header";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
          title: "React.js Carousel",
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <BodyContent />
                <Footer />
            </div>
        );
    }
}
