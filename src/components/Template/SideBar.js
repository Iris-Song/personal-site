import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ziming Song</h2>
        <p><a href="mailto:zimmingsong@icloud.com">zimmingsong@icloud.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ziming(子铭), a junior developer, a CS graduate student in {' '}
        <a href="https://engineering.nyu.edu/academics/programs/computer-science-ms">NYU</a>.
        Now I intern in <a href="https://www.tiktok.com/">TikTok</a>.
        Previously, I worked in {' '}
        <a href="https://www.microsoft.com/">Microsoft</a> and <a href="https://www.nio.com/">NIO</a>.
        I enjoy exploring the world and connecting people :)
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
