import React from 'react';
import { useState } from 'react';
import './AboutMe.css';
import triangle from './images/triangle.svg';

function AboutMe() {
    const [itemSelected, setItemSelected] = useState('Productivity');
    const handleClick = name => {
        setItemSelected(name);
    };
    return(
        <div className='content'>
            <h2>About me</h2>
            <p>Three things that makes me</p>
            <div class="triangle">
                <button value='Productivity' onClick={e => handleClick(e.target.value)} className={itemSelected==='Productivity' ? null : 'inactive-buttons'}>Productivity</button>
                <img src={triangle} alt="Triangle" />
                <button value='Learning' onClick={e => handleClick(e.target.value)} className={itemSelected==='Learning' ? null : 'inactive-buttons'}>Learning</button>
                <button value='Automation' onClick={e => handleClick(e.target.value)} className={itemSelected==='Automation' ? null : 'inactive-buttons'}>Automation</button>
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

export default AboutMe;