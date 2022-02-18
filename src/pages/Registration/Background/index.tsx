import React from 'react';

import KITCHEN from 'assets/registration/kitchen_background.svg';
import styles from './styles.module.scss';

const Background: React.FC = () => (
  <div className={styles.background}>
    <div className={styles.kitchen} style={{ backgroundImage: `url("${KITCHEN}")` }} />
  </div>
);

export default Background;
