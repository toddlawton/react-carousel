// Dependencies
import React from "react";

// Components
import classNames from 'classnames';

export default class PaginationDot extends React.Component {
    render() {
        let classes = classNames('react-carousel__pagination-dot', 
                                {'react-carousel__pagination-dot--active': this.props.active});
        return (
            <div className={classes}></div>
        );
    }
}
