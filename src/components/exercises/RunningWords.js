import React, {Component} from 'react';
import wordList from './words.json';
import ReactAnimationFrame from 'react-animation-frame';

class RunningWords extends Component {

    constructor(props) {
        super(props);

        this.totalWords = 9;

        const wordsExcecise = [];
        for (let index = 0; index < this.totalWords; index++) {
            wordsExcecise[index] = '';
        }

        this.state = {
            wpm: 400,
            wordsExcecise
        };

        this.currentWordRef = this.totalWords - 1;
        this.word = '';

        this.nextFireWord = 0;
    }

    wpmToMs(wpm) {
        return 60000 / wpm;
    }
    nextWordRef() {
        this.currentWordRef++;
        if (this.currentWordRef >= this.totalWords) {
            this.currentWordRef = 0;
        }
        return this.currentWordRef;
    }

    addNewWord() {
        this.word = this.pickRandomWord();
        let items = [...this.state.wordsExcecise];

        items[this.currentWordRef] = '';
        items[this.nextWordRef()] = this.word;
        this.setState({wordsExcecise: items});
    }

    pickRandomWord() {
        return wordList[Math.floor(Math.random() * wordList.length)];
    }

    onAnimationFrame(time, lastInvocationMs) {
        if (time > this.nextFireWord) { //this below is unity docs example
            this.nextFireWord = time + this.wpmToMs(this.state.wpm);

            this.addNewWord();
        }
    }

    render() {

        const items = Object
            .keys(this.state.wordsExcecise)
            .map(item => <div key={item} className="col-4 p-20">
                <div className="underline">
                    <p className="mb-0 min-height-24">{this.state.wordsExcecise[item]}</p>
                </div>
            </div>);

        return (
            <div>
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
                            <h6 className="text-right text-black-50 mb-0">{this.state.wpm}</h6>
                            <h6 className="text-right text-black-50">wpm</h6>
                        </div>
                    </div>
                    <div className="row">
                        {items}
                    </div>
                </div>
                <div
                    className="container text-center running-words-container r-w-container-respuestas">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="text-monospace text-center text-black-50">Speed</h1>
                            <h3 className="text-center text-black-50 mb-0">950</h3>
                            <h6 className="text-center text-black-50">wpm</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 p-7">
                            <div>
                                <button className="btn btn-dark btn-block p-2" type="button">Button</button>
                            </div>
                        </div>
                        <div className="col-6 p-7">
                            <div>
                                <button className="btn btn-dark btn-block p-2" type="button">Button</button>
                            </div>
                        </div>
                        <div className="col-6 p-7">
                            <div>
                                <button className="btn btn-dark btn-block p-2" type="button">Button</button>
                            </div>
                        </div>
                        <div className="col-6 p-7">
                            <div>
                                <button className="btn btn-dark btn-block p-2" type="button">Button</button>
                            </div>
                        </div>
                        <div className="col-6 p-7">
                            <div>
                                <button className="btn btn-dark btn-block p-2" type="button">Button</button>
                            </div>
                        </div>
                        <div className="col-6 p-7">
                            <div>
                                <button className="btn btn-dark btn-block p-2" type="button">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReactAnimationFrame(RunningWords);