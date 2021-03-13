import React, { useState } from 'react';

import Background from './Background';
import Navigation from './Navigation';
import Form from './Form';

import styles from './styles.module.scss';

const Registration: React.FC = () => {
  const [formIndex, setFormIndex] = useState(0);

  return (
    <div className={styles.registration}>
      <Background />
      <Navigation setFormIndex={setFormIndex} formIndex={formIndex} />
      <Form setFormIndex={setFormIndex} formIndex={formIndex} />
    </div>
  );
};

export default Registration;
