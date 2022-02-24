import React, { useState } from 'react';

import CUPCAKE_STAND from 'assets/home/speakers/cupcake_stand.svg';
import CUPCAKE from 'assets/home/speakers/cupcake.svg';

import CAROUSEL_BUTTON_SELECTED from 'assets/home/speakers/carousel_button_selected.svg';
import CAROUSEL_BUTTON_UNSELECTED from 'assets/home/speakers/carousel_button_unselected.svg';

import speakerData from './speakerData';

import styles from './styles.module.scss';

const Speakers: React.FC = () => {
  const [speakerIndex, setSpeakerIndex] = useState(0);

  return (
    <section className={styles.speakers}>
      <div className={styles.cupcakeStandContainer}>
        <img className={styles.cupcakeStand} src={CUPCAKE_STAND} alt="" />
        <div className={styles.cupcakeStandContent}>
          <img className={styles.cupcake} src={CUPCAKE} alt="" />
          <div className={styles.cupcakeStandText}>
            <h2>{speakerData[speakerIndex].name}</h2>
            <h3>{speakerData[speakerIndex].infoAndPosition}</h3>
            <p>{speakerData[speakerIndex].description}</p>
          </div>
        </div>
        <div className={styles.carouselButtons}>
          {Array(speakerData.length).fill(0).map((_, i) => i).map((i) => (
            <img
              src={i == speakerIndex ? CAROUSEL_BUTTON_SELECTED : CAROUSEL_BUTTON_UNSELECTED}
              className={styles.carouselButton}
              onClick={() => setSpeakerIndex(i)}
            />
          ))}
          </div>
      </div>
    </section>
  );
};

export default Speakers;
