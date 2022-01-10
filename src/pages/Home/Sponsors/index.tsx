import React from 'react';

import MENU from 'assets/home/sponsors/menu.svg';
import IMC from 'assets/home/sponsors/IMC.svg';

import styles from './styles.module.scss';

const Sponsors = (): JSX.Element => (
  <section className={styles.sponsors}>
    <div className={styles.menuWrapper}>
      <img className={styles.menu} src={MENU} alt="" />
      <h2 className={styles.ourSponsors}>Our Sponsors</h2>
      <div className={styles.menuContent}>
        <a href="https://www.imc.com/"><img className={styles.imc} src={IMC} alt="IMC Logo" /></a>
        <p className={`${styles.interested} ${styles.imageText}`}>Interested to sponsor HackIllinois 2022,<br />Email us at <a href="mailto:sponsor@hackillinois.org">sponsor@hackillinois.org</a></p>
      </div>
    </div>
  </section>
);

export default Sponsors;
