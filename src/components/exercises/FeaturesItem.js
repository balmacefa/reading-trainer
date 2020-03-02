import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default class FeaturesItem extends Component {

    render() {
        return (
            <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                    <i className={`fa ${this.props.icon} icon`}></i>
                    <h3 className="name">{this.props.title}</h3>
                    <p className="description">{this.props.description}</p>
                    <Link className="learn-more" to={this.props.link}>Start »</Link>
                </div>
            </div>
        )
    }
}

FeaturesItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
