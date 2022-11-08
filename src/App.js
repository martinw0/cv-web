import {useState,useRef,useEffect} from 'react';
import name from './images/name.png';
import './style.css';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Contact from './Contact';
import ReactGA from 'react-ga';
import i18next from "i18next";
import "./i18nextConf";
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function App() {
  const { t } = useTranslation();
  const options = [
    { value: 'en', label: "English" },
    { value: 'fr', label: "Français" }
  ];
  const defaultOption = "en";
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
  const _onSelect = options => {
    i18next.changeLanguage(options['value']);
  };
  return (
    <div className="App">
      <header className="header">
        <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" className='dropdown' controlClassName='control' arrowClassName='arrow' />;
        <nav>
          <ul>
            <li onClick={handleClickAboutMe}>{t("about_me")}</li>
            <li onClick={handleClickExperiences}>{t("experiences")}</li>
            <li onClick={handleClickContact}>{t("contact")}</li>
          </ul>
        </nav>
        <img src={name} alt="Martin Wallet" />
        <h1>{t("database_administrator")}</h1>
        <p>{t("but_not_only")}</p>
        <div className="profile">
          <div className="profile-picture"></div>
          <ul>
            <li>
              <p className="years-number">25</p>
              <div>
                <p className="years-category">{t("my_age")}</p>
                <p className="years-text">{t("years")}</p>
              </div>
            </li>
            <li>
              <p className="years-number">5</p>
              <div>
                <p className="years-category">{t("studies")}</p>
                <p className="years-text">{t("years")}</p>
              </div>
            </li>
            <li>
              <p className="years-number">3</p>
              <div>
                <p className="years-category">{t("work")}</p>
                <p className="years-text">{t("years")}</p>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <div ref={refContent}  className="container">
        <div className='menu'>
        <div className="selector">
            <div className="line"></div>
            <div className={'circle ' + (aboutMeSelected ? 'active' : null)}></div>
            <div className={'circle ' + (experiencesSelected ? 'active' : null)}></div>
            <div className={'circle ' + (contactSelected ? 'active' : null)}></div>
        </div>
        <ul>
            <li className={aboutMeSelected ? 'active' : null} onClick={handleClickAboutMe}>{t("about_me")}</li>
            <li className={experiencesSelected ? 'active' : null} onClick={handleClickExperiences}>{t("experiences")}</li>
            <li className={contactSelected ? 'active' : null} onClick={handleClickContact}>{t("contact")}</li>
        </ul>
        </div>
        <div className='content-container'>
          {aboutMeSelected && <AboutMe />}
          {experiencesSelected && <Experiences />}
          {contactSelected && <Contact />}
        </div>
      </div>
    </div>

  );
}

ReactGA.initialize('UA-99996165-2', []);
ReactGA.pageview(window.location.pathname);
export default App;
