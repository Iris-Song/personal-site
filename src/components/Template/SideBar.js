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
        <h2>Ilan Grapel</h2>
        <p><a href="mailto:ilan.grapel@gmail.com">ilan.grapel@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ilan: math and computer science teacher, attorney, and former paratrooper.
        For my day job, I teach AP Calculus at <a href="https://seminolehs.scps.k12.fl.us/">Seminole High School</a>
        in Florida. Online, I teach IB and AP Computer Science. I hold degrees from
        <a href="https://law.emory.edu/">Emory University School of Law</a> and
        <a href="https://www.jhu.edu/">Johns Hopkins University. </a>
        To hone my math and computer science skills,
        I enjoy various coding projects and solving actuarial problems.
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
