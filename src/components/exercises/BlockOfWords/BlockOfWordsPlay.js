import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import WordWPMController from '../WordWPMController';

export default class BlockOfWordsPlay extends Component {

    render() {
        return (
            <Fragment>
                <div className="container Exercise-description">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">
                                <strong>Block of words</strong>
                            </h2>
                        </div>
                    </div>
                </div>

                <div
                    className="container border rounded border-info text-center p-7 mt-5">
                    <div className="row">
                        <div className="col-12 p-7">
                            <p className="text-center description mb-1 f-verdana">{this.props.currentWord}</p>
                        </div>
                    </div>
                </div>

                <WordWPMController
                    wpm={this.props.wpm}
                    progressBar={this.props.progressBar}
                    amountOfWords={this.props.amountOfWords}
                    userChangeWords={this.props.userChangeWords}
                    userChangeWPM={this.props.userChangeWPM}/>

            </Fragment>
        );
    }
}

BlockOfWordsPlay.propTypes = {
    currentWord: PropTypes.string.isRequired,
    wpm: PropTypes.number.isRequired,
    progressBar: PropTypes.number.isRequired,
    amountOfWords: PropTypes.number.isRequired,
    userChangeWords: PropTypes.func.isRequired,
    userChangeWPM: PropTypes.func.isRequired
};
