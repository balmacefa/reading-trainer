import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                    <div className="container">
                        <Link className="navbar-brand" to='/'>Reatiner</Link>
                        <button
                            data-toggle="collapse"
                            className="navbar-toggler"
                            data-target="#navcol-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" to='/'>Features</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link">Tips</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
