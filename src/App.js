import React from 'react';
import './App.css';

import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/fonts/ionicons.min.css";
import "./assets/css/Features-Boxed.css";
import "./assets/css/Footer-Clean.css";
import "./assets/css/Navigation-Clean.css";
import "./assets/css/styles.css";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/globals/Header';
import Footer from './components/globals/Footer';
import Features from './components/exercises/Features';
import RunningWords from './components/exercises/RunningWords/RunningWords';
import ColumnsOfWords from './components/exercises/ColumnsOfWords/ColumnsOfWords';
import BlockOfWords from './components/exercises/BlockOfWords/BlockOfWords';
import SpeedReadingTest from './components/exercises/SpeedReadingTest/SpeedReadingTest';
import ReadingHelper from './components/exercises/ReadingHelper/ReadingHelper';

function App() {
    return (
        <Router>

            <Header/>
            <Switch>
                <Route exact path="/">
                    <Features/>
                </Route>

                <Route path="/speed-reading-test">
                    <SpeedReadingTest/>
                </Route>

                <Route path="/running-words">
                    <RunningWords/>
                </Route>
                <Route path="/columns-of-words">
                    <ColumnsOfWords/>
                </Route>

                <Route path="/block-of-words">
                    <BlockOfWords/>
                </Route>
                <Route path="/reading-helper">
                    <ReadingHelper/>
                </Route>

            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
