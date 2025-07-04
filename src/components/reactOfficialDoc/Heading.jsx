import React, { useContext } from 'react';
import { LevelContext } from './LevelContext.jsx';

const Heading = ({ children }) => {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    case 7:
      return <h7>{children}</h7>;
    case 8:
      return <h8>{children}</h8>;
    case 9:
      return <h9>{children}</h9>;
    default:
      throw Error('Unknown level :' + level);
  }
};

export default Heading;
