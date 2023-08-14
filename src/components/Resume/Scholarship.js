import React from 'react';
import PropTypes from 'prop-types';

import Credential from './Certification/Credential';

const Certifications = ({ data }) => (

  <div className="education">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Scholarship</h3>
    </div>
    {data.map((cert) => (
      <Credential
        data={cert}
      />
    ))}
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    agency: PropTypes.string,
    year: PropTypes.string,
    field: PropTypes.number,
  })),
};

Certifications.defaultProps = {
  data: [],
};

export default Certifications;
