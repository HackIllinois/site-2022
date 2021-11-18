import React from 'react';

import Hero from './Hero';
import EventInfo from './EventInfo';
import Sponsors from './Sponsors';
import Speakers from './Speakers';
import OurTeam from './OurTeam';

import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <EventInfo />
    <Speakers />
    <OurTeam />
    <Sponsors />
  </div>
);

export default Home;
