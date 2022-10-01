import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './AboutMe.css';
import triangle from './images/triangle.svg';
import { gsap } from "gsap";

function AboutMe() {
    const [itemSelected, setItemSelected] = useState('Productivity');
    const [rotation, setRotation] = useState(0);
    const handleClick = name => {
        let clockwise = true;
        if(itemSelected==='Productivity' && name==='Automation') {
            clockwise = true;
        }
        else if(itemSelected==='Productivity' && name==='Learning') {
            clockwise = false;
        }
        else if(itemSelected==='Automation' && name==='Learning') {
            clockwise = true;
        }
        else if(itemSelected==='Automation' && name==='Productivity') {
            clockwise = false;
        }
        else if(itemSelected==='Learning' && name==='Productivity') {
            clockwise = true;
        }
        else if(itemSelected==='Learning' && name==='Automation') {
            clockwise = false;
        } 
        if (itemSelected !== name) {
            clockwise ? setRotation(rotation+120) : setRotation(rotation-120);
        }
        setItemSelected(name);
    };
    const triangleRef = useRef(null);
    useEffect(() => {
        gsap.to(triangleRef.current, {
            rotate: rotation,
        });
    }, [rotation]);
    return(
        <div className='content aboutme'>
            <h2>About me</h2>
            <p>Three things that makes me</p>
            <div class="triangle">
                <button value='Productivity' onClick={e => handleClick(e.target.value)} className={itemSelected==='Productivity' ? null : 'inactive-buttons'}>Productivity</button>
                <img src={triangle} ref={triangleRef} alt="Triangle" />
                <button value='Learning' onClick={e => handleClick(e.target.value)} className={itemSelected==='Learning' ? null : 'inactive-buttons'}>Learning</button>
                <button value='Automation' onClick={e => handleClick(e.target.value)} className={itemSelected==='Automation' ? null : 'inactive-buttons'}>Automation</button>
            </div>
            <div class="card">
                <Paragraph item={itemSelected} />
                <div class="selector">
                    <div class="line"></div>
                    <div className={'circle ' + (itemSelected==='Productivity' ? 'active' : null)}></div>
                    <div className={'circle ' + (itemSelected==='Learning' ? 'active' : null)}></div>
                    <div className={'circle ' + (itemSelected==='Automation' ? 'active' : null)}></div>
                </div>
            </div>
        </div>
    )
}

function Paragraph(props) {
    if(props.item==='Productivity') {
        return(
            <p>I am very attracted to the productivity: In my opinion, it is the way of performing actions as efficiently as possible and organizing them in such a way that we achieve our goals.<br />
            Recently, I’m interested in the organization and the personal development. These subjects are both valuable at work and for the personal life.
            I like to believe that mindset makes my work better and more valuable.<br />
            <br />
            I like to listen the podcasts and read the website of Matthieu Desroches. He has a great experience and give very clear explanations and concrete examples. 
            </p>
        )
    }
    else if(props.item==='Learning') {
        return(
            <p>
                I’m always trying to improve myself by learning new things or strenghten my skills.
                I’ve done my studies with PBL (Problem Base Learning) method at cesi. So during my studies I learnt how to learn by myself.<br />
                <br/>
                I think learning bye practicing is the best way to learn. For example, actually, I’m learning the web development and the web design by making websites. The frontendmentor challenges are very useful for that.<br />
                <br />
                I’m also curious and I do often some little projects on a raspberry Pi. In IT, it’s a very important quality as the technologies evolving so fast. <br />
            </p>
        )
    }
    else if(props.item==='Automation') {
        return(
            <p>
                I am fascinated by this process of delegating Human tasks to computer/robot. In everyday life, and especially at work, I’ve always this question in my mind when I do the same task one time, two times, three times: Can it be automated ?<br />
                <br />
                I believe in the theory that is saying : “ the best engineer is a lazy engineer ”. Of course, the idea come from this state of mind. But, to realise it, the work should be done and this lazy part disappear for a moment. Finally, the result of this work is remarkable when we won’t do again a recurrent task. That’s why I love IT!<br />
                <br />
                Actually, the cloud is showing us that the automation is the key.<br />
            </p>
        )
    }
    else {
        return <p>Content not found</p>
    }

}

export default AboutMe;