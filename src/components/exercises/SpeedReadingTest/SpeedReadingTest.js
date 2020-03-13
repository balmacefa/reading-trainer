import React, {Component, Fragment} from 'react';
import Countable from 'countable';

class SpeedReadingTest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            wpm: 0,
            initTime: 0,
            time: 0,
            isFinished: false,
            amountOfWords: 0
        };
        this.idContainer = 'countableArea';
    }

    componentDidMount() {
        const area = document.getElementById(this.idContainer);
        Countable.count(area, (counter) => {
            this.setState({
                initTime: Date.now(),
                amountOfWords: counter.words
            });
        });
    }

    userEndTheTest() {

        let minutes = (Date.now() - this.state.initTime) / 60000;

        let wpm = Math.round(this.state.amountOfWords / minutes);
        this.setState({
            isFinished: true,
            time: Math.round((minutes + Number.EPSILON) * 100) / 100,
            wpm: wpm
        });
    }

    render() {
        return (
            <Fragment>
                <div className="container Exercise-description">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">
                                <strong>Speed reading test</strong>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center text-justify">
                        <div className="col-md-6 mt-5 mb-5">
                            <p id="countableArea" className="text-lighter">Have you ever wondered what it
                                means to live in the present? Arent we all here, now, in the present?
                                Technically, yes, but for so many of us, we are only 10 percent here. We are
                                really living in our minds. We exist from day-to-day in a dream-like state where
                                were not really connected to the world around us, nor centered in our own body
                                or being. Instead, were preoccupied with memories of the past, churning thoughts
                                and worries about the future, and judgments and reactions to the few things we
                                do see. Were literally missing out on most our own lives, which leaves us
                                feeling shallow, empty and deeply unsettled. The great news is you can learn to
                                be more present and mindful. Here are 10 easy ways you can practice mindfulness
                                in your daily life. 1. Eat mindfully. When you scoff down your meal on autopilot
                                while distracted by the television, computer or constant conversation, you miss
                                out on the delicious taste and smell of your food. Youre also less likely to
                                feel satisfied and nourished, because you missed out on the fact that you ate.
                                It can be helpful to remember this phrase: When you eat, eat. When you drink,
                                drink. In other words, dont attempt to do fifty other things when you sit down
                                to a meal, coffee or green juice. Simply focus all of your attention on what is
                                in front of you. 2. Walk mindfully. The essential guide to taking care of your
                                mind and body Subscribe to HuffPost’s wellness email Thanks! You have been
                                successfully signed up. Take a beautiful tip from spiritual leader Thich Nhat
                                Hanh and walk as if you are kissing the earth with your feet. In others words,
                                when you are out and about, pay attention occasionally to the movement of your
                                body and your surroundings. Notice as your feet connect with and leave the
                                ground. Feel your muscles moving and supporting you. Observe what is going on
                                around you -- the sights, sounds and life unfolding. You may be amazed to find a
                                whole new world you hadnt even noticed before.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-12 p-7">
                            <button
                                disabled={this.state.isFinished}
                                onClick={() => this.userEndTheTest()}
                                className="btn btn-secondary"
                                type="button">Finish</button>
                        </div>
                    </div>
                </div>

                {this.state.isFinished && <div
                    className="container text-center running-words-container r-w-container-respuestas">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="text-monospace text-center text-black-50">Speed</h1>
                            <h3 className="text-center text-black-50 mb-0">{this.state.wpm}</h3>
                            <h6 className="text-center text-black-50">wpm</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-7">
                            <h6 className="text-center text-black-50">Amount of words: {this.state.amountOfWords}</h6>
                            <h6 className="text-center text-black-50">Time: {this.state.time}
                                mins</h6>
                        </div>
                    </div>
                </div>
}

            </Fragment>
        )
    }
}

export default SpeedReadingTest;