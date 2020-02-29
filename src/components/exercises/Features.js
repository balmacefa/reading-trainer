import React, {Component} from 'react'

export default class Features extends Component {
    render() {
        return (
            <div>
                <div className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Features
                            </h2>
                            <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo
                                ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
                        </div>
                        <div className="row justify-content-center features">
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fa fa-bullseye icon"></i>
                                    <h3 className="name">Speed reading test</h3>
                                    <p className="description">Test your wpm or words per minutes.</p>
                                    <a className="learn-more" href="#">Start »</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fa fa-bolt icon"></i>
                                    <p className="description">The aim of this exercise is to see all the words on the
                                        screen, focusing on the center.</p>
                                    <a className="learn-more" href="#">Start »</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fa fa-stack-overflow icon"></i>
                                    <h3 className="name">Columns of words</h3>
                                    <p className="description">The exercise develops concentration, that allows you to
                                        absord a lot of information.</p>
                                    <a className="learn-more" href="#">Start »</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fa fa-align-justify icon"></i>
                                    <h3 className="name">Block of words</h3>
                                    <p className="description">Expand the line of sight and increase the amount of text captured by the eyes.</p>
                                    <a className="learn-more" href="#">Start »</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fa fa-newspaper-o icon"></i>
                                    <h3 className="name">Reading helper</h3>
                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula
                                        rhoncus lacus. Praesent aliquam in tellus eu.</p>
                                    <a className="learn-more" href="#">Start »</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fa fa-phone icon"></i>
                                    <h3 className="name">Mobile-first</h3>
                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula
                                        rhoncus lacus. Praesent aliquam in tellus eu.</p>
                                    <a className="learn-more" href="#">Learn more »</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
