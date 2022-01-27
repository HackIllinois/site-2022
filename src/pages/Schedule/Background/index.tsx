import React from 'react';

import SCHEDULE_BG from 'assets/schedule/background.svg';
// import DISPLAY from 'assets/schedule/display.svg';
import styles from './styles.module.scss';

const Background: React.FC = () => (
  <div className={styles.background} style={{ backgroundImage: `url("${SCHEDULE_BG}")` }}>
    {/* <img src={DISPLAY} alt="Pastry display" className={styles.display} /> */}
  </div>
);

export default Background;
