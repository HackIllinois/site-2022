import React from 'react';

import DONUT_BOX from 'assets/home/our_team/donut_box.svg';

import styles from './styles.module.scss';

const OurTeam: React.FC = () => (
  <section className={styles.ourTeam}>
    <div className={styles.donutBoxWrapper}>
      <img className={styles.donutBox} src={DONUT_BOX} alt="" />
      <h2 className={`${styles.ourTeam} ${styles.imageText}`}>Our Team</h2>
    </div>
  </section>
);

export default OurTeam;
