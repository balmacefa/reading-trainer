import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-clean">
                <footer>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li>
                                        <a>Web design</a>
                                    </li>
                                    <li>
                                        <a>Development</a>
                                    </li>
                                    <li>
                                        <a>Hosting</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li>
                                        <a>Company</a>
                                    </li>
                                    <li>
                                        <a>Team</a>
                                    </li>
                                    <li>
                                        <a>Legacy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Careers</h3>
                                <ul>
                                    <li>
                                        <a>Job openings</a>
                                    </li>
                                    <li>
                                        <a>Employee success</a>
                                    </li>
                                    <li>
                                        <a>Benefits</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 item social">
                                <a>
                                    <i className="icon ion-social-facebook"></i>
                                </a>
                                <a>
                                    <i className="icon ion-social-twitter"></i>
                                </a>
                                <a>
                                    <i className="icon ion-social-snapchat"></i>
                                </a>
                                <a>
                                    <i className="icon ion-social-instagram"></i>
                                </a>
                                <p className="copyright">Company Name © 2017</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
