import React from 'react';

import SHELF from 'assets/discover/shelf.svg';
import DISPLAY from 'assets/discover/display.svg';
import BLACKBOARD from 'assets/discover/blackboard.svg';
import NEW_LOGO from 'assets/discover/new_logo.svg';
import BLACKBOARD_HOVER from 'assets/discover/blackboard-hover.svg';
import styles from './styles.module.scss';

const Discover: React.FC = () => (
  <div className={styles.discover}>
    <div className={styles.background}>
      <div className={styles.wall} />
      <div className={styles.floor_separator} />
      <img src={NEW_LOGO} alt="Logo" className={styles.logo} />
      <img src={SHELF} alt="Pastry shelf" className={styles.shelf} />
      <img src={DISPLAY} alt="Pastry display" className={styles.display} />
      <img src={BLACKBOARD} alt="Blackbnoard" className={styles.blackboard} />
      <a href="/schedule"><img src={BLACKBOARD_HOVER} alt="Blackboard hover" className={styles.blackboard_hover} /></a>

    </div>
  </div>
);

export default Discover;
