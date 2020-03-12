import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-clean">
                <footer>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <h3>
                                    Checkout the code on:
                                </h3>
                                <a href='https://github.com/balmacefa/reading-trainer'>https://github.com/balmacefa/reading-trainer</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
