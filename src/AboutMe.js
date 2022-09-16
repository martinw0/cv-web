import React, { Component } from 'react';
import './AboutMe.css';
import triangle from './images/triangle.svg';

export default class AboutMe extends Component {
    render() {
        return(
            <div className='content'>
                <h2>About me</h2>
                <p>Three things that makes me</p>
                <div class="triangle">
                    <button>Productivity</button>
                    <img src={triangle} alt="Triangle" />
                    <button class="inactive-buttons">Learning</button>
                    <button class="inactive-buttons">Automation</button>
                </div>
                <div class="card">
                    <p>I am very attracted to the productivity: In my opinion, it is the way of performing actions as efficiently as possible and organizing them in such a way that we achieve our goals.<br />
                    Recently, I’m interested in the organization and the personal development. These subjects are both valuable at work and for the personal life.
                    I like to believe that mindset makes my work better and more valuable.<br />
                    <br />
                    I like to listen the podcasts and read the website of Matthieu Desroches. He has a great experience and give very clear explanations and concrete examples. 
                    </p>
                    <div class="selector">
                        <div class="line"></div>
                        <div class="circle active"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        )
    }
}