import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import WordWPMController from '../WordWPMController';

export default class ColumnsOfWordsPlay extends Component {

    render() {
        const items = Object
            .keys(this.props.columnList)
            .map(item => <p
                key={item}
                className={`text-center ${this.props.columnList[item].color} description mb-1`}>{this.props.columnList[item].words}</p>);

        return (
            <Fragment>
                <div className="container Exercise-description">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">
                                <strong>Columns of words</strong>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-12 p-7">
                            {items}
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

ColumnsOfWordsPlay.propTypes = {
    columnList: PropTypes.array.isRequired,
    wpm: PropTypes.number.isRequired,
    progressBar: PropTypes.number.isRequired,
    amountOfWords: PropTypes.number.isRequired,
    userChangeWords: PropTypes.func.isRequired,
    userChangeWPM: PropTypes.func.isRequired
};
