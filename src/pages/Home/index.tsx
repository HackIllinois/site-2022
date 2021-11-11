import React from 'react';

import Hero from './Hero';
import EventInfo from './EventInfo';
import Speakers from './Speakers';
import OurTeam from './OurTeam';
import Sponsors from './Sponsors';
// import FAQ from './FAQ';
// import Sponsors from './Sponsors';

import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <EventInfo />
    <Speakers />
    <OurTeam />
    <Sponsors />
    { /* Temporarily disable until content is ready
    <EventInfo />
    <FAQ />
    <Sponsors />
    */ }
    {/* <div className={styles.gradient} /> */}
  </div>
);

export default Home;
