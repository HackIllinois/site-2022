import React from 'react';

import MENU from 'assets/home/sponsors/menu.svg';

import styles from './styles.module.scss';

const Sponsors = (): JSX.Element => (
  <section className={styles.sponsors}>
    <div className={styles.menuWrapper}>
      <img className={styles.menu} src={MENU} alt="" />
      <h2 className={`${styles.ourSponsors} ${styles.imageText}`}>Our Sponsors</h2>
      <p className={`${styles.interested} ${styles.imageText}`}>Interested to sponsor HackIllinois 2022,<br />Email us at <a href="mailto:sponsor@hackillinois.org">sponsor@hackillinois.org</a></p>
    </div>
    {/* <img className={styles.leftTrees} src={LEFT_TREES} alt="" />
    <img className={styles.rightTrees} src={RIGHT_TREES} alt="" />
    <img className={styles.bottomTrees} src={BOTTOM_TREES} alt="" />

    <h2 className={styles.title}>Sponsors</h2>

    {sponsors.map((sponsorList, i) => (
      <div className={clsx(styles.sponsorSection, i === 0 && styles.first)}>
        {sponsorList.map(({ name, image, link }) => (
          <a href={link} className={styles.sponsor} style={{ backgroundImage: `url("/assets/sponsor_logos/${image}")` }} target="_blank" rel="noopener noreferrer">
            <span className={styles.srOnly}>{name}</span>
          </a>
        ))}
      </div>
    ))} */}
  </section>
);

export default Sponsors;
