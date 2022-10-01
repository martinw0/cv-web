import {useState,useRef,useEffect} from 'react';
import name from './images/name.png';
import './style.css';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Contact from './Contact';
import ReactGA from 'react-ga';

function App() {
  const refContent = useRef(null);
  const executeScroll = () => refContent.current.scrollIntoView({behavior: "smooth",});
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
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
  };
  useEffect(() => {
    window.addEventListener('resize', documentHeight);
    documentHeight();
  }, []);
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
        <div className="profile">
          <div className="profile-picture"></div>
          <ul>
            <li>
              <p className="years-number">25</p>
              <div>
                <p className="years-category">my age</p>
                <p className="years-text">years</p>
              </div>
            </li>
            <li>
              <p className="years-number">5</p>
              <div>
                <p className="years-category">studies</p>
                <p className="years-text">years</p>
              </div>
            </li>
            <li>
              <p className="years-number">3</p>
              <div>
                <p className="years-category">work</p>
                <p className="years-text">years</p>
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

ReactGA.initialize('UA-99996165-2', []);
ReactGA.pageview(window.location.pathname);
export default App;
