import React from 'react';

import Hero from './Hero';
import EventInfo from './EventInfo';

import styles from './styles.module.scss';
import FAQ from './FAQ';

const Home: React.FC = () => (
  <div className={styles.home}>
    <div className={styles.gradient} />
    {/* Make sure all following sections have position: relative to ensure gradient goes under them */}
    <Hero />
    <EventInfo />
    <FAQ />
  </div>
);

export default Home;
