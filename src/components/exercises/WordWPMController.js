import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

export default class WordWPMController extends Component {

    render() {
        return (
            <Fragment>

                <div
                    className="container text-center running-words-container r-w-container-respuestas"
                    id="controllers">
                    <div className="row justify-content-center mb-2">
                        <div className="col-12">
                            <div className="p-7">
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-secondary"
                                        aria-valuenow="80"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{
                                        width: this.props.progressBar + '%'
                                    }}>
                                        <span className="sr-only">{this.props.progressBar}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-1">
                        <div className="col-2 align-self-center p-7">
                            <button
                                id="btn-words-down"
                                onClick={() => this.props.userChangeWords(false)}
                                className="btn btn-secondary"
                                type="button">&lt;&lt;</button>
                        </div>
                        <div className="col-3 align-self-end">
                            <div>
                                <h6 className="text-center text-black-50 mb-0">{this.props.amountOfWords}</h6>
                                <h6 className="text-center text-black-50">Words</h6>
                            </div>
                        </div>
                        <div className="col-2 align-self-center p-7">
                            <button
                                id="btn-words-up"
                                onClick={() => this.props.userChangeWords(true)}
                                className="btn btn-secondary"
                                type="button">&gt;&gt;</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-2 align-self-center p-7">
                            <button
                                id="btn-wpm-down"
                                onClick={() => this.props.userChangeWPM(false)}
                                className="btn btn-secondary"
                                type="button">&lt;&lt;</button>
                        </div>
                        <div className="col-3 align-self-end">
                            <div>
                                <h6 className="text-center text-black-50 mb-0">{this.props.wpm}</h6>
                                <h6 className="text-center text-black-50">wpm</h6>
                            </div>
                        </div>
                        <div className="col-2 align-self-center p-7">
                            <button
                                id="btn-wpm-up"
                                onClick={() => this.props.userChangeWPM(true)}
                                className="btn btn-secondary"
                                type="button">&gt;&gt;</button>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

WordWPMController.propTypes = {
    wpm: PropTypes.number.isRequired,
    progressBar: PropTypes.number.isRequired,
    amountOfWords: PropTypes.number.isRequired,
    userChangeWords: PropTypes.func.isRequired,
    userChangeWPM: PropTypes.func.isRequired
};
