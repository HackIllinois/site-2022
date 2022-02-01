import React from 'react';

import CUPCAKE_STAND from 'assets/home/speakers/cupcake_stand.svg';
import CUPCAKE from 'assets/home/speakers/cupcake.svg';

import styles from './styles.module.scss';

const Speakers: React.FC = () => (
  <section className={styles.speakers}>
    <div className={styles.cupcakeStandContainer}>
      <img className={styles.cupcakeStand} src={CUPCAKE_STAND} alt="" />
      <div className={styles.cupcakeStandContent}>
        <img className={styles.cupcake} src={CUPCAKE} alt="" />
        <div className={styles.cupcakeStandText}>
          <h2>Speaker Name</h2>
          <h3>Speaker info & Position</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente quod laborum corporis est. Id ipsum dolore rem nobis sint ratione quia deserunt corrupti, rerum quasi ipsam at soluta quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Speakers;
