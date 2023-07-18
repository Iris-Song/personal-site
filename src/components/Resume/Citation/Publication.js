import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
  <article>
    <header>
      <h4>{data.title}</h4>
      <p><span style={{ fontStyle: 'italic' }}>{data.authors.join(', ')}</span> ({data.publication}, {data.date})</p>
    </header>
  </article>
);

Publication.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    publication: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
