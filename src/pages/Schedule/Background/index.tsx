import React from 'react';

import SCHEDULE_BG from 'assets/schedule/background.svg';
import styles from './styles.module.scss';

const Background: React.FC = () => (
  <div className={styles.background} style={{ backgroundImage: `url("${SCHEDULE_BG}")` }}>

  </div>
);

export default Background;
