import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

export default class ReadingHelperController extends Component {

    render() {
        return (
            <Fragment>

                <div
                    className="container text-center running-words-container r-w-container-respuestas"
                    id="controllers">
                    <div className="row justify-content-center d-flex">
                        <div className="d-flex">
                            <div className="d-flex p-7">
                                <button
                                    id="btn-wpm-down"
                                    onClick={() => this.props.userChangeWPM(false)}
                                    className="btn btn-secondary"
                                    type="button">&lt;&lt;</button>
                            </div>
                            <div className="d-flex align-self-end">
                                <div>
                                    <h6 className="text-center text-black-50 mb-0">{this.props.wpm}</h6>
                                    <h6 className="text-center text-black-50">wpm</h6>
                                </div>
                            </div>
                            <div className="d-flex p-7">
                                <button
                                    id="btn-wpm-up"
                                    onClick={() => this.props.userChangeWPM(true)}
                                    className="btn btn-secondary"
                                    type="button">&gt;&gt;</button>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex align-self-center mr-2 ml-2 min-full-width">
                                    <h6 className="text-center text-black-50">Remove words:</h6>
                                </div>

                                <label className="switch align-self-center">
                                    <input type="checkbox" className="warning" onChange={this.props.userRemoveWords}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
ReadingHelperController.propTypes = {
    wpm: PropTypes.number.isRequired,
    userChangeWPM: PropTypes.func.isRequired,
    userRemoveWords: PropTypes.func.isRequired
};