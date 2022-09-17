import {useState,useRef} from 'react';
import name from './images/name.png';
import './style.css';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Contact from './Contact';

function App() {
  const refContent = useRef(null);
  const executeScroll = () => refContent.current.scrollIntoView();
  const [aboutMeSelected, setAboutMeSelected] = useState(true);
  const handleClickAboutMe = event => {
    setAboutMeSelected(true);
    setExperiencesSelected(false);
    setContactSelected(false);
    executeScroll();
  };
  const [experiencesSelected, setExperiencesSelected] = useState(false);
  const handleClickExperiences = event => {
    setExperiencesSelected(true);
    setAboutMeSelected(false);
    setContactSelected(false);
    executeScroll();
  };
  const [contactSelected, setContactSelected] = useState(false);
  const handleClickContact = event => {
    setContactSelected(true);
    setAboutMeSelected(false);
    setExperiencesSelected(false);
    executeScroll();
  };
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li onClick={handleClickAboutMe}>About me</li>
            <li onClick={handleClickExperiences}>Experiences</li>
            <li onClick={handleClickContact}>Contact</li>
          </ul>
        </nav>
        <img src={name} alt="Martin Wallet" />
        <h1>Database administrator</h1>
        <p>But not only</p>
        <div class="profile">
          <div class="profile-picture"></div>
          <ul>
            <li>
              <p class="years-number">25</p>
              <div>
                <p class="years-category">my age</p>
                <p class="years-text">years</p>
              </div>
            </li>
            <li>
              <p class="years-number">5</p>
              <div>
                <p class="years-category">studies</p>
                <p class="years-text">years</p>
              </div>
            </li>
            <li>
              <p class="years-number">3</p>
              <div>
                <p class="years-category">work</p>
                <p class="years-text">years</p>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <div ref={refContent}>
        {aboutMeSelected && <AboutMe />}
        {experiencesSelected && <Experiences />}
        {contactSelected && <Contact />}
      </div>
    </div>

  );
}

export default App;
