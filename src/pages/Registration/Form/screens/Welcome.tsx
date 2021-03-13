import clsx from 'clsx';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './styles.module.scss';

const Welcome = (): JSX.Element => (
  <Scrollbars className={clsx(styles.screen, styles.welcome)} autoHide={false} renderView={(props) => <div className={styles.scrollbox} {...props} />}>
    <h1 className={styles.title}>Welcome!</h1>
    <p className={styles.text}>
      We’re excited to present HackIllinois 2021, our fully virtual hackathon held from April 9-12. Join us to work on projects, attend workshops on a variety of topics in tech, and participate in exciting challenges and mini-events throughout the duration of the Hackathon.
    </p>
    <p className={styles.text}>
      Held on Discord, we hope to create an immersive hub through which you can experience the Hackathon as a community, working with your team as well as alongside all other participants, staff, and mentors—all virtually.
    </p>
    <p className={styles.text}>
      Please fill out the following form to register for HackIllinois. We will use your email to send you additional information about our event in the coming weeks!
    </p>
    <p className={styles.text}>
      For more information, or if you have any questions, please visit our website (<a href="/">https://hackillinois.org</a>) or email us at <a href="mailto:contact@hackillinois.org">contact@hackillinois.org</a>.
    </p>
  </Scrollbars>
);

export default Welcome;
