import React from 'react';
import { motion } from 'framer-motion';
import PulsingButton from './components/PulsingButton';
import BouncingLoader from './components/BouncingLoader';

const App = () => {
  return (
    <div>
      {/* <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        // transition={{ delay: 2 }}
        transition={{ duration: 5, ease: 'linear' }}
      /> */}
      {/* <motion.div
        className="box"
        animate={{
          rotateX: [100, 200, 100, 50, 200, 100, 50, 0],
          scale: [1, 2, 3, 2, 4, 2, 1],
          rotate: [0, 75, 120, 0, 60, 55],
          borderRadius: ['20%', '50%', '20%', '60%', '20%'],
        }}
        transition={{ duration: 5 }}
      /> */}
      <PulsingButton />
      <BouncingLoader />
    </div>
  );
};

export default App;
