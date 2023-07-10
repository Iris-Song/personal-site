import React from 'react';
import PropTypes from 'prop-types';

const Credential = ({ data }) => (
  <article className="bold-h4-container">
    <header>
      <h4>{data.title}</h4>
      <p>{data.agency}, {data.year}</p>
    </header>
  </article>
);

Credential.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    agency: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
  }).isRequired,
};

export default Credential;
