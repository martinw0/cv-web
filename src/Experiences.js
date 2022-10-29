import React, {useState} from 'react';
import pathMobile from './images/path_mobile.svg';
import './Experiences.css';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

function Experiences() {
  const [stepSelected, setStepSelected] = useState(1);
  const { t } = useTranslation();
  return(
    <div className='content experiences'>
      <h2>{t("experiences")}</h2>
      <div className={'img-container step' + stepSelected}>
        <img src={pathMobile} alt="Footprint path" />
      </div>
      <div class="selector">
          <div class="line"></div>
          <div className={'circle ' + (stepSelected===1 ? 'active' : null)}></div>
          <div className={'circle ' + (stepSelected===2 ? 'active' : null)}></div>
          <div className={'circle ' + (stepSelected===3 ? 'active' : null)}></div>
      </div>
      <div className='buttons'>
        <button onClick={() => stepSelected===1 ? null : setStepSelected(stepSelected-1)}>{t("previous")}</button>
        <button onClick={() => stepSelected===3 ? null : setStepSelected(stepSelected+1)}>{t("next")}</button>
      </div>
      <Paragraph step={stepSelected} />
      <div className='card'>
        <h3>{t("database_skills")}</h3>
        <div className='graph'>
          <div className='skill mysql'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>MySQL</p>
          </div>
          <div className='skill postgresql'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>PostgreSQL</p>
          </div>
          <div className='skill mongodb'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>MongoDB</p>
          </div>
        </div>
      </div>
      <div className='card'>
        <h3>{t("web_skills")}</h3>

        <div className='graph'>
          <div className='skill html'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>HTML</p>
          </div>
          <div className='skill css'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>CSS</p>
          </div>
          <div className='skill js'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>JS</p>
          </div>
          <div className='skill sass'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>SASS</p>
          </div>
          <div className='break'></div>
          <div className='skill react'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>React</p>
          </div>
          <div className='skill prestashop'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>Prestashop</p>
          </div>
          <div className='skill wordpress'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>Wordpress</p>
          </div>
        </div>
      </div>
      <div className='card'>
        <h3>{t("system_skills")}</h3>
        <div className='graph'>
          <div className='skill linux'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>Linux</p>
          </div>
          <div className='skill vmware'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>VMWare</p>
          </div>
          <div className='skill vagrant'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>Vagrant</p>
          </div>
          <div className='break'></div>
          <div className='skill ansible'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>Ansible</p>
          </div>
          <div className='skill molecule'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>Molecule</p>
          </div>
          <div className='skill python'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>Python</p>
          </div>
          <div className='break'></div>
          <div className='skill inspec'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>Inspec</p>
          </div>
          <div className='skill gitlab'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>Git CI/CD</p>
          </div>
          <div className='skill rpm'>
            <div className='bar'>
              <div className='gauge-bg'></div>
              <div className='gauge'></div>
            </div>
            <p>RPM</p>
          </div>
        </div>
      </div>
    </div>
  )
}


function Paragraph(props) {
  if(props.step===1) {
      return(
        <p>
          {t("paragraph_exp_1_one")}<br />
          <br />
          {t("paragraph_exp_1_two")}<br />
        </p>
      )
  }
  else if(props.step===2) {
      return(
          <p>
            {t("paragraph_exp_2_one")}<br />
            {t("paragraph_exp_2_two")}<br />
            <br />
            {t("paragraph_exp_2_three")}<br />
          </p>
      )
  }
  else if(props.step===3) {
      return(
          <p>
            {t("paragraph_exp_3_one")}<br />
            <br />
            {t("paragraph_exp_3_two")}<br />
            {t("paragraph_exp_3_three")}<br />
            <br />
            {t("paragraph_exp_3_four")}<br />
          </p>
      )
  }
  else {
      return <p>Content not found</p>
  }
}

export default Experiences;