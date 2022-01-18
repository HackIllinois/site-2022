import React from 'react';

import MENU from 'assets/home/sponsors/menu.svg';
import DISPLAY_CARD from 'assets/home/sponsors/display_card.svg';
import { TITLE_SPONSORS, SPONSORS } from './sponsors';

import styles from './styles.module.scss';

const Sponsors = (): JSX.Element => (
  <section className={styles.sponsors}>
    <div className={styles.menuWrapper}>
      <img className={styles.menu} src={MENU} alt="" />
      <h2 className={styles.ourSponsors}>Our Sponsors</h2>
      <div className={styles.menuContent}>
        <p>Interested to sponsor HackIllinois 2022,<br />Email us at <a href="mailto:sponsor@hackillinois.org">sponsor@hackillinois.org</a></p>
        <div className={styles.sponsorCards}>
          { TITLE_SPONSORS.map(({ name, image, link }) => (
            <div className={styles.titleSponsorCardContainer}>
              <img src={DISPLAY_CARD} alt="" className={styles.sponsorCard} />
              <a href={link}><img className={styles.sponsorLogo} src={`${process.env.PUBLIC_URL}/assets/sponsor_logos/${image}`} alt={name} /></a>
            </div>
          ))}

          { SPONSORS.map(({ name, image, link }) => (
            <div className={styles.sponsorCardContainer}>
              <img src={DISPLAY_CARD} alt="" className={styles.sponsorCard} />
              <a href={link}><img className={styles.sponsorLogo} src={`${process.env.PUBLIC_URL}/assets/sponsor_logos/${image}`} alt={name} /></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Sponsors;
