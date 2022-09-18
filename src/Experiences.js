import React, {useState} from 'react';
import pathMobile from './images/path_mobile.svg';
import './Experiences.css';

function Experiences() {
  const [stepSelected, setStepSelected] = useState(1);
  return(
    <div className='content experiences'>
      <h2>Experiences</h2>
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
        <button onClick={() => stepSelected===1 ? null : setStepSelected(stepSelected-1)}>Previous</button>
        <button onClick={() => stepSelected===3 ? null : setStepSelected(stepSelected+1)}>Next</button>
      </div>
      <Paragraph step={stepSelected} />
      <div className='card'>
        <h3>Database skills</h3>
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
        <h3>Web skills</h3>

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
        <h3>System skills</h3>
      </div>
    </div>
  )
}


function Paragraph(props) {
  if(props.step===1) {
      return(
        <p>
          After high school degree, I went to Arras (France) to an engineer school: cesi. I studied IT for three years, after I chose to specified myself in the field of “system and network”. Finally, after two years, I was gradated and got the master’s degree.<br />
          <br />
          During my last year at school, I did an internship of 6 months at Worldline in a DBA (Data Base Administrator) team.  The internship goal was to create a new database offer: a PaaS for MySQL. To reach the target, I created an automated process that build a VM and install a MySQL server on it.  Finally, the result was: a win of time and reactivity.<br />
        </p>
      )
  }
  else if(props.step===2) {
      return(
          <p>
            Next to my internship, I was hired as a DBA in the same team (august 2019). At this step, I was responsible of the databases of 3 customers projects. Thanks to this, I improved a lot my MySQL skills. It gives me also a clear visibility on production services. The first part of my time was dedicated to these projects and the other part was assigned to automation projects with Ansible. The goal was to standardise and industrialise our DBMS installations.<br />
            Next, when I was comfortable with that, I was asked to learn Postgres. So, I got some Postgres databases to manage.  In the same time, after the working day, during my personal time I studied MongoDB administration.<br />
            <br />
            After winning some skills, I got the responsibility to tutor an intern. It happened well and I liked that. So, I became the tutor of others interns and this year (2022) I manage 3 interns. I like to learn to the others and seeing them progressing and it learns me how to manage people and projects.<br />
          </p>
      )
  }
  else if(props.step===3) {
      return(
          <p>
            Now (August 2022), I’m wondering what I will do next.<br />
            <br />
            Between 6 and 12 months ago, I began to learn web development and web design. In facts, for few years I want to create my own society.<br />
            I also have good knowledges in the system field, especially DevOps and I’m very interested in the cloud.<br />
            <br />
            Don’t hesitate to contact me if you want to work with me!!<br />
          </p>
      )
  }
  else {
      return <p>Content not found</p>
  }
}

export default Experiences;