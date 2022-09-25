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
        <div className='link linkedin'>
          <img src={linkedin} alt='Linked in icon' />
          <a href='https://www.linkedin.com/in/martin-wallet/'>Martin Wallet</a>
        </div>
        <div className='link github'>
          <img src={github} alt='GitHub icon' />
          <a href='https://github.com/martinw0'>martinw0</a>
        </div>
        <div className='link twitter'>
          <img src={twitter} alt='Twitter in icon' />
          <a href='https://twitter.com/LeWalletM'>@LeWalletM</a>
        </div>
        <div className='link frontendmentor'>
          <img src={frontendmentor} alt='Frontend Mentor icon' />
          <a href='https://www.frontendmentor.io/profile/martinw0'>martinw</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;