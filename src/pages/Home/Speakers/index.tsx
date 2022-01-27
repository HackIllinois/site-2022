import React from 'react';

import CUPCAKE_STAND from 'assets/home/speakers/cupcake_stand.svg';
import CUPCAKE from 'assets/home/speakers/cupcake.svg';

import styles from './styles.module.scss';

const Speakers: React.FC = () => (
  <section className={styles.speakers}>
    <div className={styles.cupcakeStandContainer}>
      <img className={styles.cupcakeStand} src={CUPCAKE_STAND} alt="" />
      <img className={styles.cupcake} src={CUPCAKE} alt="" />
    </div>
  </section>
);

export default Speakers;
