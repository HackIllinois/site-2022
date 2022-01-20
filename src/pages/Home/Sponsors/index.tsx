import React from 'react';

import DISPLAY_CARD from 'assets/home/sponsors/display_card.svg';
import MENU_TOP from 'assets/home/sponsors/menu_top.svg';
import MENU_MIDDLE from 'assets/home/sponsors/menu_middle.svg';
import MENU_BOTTOM from 'assets/home/sponsors/menu_bottom.svg';
import TITLE from 'assets/home/sponsors/title.svg';

import { TITLE_SPONSORS, SPONSORS } from './sponsors';

import styles from './styles.module.scss';

const Sponsors = (): JSX.Element => (
  <section className={styles.sponsors}>
    <div className={styles.menuWrapper}>
      <img src={MENU_TOP} alt="" />
      <div className={styles.menuContent} style={{ backgroundImage: `url(${MENU_MIDDLE}` }}>
        <div className={styles.title}>
          <img src={TITLE} alt="" />
          <div className={styles.titleTextContainer}>
            <h2> Our Sponsors </h2>
          </div>
        </div>
        <p>
          Interested to sponsor HackIllinois 2022?<br />
          Email us at <a href="mailto:sponsor@hackillinois.org">sponsor@hackillinois.org</a>
        </p>
        <div className={styles.sponsorCards}>
          { TITLE_SPONSORS.map(({ name, image, link }) => (
            <div className={styles.titleSponsorCardContainer}>
              <img src={DISPLAY_CARD} alt="" className={styles.sponsorCard} />
              <a href={link}><img className={styles.sponsorLogo} src={`${process.env.PUBLIC_URL}/assets/sponsor_logos/${image}`} alt={name} /></a>
            </div>
          ))}

          { SPONSORS.map(({ name, image, link }) => (
            <div className={styles.sponsorCardContainer} key={name}>
              <img src={DISPLAY_CARD} alt="" className={styles.sponsorCard} />
              <a href={link}><img className={styles.sponsorLogo} src={`${process.env.PUBLIC_URL}/assets/sponsor_logos/${image}`} alt={name} /></a>
            </div>
          ))}
        </div>
      </div>
      <img src={MENU_BOTTOM} alt="" />
    </div>
  </section>
);

export default Sponsors;
