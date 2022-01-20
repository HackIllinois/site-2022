import React from 'react';

import CUPCAKE_STAND from 'assets/home/speakers/cupcake_stand.svg';

import styles from './styles.module.scss';

const Speakers: React.FC = () => (
  <section className={styles.speakers}>
    <img className={styles.cupcakeStand} src={CUPCAKE_STAND} alt="" />
  </section>
);

export default Speakers;
