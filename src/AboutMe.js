import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './AboutMe.css';
import triangle from './images/triangle.svg';
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

function AboutMe() {
    const { t } = useTranslation();
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
            <div className='top'>
                {/* <div className='empty'></div> */}
                <div className='head'>
                    <h2>{t("about_me")}</h2>
                    <p>{t("about_me_desc")}</p>
                </div>
                <div className="triangle">
                    <button value='Productivity' onClick={e => handleClick(e.target.value)} className={itemSelected==='Productivity' ? null : 'inactive-buttons'}>{t("productivity")}</button>
                    <img src={triangle} ref={triangleRef} alt="Triangle" />
                    <button value='Learning' onClick={e => handleClick(e.target.value)} className={itemSelected==='Learning' ? null : 'inactive-buttons'}>{t("learning")}</button>
                    <button value='Automation' onClick={e => handleClick(e.target.value)} className={itemSelected==='Automation' ? null : 'inactive-buttons'}>{t("automation")}</button>
                </div>
                <div className='empty'></div>
            </div>
            <div className="card">
                <Paragraph item={itemSelected} />
                <div className="selector">
                    <div className="line"></div>
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
            <p>{t("paragraph_productivity_one")}<br />
            {t("paragraph_productivity_two")}<br />
            <br />
            {t("paragraph_productivity_three")}
            </p>
        )
    }
    else if(props.item==='Learning') {
        return(
            <p>
                {t("paragraph_learning_one")}<br />
                <br/>
                {t("paragraph_learning_two")}<br />
                <br />
                {t("paragraph_learning_three")}<br />
            </p>
        )
    }
    else if(props.item==='Automation') {
        return(
            <p>
                {t("paragraph_automation_one")}<br />
                <br />
                {t("paragraph_automation_two")}<br />
                <br />
                {t("paragraph_automation_three")}<br />
            </p>
        )
    }
    else {
        return <p>Content not found</p>
    }

}

export default AboutMe;