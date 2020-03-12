import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

export default class RunningWordsPlay extends Component {

    render() {
        const items = Object
            .keys(this.props.wordsExcecise)
            .map(item => <div key={item} className="col-4 mb-2 p-1">
                <div className="underline">
                    <p className={`mb-0 min-height-24 f-verdana`}>{this.props.wordsExcecise[item]}</p>
                </div>
            </div>);
        return (
            <Fragment>
                <div className="container Exercise-description">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">Running words</h2>
                        </div>
                    </div>
                </div>
                <div className="container text-center running-words-container">
                    <div className="row mb-5">
                        <div className="col-2 offset-10">
                            <h6 className="text-right text-black-50 mb-0">{this.props.wpm}</h6>
                            <h6 className="text-right text-black-50">wpm</h6>
                        </div>
                    </div>
                    <div className="row">
                        {items}
                    </div>
                </div>
            </Fragment>
        )
    }
}

RunningWordsPlay.propTypes = {
    wordsExcecise: PropTypes.array.isRequired,
    wpm: PropTypes.number.isRequired
};
