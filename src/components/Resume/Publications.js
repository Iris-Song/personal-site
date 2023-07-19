import React from 'react';
import PropTypes from 'prop-types';

import Publication from './Citation/Publication';

const Publications = ({ data }) => (

  <div className="education">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Publication</h3>
    </div>
    {data.map((citation) => (
      <Publication
        data={citation}
      />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    agency: PropTypes.string,
    year: PropTypes.string,
    field: PropTypes.number,
  })),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
