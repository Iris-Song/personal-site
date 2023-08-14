import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/mepic.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ziming Song</h2>
        <p><a href="mailto:a1158288818@icloud.com">a1158288818@icloud.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ziming. I am a junior developer,
        <a href="https://engineering.nyu.edu/academics/programs/computer-science-ms"> NYU MSCS</a> graduate,
        and <a href="https://cs.tongji.edu.cn/main.htm">Tongji University</a> Alumni.
        Previously, I was an intern
        at <a href="https://www.microsoft.com/">Microsoft</a> and <a href="https://www.nio.com/">NIO</a>.
        I enjoy coding and solving actuarial problems.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />

    </section>
  </section>
);

export default SideBar;
