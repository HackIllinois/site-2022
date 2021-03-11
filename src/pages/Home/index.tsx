import React from 'react';

import Hero from './Hero';
import EventInfo from './EventInfo';

import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <div className={styles.gradient}>
      <EventInfo />
    </div>
  </div>
);

export default Home;
