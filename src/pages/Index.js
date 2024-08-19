import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Ziming Song's personal website. "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About This Website</Link></h2>
          <p>
            Get to know me quickly.
          </p>
        </div>
      </header>
      <p> Welcome to {' Ziming\'s'} website.
      </p>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
