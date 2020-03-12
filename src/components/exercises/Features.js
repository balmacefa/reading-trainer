import React, {Component} from 'react'
import FeaturesItem from './FeaturesItem'
export default class Features extends Component {
    render() {
        return (
            <div>
                <div className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Features
                            </h2>
                        </div>
                        <div className="row justify-content-center features">

                            <FeaturesItem
                                icon='fa-bullseye'
                                title='Speed reading test'
                                description='Test your wpm or words per minutes.'
                                link='/speed-reading-test'/>

                            <FeaturesItem
                                icon='fa-newspaper-o'
                                title='Reading helper'
                                link='/reading-helper'
                                description='The reading helper remove the words, preventing you to reread and force you to read in a constant velocity.'/>

                            <FeaturesItem
                                icon='fa-bolt'
                                title='Running Words'
                                description='The aim of this exercise is to see all the words on
                            the screen, focusing on the center.'
                                link='/running-words'/>

                            <FeaturesItem
                                icon='fa-stack-overflow'
                                title='Columns of words'
                                description='The exercise develops concentration, that allows you
                                to absord a lot of information.'
                                link='/columns-of-words'/>

                            <FeaturesItem
                                icon='fa-align-justify'
                                title='Block of words'
                                description='Expand the line of sight and increase the amount of text captured by the eyes.'
                                link='/block-of-words'/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
