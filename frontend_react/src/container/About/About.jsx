import React from 'react';
// import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';
// import { urlFor, client } from '../../client';
const About = () => {
  return (
    <>
      <div className="about-section-wrapper">
        <div className="about-content">
          <div className="about-header">
            About <span className="color">Me</span>
            <span className="header-caption">
              <span className="color"></span>
            </span>
          </div>
          <div className="about-main">
            <div className="first-paragraph">
              <span className="first-line">
                I&#39;m a FullStack Engineer with a passion for building
                <span className="color"> (JS-mainly)</span> based in Nigeria.{' '}
              </span>
              <br />
              <span className="second-line">
                I started my coding journey in 2018 after I left sec. school.
                I&#39;m currently a student at University of Lagos studying
                Electrical and Electronics Engineering.
                <br />
                Over the years I&#39;ve successfully developed custom solutions
                to solve challenges and engineered designs to meet predetermined
                functionality goals.
                <br />
                &mdash; Strengths: Debugging, learning new languages, testing.
                <br />
                &mdash; Weakness: writing plain CSS(pretty good using frameworks
                though).
                <br />
                Coding and Tech has been so fun as no day passes without
                learning new things or encountering a problem, well thanks to
                community as been so great in helping find solutions .
              </span>
              <div className="cv">
                <a
                  href="https://drive.google.com/file/d/1nOV7ZzXMiOgVEHNJKebfvAkdlNk1YAmx/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button>Download CV</button>
                </a>
              </div>
            </div>
            <div className="about-img">
              <div className="img-container">
                <img
                  src={images.bitmoji}
                  placeholder="blur"
                  alt="eniola-osabiya"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="services-heading">
            <span className="color">My</span> Services
          </div>
          <div className="services-content-wrapper">
            <div className="service">
              <div className="service-img">
                <div className="img-container">
                  <img
                    src={images.debugSvgIcon}
                    width={80}
                    height={80}
                    alt="debugging-service"
                  />
                </div>
              </div>
              <div className="service-description">
                <h2>Debugging</h2>
                <p>
                  Debugging is the process of detecting and removing of existing
                  and potential errors (bugs) in a software code that can cause
                  it to behave unexpectedly or crash.
                </p>
              </div>
            </div>
            <div className="service">
              <div className="service-img">
                <div className="img-container">
                  <img
                    src={images.apiSvgIcon}
                    width={80}
                    height={80}
                    alt="api-development-service"
                  />
                </div>
              </div>
              <div className="service-description">
                <h2>API Development</h2>
                <p>
                  API (Application Programming Interface software) is a set of
                  instructions, standards or requirements that enables a
                  software or app to employ features/services of another app,
                </p>
              </div>
            </div>
            <div className="service">
              <div className="service-img">
                <div className="img-container">
                  <img
                    src={images.deploySvgIcon}
                    width={80}
                    height={80}
                    alt="deployment-service"
                  />
                </div>
              </div>
              <div className="service-description">
                <h2>Deployment</h2>
                <p>
                  Deploying projects/sites and apps to live servers using tools
                  like Docker, AWS, Heroku, Netlify, Vercel, Google Play Console
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skills-header">
            My <span className="color"> Skills</span>
          </div>
          <div className="skills-content">
            {/* <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner">HTML/CSS</div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '85%' }}>
                  85%
                </div>
              </div>
            </div> */}
            <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner">Working remotely</div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '90%' }}>
                  90%
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner">Time management</div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '92%' }}>
                  92%
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner">Working with team</div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '88%' }}>
                  88%
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner">Availaility</div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '86%' }}>
                  86%
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner">Learning Pace</div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '80%' }}>
                  80%
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner">Leardership</div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '60%' }}>
                  91%
                </div>
              </div>
            </div>
            {/* <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner"></div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '90%' }}>
                  90%
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner">Documentation</div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '87%' }}>
                  87%
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-text">
                <div className="skill-text-inner">Git / GitHub</div>
              </div>
              <div className="progress-wrapper">
                <div className="progress-inner" style={{ width: '97%' }}>
                  97%
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
