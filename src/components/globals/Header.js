import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                    <div className="container">
                        <a className="navbar-brand">Company Name</a>
                        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active">First Item</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link">Second Item</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link">Third Item</a>
                                </li>
                                <li className="dropdown nav-item">
                                    <a
                                        className="dropdown-toggle nav-link"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                    >Dropdown
                                    </a>
                                    <div className="dropdown-menu" role="menu">
                                        <a className="dropdown-item" role="presentation">First Item</a>
                                        <a className="dropdown-item" role="presentation">Second Item</a>
                                        <a className="dropdown-item" role="presentation">Third Item</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
