import React, {Component} from 'react';
import ReactAnimationFrame from 'react-animation-frame';
// import RunningWordsFinished from './RunningWordsFinished.js';

import WordsGenerator from '../../../utils/wordGenerator/WordsGenerator';
import BlockOfWordsPlay from './BlockOfWordsPlay.js';

class BlockOfWords extends Component {

    constructor(props) {
        super(props);
        this.View = this
            .View
            .bind(this);

        let amountOfWords = 1;

        this.maxAmountOfWords = 10;

        //'PLAY', FINISHED
        this.state = {
            init: false,
            statusView: 'PLAY',
            wpm: 400,
            progressBar: 0,
            amountOfWords: amountOfWords,
            currentWord: ''
        };

        this.nextStyleChange = 0;
        this.endSessionTime = 60 * 1000;

        this.timeout = 1000;

        this.userChangeWords = this
            .userChangeWords
            .bind(this);

        this.userChangeWPM = this
            .userChangeWPM
            .bind(this);
    }

    changeWords(number) {
        this.setState({currentWord: WordsGenerator(number)});
    }

    userChangeWords(isUp) {
        let amountOfWords = this.state.amountOfWords;
        if (isUp && amountOfWords < this.maxAmountOfWords) {
            amountOfWords = amountOfWords + 1;
        } else if (amountOfWords > 1) {
            amountOfWords = amountOfWords - 1;
        }
        this.setState({amountOfWords: amountOfWords});
        this.changeWords(amountOfWords);
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

            this.changeWords(this.state.amountOfWords);
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
                return <BlockOfWordsPlay
                    currentWord={this.state.currentWord}
                    wpm={this.state.wpm}
                    progressBar={this.state.progressBar}
                    amountOfWords={this.state.amountOfWords}
                    userChangeWords={this.userChangeWords}
                    userChangeWPM={this.userChangeWPM}/>
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
                <this.View/>
            </div>
        )
    }
}

export default ReactAnimationFrame(BlockOfWords);