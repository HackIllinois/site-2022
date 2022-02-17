import React from 'react';

import DISPLAY_HALF from 'assets/schedule/display_half.svg';
import DISPLAY_FULL from 'assets/schedule/display_full.svg';
import SHELF from 'assets/schedule/shelf.svg';
import styles from './styles.module.scss';

const Background: React.FC = () => (
  <div className={styles.background}>
    <div className={styles.wall} />
    <div className={styles.floor_separator} />
    <img src={DISPLAY_HALF} alt="Pastry display" className={styles.display_half} />
    <img src={DISPLAY_FULL} alt="Pastry display" className={styles.display_full} />
    <img src={SHELF} alt="Shelf" className={styles.shelf} />
  </div>
);

export default Background;
