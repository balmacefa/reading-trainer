import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

export default class RunningWordsAnswer extends Component {

    constructor(props) {
        super(props);

        let list = props.answerList;

        this.answerList = {}
        for (let i = 0; i < list.length; i++) {
            this.answerList[i] = {
                word: list[i],
                color: 'btn-dark'
            };
        }

        this.state = {
            isAnswered: false,
            answerList: this.answerList
        };
    }

    answerSelected(el) {
        let isCorrect;
        if (el.word === this.props.correctWord) {
            // Correct
            isCorrect = true;
            el.color = 'btn-info';
        } else {
            // wrong
            isCorrect = false;
            el.color = 'btn-danger';
            Object
                .keys(this.state.answerList)
                .map((key) => {
                    const e = this.state.answerList[key];
                    if (e.word === this.props.correctWord) {
                        e.color = 'btn-info';
                        return null;
                    }
                    return null;
                });
        }
        this.setState({answerList: this.answerList, isAnswered: true});
        this
            .props
            .answerMethod(isCorrect);
    }

    render() {
        const items = Object
            .keys(this.state.answerList)
            .map((key) => {
                const el = this.state.answerList[key];
                return (
                    <div key={el.word} className="col-6 p-7">
                        <div>
                            <button
                                disabled={this.state.isAnswered}
                                onClick={() => this.answerSelected(el)}
                                className={`btn ${el.color} btn-block p-2`}
                                type="button">{el.word}</button>
                        </div>
                    </div>
                );
            });

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
                    <div className="row mb-2">
                        <div className="col-12">
                            <h6 className="text-center text-black-50">Select the last word:</h6>
                        </div>
                    </div>
                    <div className="row">
                        {items}
                        <div className="col-12 p-3">
                            <button
                                disabled={this.state.isAnswered}
                                onClick={() => this.answerSelected({word: '...'})}
                                className={`btn btn-warning btn-block p-2`}
                                type="button">I don&apos;t know</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

RunningWordsAnswer.propTypes = {
    answerList: PropTypes.array.isRequired,
    wpm: PropTypes.number.isRequired,
    correctWord: PropTypes.string.isRequired,
    answerMethod: PropTypes.func.isRequired
};
