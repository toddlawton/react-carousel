// Dependencies
import Radium from "radium";
import React from "react";
import Footer from "./Footer";

// Sections
import BodyContent from "./BodyContent";
import Header from "./Header";

@Radium
class Layout extends React.Component {
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
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Radium(Layout)
