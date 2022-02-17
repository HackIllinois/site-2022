import React from 'react';

import LOGO from 'assets/prizes/logo.svg';

import styles from './styles.module.scss';
import { trackPrizes } from './prizes';

const Prizes = (): JSX.Element => (
  <div className={styles.prizes}>
    <div className={styles.backgroundImage} />
    <img className={styles.logo} src={LOGO} alt="HackIllinois Logo" />
    <div className={styles.prizeList}>
      {trackPrizes.map((trackPrize) => (
        <div key={trackPrize.title} className={styles.prize}>
          {trackPrize.logo && <img src={`/assets/prizes/${trackPrize.logo}`} alt="Prize Logo" />}
          <h2>{trackPrize.title}</h2>
          {trackPrize.subtitle && <h3>({trackPrize.subtitle})</h3>}
          {trackPrize.subcategories.map((subCategory) => (
            <React.Fragment key={subCategory.title}>
              <h4>{subCategory.title}</h4>
              <p>{subCategory.prize}</p>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Prizes;
