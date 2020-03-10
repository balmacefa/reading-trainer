import React, {Component, Fragment} from 'react';
import ReactAnimationFrame from 'react-animation-frame';
import ReadingHelperController from './ReadingHelperController';

class ReadingHelper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            init: false,
            wpm: 400,
            divider: 70,
            context: props.context,
        };

        this.wordRef = 0;

        this.removeWords = false;

        this.nextFireWord = 0;
        this.userRemoveWords = this
            .userRemoveWords
            .bind(this);
        this.userChangeWPM = this
            .userChangeWPM
            .bind(this);
    }

    wpmToMs(wpm) {
        return 60000 / wpm;
    }

    tick() {}

    onAnimationFrame(time) {
        if (this.userRemoveWords && time > this.nextFireWord) {
            this.nextFireWord = time + this.wpmToMs(this.state.wpm);

            this.tick();
        }
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

    userRemoveWords(event) {
    console.log('sd');
        this.state.context.hola();
        this.removeWords = event.target.value;

        if (!this.removeWords) {
            //clear UI and counter
            
        }
    }

    render() {
        return (
            <Fragment>

                <div className="container">

                    <ReadingHelperController
                        wpm={this.state.wpm}
                        userChangeWPM={this.userChangeWPM}
                        userRemoveWords={this.userRemoveWords}/>

                    <div className="row justify-content-center text-justify">
                        <div className="col-md-6 mt-5 mb-5">
                            <div
                                id="l-divider"
                                style={{
                                left: this.state.divider / 2 + '%'
                            }}></div>

                            <div
                                id="r-divider"
                                style={{
                                right: this.state.divider / 2 + '%'
                            }}></div>

                            <p className="text-lighter">Have you ever wondered what it means to live in the
                                present? Arent we all here, now, in the present? Technically, yes, but for so
                                many of us, we are only 10 percent here. We are really living in our minds. We
                                exist from day-to-day in a dream-like state where were not really connected to
                                the world around us, nor centered in our own body or being. Instead, were
                                preoccupied with memories of the past, churning thoughts and worries about the
                                future, and judgments and reactions to the few things we do see. Were literally
                                missing out on most our own lives, which leaves us feeling shallow, empty and
                                deeply unsettled. The great news is you can learn to be more present and
                                mindful. Here are 10 easy ways you can practice mindfulness in your daily life.
                                1. Eat mindfully. When you scoff down your meal on autopilot while distracted by
                                the television, computer or constant conversation, you miss out on the delicious
                                taste and smell of your food. Youre also less likely to feel satisfied and
                                nourished, because you missed out on the fact that you ate. It can be helpful to
                                remember this phrase: When you eat, eat. When you drink, drink. In other words,
                                dont attempt to do fifty other things when you sit down to a meal, coffee or
                                green juice. Simply focus all of your attention on what is in front of you. 2.
                                Walk mindfully. The essential guide to taking care of your mind and body
                                Subscribe to HuffPost’s wellness email Thanks! You have been successfully signed
                                up. Take a beautiful tip from spiritual leader Thich Nhat Hanh and walk as if
                                you are kissing the earth with your feet. In others words, when you are out and
                                about, pay attention occasionally to the movement of your body and your
                                surroundings. Notice as your feet connect with and leave the ground. Feel your
                                muscles moving and supporting you. Observe what is going on around you -- the
                                sights, sounds and life unfolding. You may be amazed to find a whole new world
                                you hadnt even noticed before.
                            </p>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default ReactAnimationFrame(ReadingHelper);