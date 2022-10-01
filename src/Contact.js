import React from 'react';
import './Contact.css';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';
import twitter from './images/twitter.svg';
import frontendmentor from './images/frontendmentor.svg';

function Contact() {
  return(
    <div className='content contact'>
      <h2>Contact</h2>
      <div className='social-media'>
        <a href='https://www.linkedin.com/in/martin-wallet/'>
          <div className='link linkedin'>
            <img src={linkedin} alt='Linked in icon' />
            <p>Martin Wallet</p>
          </div>
        </a>
        <a href='https://github.com/martinw0'>
          <div className='link github'>
            <img src={github} alt='GitHub icon' />
            <p>martinw0</p>
          </div>
        </a>
        <a href='https://twitter.com/LeWalletM'>
          <div className='link twitter'>
            <img src={twitter} alt='Twitter in icon' />
            <p>@LeWalletM</p>
          </div>
        </a>
        <a href='https://www.frontendmentor.io/profile/martinw0'>
          <div className='link frontendmentor'>
            <img src={frontendmentor} alt='Frontend Mentor icon' />
            <p>martinw</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Contact;