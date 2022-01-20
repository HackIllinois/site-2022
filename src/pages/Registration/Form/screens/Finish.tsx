import React from 'react';
import clsx from 'clsx';

import LOGO_LARGE from 'assets/registration/finishLogo.svg';
import styles from './styles.module.scss';

const Finish = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.finish)}>
    <a className={styles.logo} href="/">
      <img src={LOGO_LARGE} alt="HackIllinois" />
    </a>

    <p className={styles.text}>Thank you for registering for HackIllinois 2022! Be sure to follow our <span>instagram (<a href="https://www.instagram.com/hackillinois/" target="_blank" rel="noreferrer"><span>@hackillinois</span></a>)</span> and our <span>twitter (<a href="https://twitter.com/hackillinois/" target="_blank" rel="noreferrer"><span>@hackillinois</span></a>)</span>. We will be posting live updates during the event that you won’t want to miss!</p>
  </div>
);

export default Finish;
