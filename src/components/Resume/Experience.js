import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ data }) => {
  // Get unique categories
  const categories = [...new Set(data.map((job) => job.category))];

  return (
    <div className="experience">
      <div className="link-to" id="experience" />
      <div className="title">
        <h3>Career</h3>
      </div>
      {categories.map((category) => (
        <div key={category}>
          <h4 className="h4-background">{category}</h4> {/* Render category as a subsection */}
          {data
            .filter((job) => job.category === category)
            .map((job) => (
              <Job
                data={job}
                key={`${job.name}-${job.position}`}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    position: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
  })),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
