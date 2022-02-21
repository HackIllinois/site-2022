import React from 'react';

import STARS from 'assets/schedule/stars.svg';
import LEFT_TREES from 'assets/schedule/left_trees.svg';
import RIGHT_TREES from 'assets/schedule/right_trees.svg';
import FRONT_TREE from 'assets/schedule/front_tree.svg';
import styles from './styles.module.scss';

const Background: React.FC = () => (
  <div className={styles.background}>
    <div className={styles.stars} style={{ backgroundImage: `url("${STARS}")` }} />
    <div className={styles.leftTrees} style={{ backgroundImage: `url("${LEFT_TREES}")` }} />
    <div className={styles.rightTrees} style={{ backgroundImage: `url("${RIGHT_TREES}")` }} />
    <div className={styles.frontTree} style={{ backgroundImage: `url("${FRONT_TREE}")` }} />
  </div>
);

export default Background;
