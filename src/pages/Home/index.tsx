import React from 'react';

import Hero from './Hero';
import EventInfo from './EventInfo';
import Sponsors from './Sponsors';
// import Speakers from './Speakers';
// import OurTeam from './OurTeam';
import Footer from './Footer';

import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <EventInfo />
    {/* <Speakers /> */}
    {/* <OurTeam /> */}
    <Sponsors />
    <Footer />
  </div>
);

export default Home;
