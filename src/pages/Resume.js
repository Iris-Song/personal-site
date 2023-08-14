import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import Certifications from '../components/Resume/Certifications';
import Scholarship from '../components/Resume/Scholarship';
// import Publications from '../components/Resume/Publications';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import certifications from '../data/resume/certifications';
import scholarship from '../data/resume/scholarship';
// import publications from '../data/resume/publications';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Experience: () => <Experience data={work} />,
  Education: () => <Education data={degrees} />,
  Certifications: () => <Certifications data={certifications} />,
  Scholarship: () => <Scholarship data={scholarship} />,
  // Publications: () => <Publications data={publications} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Ilan Grapel's Resume, with experiences in teaching and the law."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec, index, array) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}{index !== array.length - 1 && '\u00A0\u00A0~'}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
