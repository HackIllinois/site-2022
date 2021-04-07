import React from 'react';
import clsx from 'clsx';

import LEFT_TREES from 'assets/home/sponsors/left_trees.svg';
import RIGHT_TREES from 'assets/home/sponsors/right_trees.svg';
import BOTTOM_TREES from 'assets/home/sponsors/bottom_trees.svg';

import styles from './styles.module.scss';
import sponsors from './sponsors.json';

const Sponsors = (): JSX.Element => (
  <div className={styles.sponsors}>
    <img className={styles.leftTrees} src={LEFT_TREES} alt="" />
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
    ))}
  </div>
);

export default Sponsors;
