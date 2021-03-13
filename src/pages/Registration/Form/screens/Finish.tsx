import React from 'react';
import clsx from 'clsx';

import LOGO_LARGE from 'assets/logo_large.svg';
import styles from './styles.module.scss';

const Finish = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.finish)}>
    <a className={styles.logo} href="/">
      <img src={LOGO_LARGE} alt="HackIllinois" />
    </a>

    <p className={styles.text}>Thank you for registering for HackIllinois 2021! Be sure to follow our instagram (<a href="https://www.instagram.com/hackillinois/" target="_blank" rel="noreferrer">@hackillinois</a>) and our twitter (<a href="https://twitter.com/hackillinois/" target="_blank" rel="noreferrer">@hackillinois</a>). We will be posting live updates during the event that you won’t want to miss!</p>
  </div>
);

export default Finish;
