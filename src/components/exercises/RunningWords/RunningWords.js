import React, {Component} from 'react';
import ReactAnimationFrame from 'react-animation-frame';
import RunningWordsPlay from './RunningWordsPlay.js';
import RunningWordsAnswer from './RunningWordsAnswer.js';
import RunningWordsFinished from './RunningWordsFinished.js';

import WordsGenerator from '../../../utils/wordGenerator/WordsGenerator';

class RunningWords extends Component {

    constructor(props) {
        super(props);

        this.totalWords = 9;

        const wordsExcecise = [];
        for (let index = 0; index < this.totalWords; index++) {
            wordsExcecise[index] = '';
        }

        //'PLAY', ANSWER, FINISHED
        this.state = {
            init: false,
            statusView: 'PLAY',
            wpm: 400,
            wordsExcecise
        };

        this.currentWordRef = this.totalWords - 1;
        this.word = '';

        this.nextFireWord = 0;
        this.endRoundTime = 0;
        this.roundCount = 0;
        this.roundAmount = 1;
        this.roundFrequency = [1000, 2000];

        this.timeout = 1000;

        this.correctAnswers = 0;
        this.wrongAnswers = 0;
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
        return WordsGenerator();
    }

    nexRoundTime(time) {
        // (min is inclusive, max is Exclusive)
        this.endRoundTime = time + (Math.random() * (this.roundFrequency[0] - this.roundFrequency[1]) + this.roundFrequency[1]);
    }

    onAnimationFrameInit(time) {
        this.setState({init: true});
        this.nextFireWord = 0;
        this.endRoundTime = 0;

        this.nexRoundTime(time);
    }

    shuffle(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    setAnswerArray() {
        let list = Array(6).fill('');

        for (let index = 0; index < list.length - 1; index++) {
            list[index] = this.pickRandomWord();
        }

        list[list.length - 1] = this.word;

        this.shuffle(list);

        this.setState({answerList: list});
    }

    getResponseFromUser(isCorrect) {

        let wpm = this.state.wpm;

        if (isCorrect) {
            this.correctAnswers++;
            wpm = this.state.wpm + 50;
        } else {
            this.wrongAnswers++;
            if (this.state.wpm > 100) {
                wpm = this.state.wpm - 50;
            }
        }
        this.setState({wpm: wpm});

        function resetInit() {
            let state = {};
            if (this.roundCount >= this.roundAmount) {
                state = {
                    statusView: "FINISHED"
                };
            } else {
                state = {
                    init: false,
                    statusView: "PLAY"
                };
            }
            this.setState(state);

        }

        this.resetInitInterval = setTimeout(resetInit.bind(this), this.timeout)

    }

    onAnimationFrame(time) {
        if (!this.state.init) {
            this.onAnimationFrameInit(time);
        }

        if (time > this.nextFireWord && time > this.endRoundTime && this.state.statusView === 'PLAY') {
            this.roundCount++;
            this.setAnswerArray();
            this.setState({statusView: "ANSWER"});
            console.log("END ROUND: " + this.word);
            return;
        }
        if (time > this.nextFireWord && this.state.statusView === 'PLAY') { //this below is unity docs example
            this.nextFireWord = time + this.wpmToMs(this.state.wpm);

            this.addNewWord();
        }
    }

    View() {
        //'PLAY', ANSWER, FINISHED
        switch (this.state.statusView) {
            case 'PLAY':
                return <RunningWordsPlay
                    wordsExcecise={this.state.wordsExcecise}
                    wpm={this.state.wpm}/>
            case 'ANSWER':
                return <RunningWordsAnswer
                    answerList={this.state.answerList}
                    wpm={this.state.wpm}
                    correctWord={this.word}
                    answerMethod={(isCorrect) => {
                    this.getResponseFromUser(isCorrect)
                }}/>
            case 'FINISHED':
                return <RunningWordsFinished
                    wpm={this.state.wpm}
                    correctAnswers={this.correctAnswers}
                    wrongAnswers={this.wrongAnswers}/>
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

export default ReactAnimationFrame(RunningWords);
