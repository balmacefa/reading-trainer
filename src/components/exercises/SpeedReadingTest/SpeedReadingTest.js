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
        this.userEndTheTest = this
            .userEndTheTest
            .bind(this);
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

                <div className="container p-7 mt-5">
                    <div className="row">
                        <div className="col-12 p-7">
                            <p id="countableArea">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu malesuada
                                velit. Suspendisse eget turpis at urna lacinia suscipit. Nam consequat, felis et
                                congue fermentum, neque lorem tincidunt turpis, at semper est mauris vel velit.
                                Nulla eu nisl feugiat, lacinia nunc quis, sollicitudin leo. Vivamus vestibulum
                                blandit dolor, id varius augue sagittis ac. Praesent non sem ipsum. Suspendisse
                                sagittis congue lacus et gravida. Integer et ipsum feugiat, luctus erat at,
                                volutpat diam. Integer justo massa, ultrices at porttitor nec, rutrum quis
                                augue. Ut accumsan dictum ante ut efficitur. Sed molestie ipsum elit, et
                                interdum est aliquet non. Nam tincidunt rhoncus erat, sit amet auctor ipsum
                                ornare convallis. Mauris at eros pulvinar risus ornare accumsan sed id nisl.
                                Pellentesque enim velit, maximus sed elit sed, luctus sodales massa. Integer
                                venenatis nibh nulla, vel efficitur massa volutpat in. Mauris porta dui id
                                tellus laoreet, at sodales lorem posuere. Maecenas eget elementum purus.
                                Maecenas sagittis malesuada vehicula. Quisque ac tellus ut felis mollis commodo
                                quis feugiat lectus. In sed tincidunt arcu. Etiam bibendum a nulla a tristique.
                                Aliquam viverra tellus et tincidunt ultrices. Nulla in pretium velit. Donec
                                viverra elit quis enim luctus dapibus. Duis et mattis dolor. Duis gravida in
                                lacus in dignissim. Fusce nisi nulla, mattis ut efficitur sed, bibendum in
                                nulla. Vivamus ut auctor sapien. Mauris venenatis libero at porta gravida. Duis
                                rhoncus consectetur ex in tempor. Ut porta vitae tellus in convallis. Proin
                                scelerisque laoreet neque, ut blandit enim blandit ac. Cras consectetur
                                consequat orci ornare pellentesque. Fusce vel lorem eu libero dignissim
                                efficitur. Mauris vitae massa cursus, tincidunt massa vitae, ullamcorper tellus.
                                Nullam vel turpis porttitor, pulvinar eros in, mollis libero. Vestibulum erat
                                orci, cursus vitae metus sit amet, aliquam faucibus felis. Etiam malesuada ut
                                nibh eu auctor. Curabitur libero sapien, congue vitae neque ullamcorper,
                                molestie egestas nibh. In maximus diam ac dolor fringilla, fringilla interdum
                                velit bibendum. Sed mollis sed eros ac tincidunt. Aliquam mollis malesuada
                                purus, sit amet auctor odio sollicitudin id. Duis cursus justo metus, lobortis
                                sollicitudin est bibendum a. Donec et lobortis enim. Aenean egestas convallis
                                dapibus. Sed tincidunt nunc id est molestie efficitur. Pellentesque in elementum
                                nulla. Curabitur ut ante in ligula laoreet auctor. Fusce iaculis augue eget
                                libero pretium, nec commodo diam scelerisque. Phasellus a fermentum nisl.
                                Pellentesque varius ligula eget justo aliquam, ac mattis neque tincidunt. Sed
                                nec lectus ut massa commodo placerat. Pellentesque vel ante blandit, tristique
                                est eu, vestibulum nulla. Suspendisse non semper metus, ut vehicula est. Mauris
                                feugiat nec nisl id blandit. Suspendisse faucibus orci et arcu vestibulum
                                ultricies. Phasellus eget turpis non augue imperdiet tincidunt ut quis mauris.
                                Morbi vulputate sollicitudin varius. In rutrum interdum enim hendrerit faucibus.
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