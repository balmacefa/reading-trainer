import React, {Component} from 'react';
import ReactAnimationFrame from 'react-animation-frame';
// import RunningWordsFinished from './RunningWordsFinished.js';

import WordsGenerator from '../../../utils/wordGenerator/WordsGenerator';
import ColumnsOfWordsPlay from './ColumnsOfWordsPlay.js';

class ColumnsOfWords extends Component {

    constructor(props) {
        super(props);

        this.totalColumns = 10;
        this.maxAmountOfWords = 10;

        let amountOfWords = 1;

        this.columnList = [];
        for (let index = 0; index < this.totalColumns; index++) {
            this.columnList[index] = {
                color: '',
                words: ''
            };
        }

        //'PLAY', FINISHED
        this.state = {
            init: false,
            statusView: 'PLAY',
            wpm: 400,
            columnList: this.columnList,
            progressBar: 0,
            amountOfWords: amountOfWords
        };

        this.currentRef = this.totalColumns - 1;

        this.nextStyleChange = 0;
        this.endSessionTime = 60 * 1000;

        this.timeout = 1000;

    }

    changeAllWords(number) {
        this
            .columnList
            .map((el) => el.words = WordsGenerator(number));

        this.setState({columnList: this.columnList});
    }

    userChangeWords(isUp) {
        let amountOfWords = this.state.amountOfWords;
        if (isUp && amountOfWords < this.maxAmountOfWords) {
            amountOfWords = amountOfWords + 1;
        } else if (amountOfWords > 1) {
            amountOfWords = amountOfWords - 1;
        }
        this.setState({amountOfWords: amountOfWords});
        this.changeAllWords(amountOfWords);
    }

    userChangeWPM(isUp) {
        let wpm = this.state.wpm;
        if (isUp) {
            wpm = this.state.wpm + 50;
        } else if (this.state.wpm > 100) {
            wpm = this.state.wpm - 50;
        }
        this.setState({wpm: wpm});
    }

    wpmToMs(wpm) {
        return 60000 / wpm;
    }
    nextWordRef() {
        this.currentRef++;
        if (this.currentRef >= this.totalColumns) {
            this.currentRef = 0;
            this.changeAllWords(this.state.amountOfWords);
        }
        return this.currentRef;
    }

    changeStatus() {
        this.columnList[this.currentRef].color = ' ';
        this.columnList[this.nextWordRef()].color = 'text-info';
        this.setState({columnList: this.columnList});
    }

    finish() {
        this.setState({statusView: "FINISHED"});
    }

    onAnimationFrame(time) {

        if (time >= this.endSessionTime && this.state.statusView === 'PLAY') {
            this.finish();
            return;
        }
        if (time > this.nextStyleChange && this.state.statusView === 'PLAY') { //this below is unity docs example
            this.nextStyleChange = time + this.wpmToMs(this.state.wpm);

            this.changeStatus();
            this.progressBar(time);
        }
    }

    progressBar(completed) {
        this.setState({
            progressBar: parseFloat(completed / this.endSessionTime * 100)
        });
    }

    View() {
        // PLAY , FINISHED
        switch (this.state.statusView) {
            case 'PLAY':
                return <ColumnsOfWordsPlay
                    columnList={this.state.columnList}
                    wpm={this.state.wpm}
                    progressBar={this.state.progressBar}
                    amountOfWords={this.state.amountOfWords}
                    userChangeWords={(isUp) => {
                    this.userChangeWords(isUp)
                }}
                    userChangeWPM={(isUp) => {
                    this.userChangeWPM(isUp)
                }}/>
            case 'FINISHED':
                // return <RunningWordsFinished     wpm={this.state.wpm}
                // correctAnswers={this.correctAnswers}     wrongAnswers={this.wrongAnswers}/>
                return <h1>FINISHED</h1>

            default:
                return <h1>ERROR</h1>
        }
    }

    render() {
        return (
            <div>
                {this.View()}
            </div>
        )
    }
}

export default ReactAnimationFrame(ColumnsOfWords);