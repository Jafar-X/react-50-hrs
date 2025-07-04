import React from 'react';
import { LevelContext } from './LevelContext.jsx';

const Section = ({ level, children }) => {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
};

export default Section;
