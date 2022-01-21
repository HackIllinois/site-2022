/* eslint-disable react/no-unescaped-entities */
import clsx from 'clsx';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './styles.module.scss';

const Welcome = (): JSX.Element => (
  <Scrollbars className={clsx(styles.screen, styles.welcome)} autoHide={false} renderView={(props) => <div className={styles.scrollbox} {...props} />}>
    <h1 className={styles.title}>Welcome!</h1>
    <p className={styles.text}>
      Apply to participate in <span>HackIllinois 2022</span>, UIUC's premiere annual hackathon! Our event will run fully virtually from <span>February 25th to 27th, 2022</span>. We have selected an online format for our event to remain in compliance with university COVID-19 guidelines and for the safety of all participants.
    </p>
    <p className={styles.text}>
      Applications will remain open until the beginning of HackIllinois 2022, <span>February 25th</span>. For more details, visit <a href="www.hackillinois.org"><span>www.hackillinois.org</span></a>.
    </p>
    <p className={styles.text}>
      Please feel free to reach out to <span>contact@hackillinois.org</span> with any questions or concerns. We look forward to reviewing your application!
    </p>
  </Scrollbars>
);

export default Welcome;
