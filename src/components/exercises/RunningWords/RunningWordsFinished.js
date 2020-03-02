import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

export default class RunningWordsFinished extends Component {

    render() {
        return (
            <Fragment>
                <div
                    className="container text-center running-words-container r-w-container-respuestas">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="text-monospace text-center text-black-50">Speed</h1>
                            <h3 className="text-center text-black-50 mb-0">{this.props.wpm}</h3>
                            <h6 className="text-center text-black-50">wpm</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-7">
                            <h6 className="text-center text-black-50">Correct answers: {this.props.correctAnswers}</h6>
                            <h6 className="text-center text-black-50">Wrong answers: {this.props.wrongAnswers}</h6>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

RunningWordsFinished.propTypes = {
    wpm: PropTypes.number.isRequired,
    correctAnswers: PropTypes.number.isRequired,
    wrongAnswers: PropTypes.number.isRequired
};