import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2001-02-03T08:00:00');
    setAge(Math.floor(((Date.now() - birthTime) / divisor)));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  // {
  //   key: 'countries',
  //   label: 'Countries Lived and Visited',
  //   value: 19,
  //   link:
  //     'https://www.google.com/maps/d/u/0/edit?mid=1fSC45JHuEUo_3wVEstEqgozxUZ8ZZ44&usp=sharing',
  // },
  {
    key: 'location',
    label: 'Current location',
    value: 'New York City',
  },
];

export default data;
