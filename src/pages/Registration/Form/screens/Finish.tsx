import React from 'react';
import clsx from 'clsx';

import Button from 'components/form/Button';
import LOGO_LARGE from 'assets/registration/finishLogo.svg';
import styles from './styles.module.scss';

const Finish = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.finish)}>
    <a className={styles.logo} href="/">
      <img src={LOGO_LARGE} alt="HackIllinois" />
    </a>

    <p className={styles.text}>Thank you for registering for HackIllinois 2022! Be sure to follow our <a href="https://www.instagram.com/hackillinois/" target="_blank" rel="noreferrer">instagram (@hackillinois)</a> and our <a href="https://twitter.com/hackillinois/" target="_blank" rel="noreferrer">twitter (@hackillinois)</a>. We will be posting live updates during the event that you won’t want to miss!</p>

    <div className={styles.homeButton}>
      <Button onClick={() => { window.location.href = '/'; }}>Back Home</Button>
    </div>
  </div>
);

export default Finish;
