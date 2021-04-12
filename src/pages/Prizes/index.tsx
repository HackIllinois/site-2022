import React from 'react';
import clsx from 'clsx';

import LEFT_TREES from 'assets/prizes/left_trees2.svg';
import RIGHT_TREES from 'assets/prizes/right_trees.svg';
import CENTER_BUSHES from 'assets/prizes/center_bushes.svg';
import LEFT_BUSHES from 'assets/prizes/left_bushes.svg';
import MOUNTAINS from 'assets/prizes/mountains.svg';
import HILLS from 'assets/prizes/hills.svg';
import HILLS2 from 'assets/prizes/hills2.svg';
import STARS from 'assets/prizes/stars.svg';
import MOON from 'assets/prizes/moon.svg';
import CAR from 'assets/prizes/car.svg';
import APP_LOGO from 'assets/app_logo.png';
import NavBar from 'components/NavBar';

import styles from './styles.module.scss';
import categories from './prizes.json';
import winners from './winners.json';
import PrizeIcon from './PrizeIcon';

type Prize = Partial<{
  name: string;
  description: string;
  value: number;
  valueDetails: string;
  dummy: boolean;
}>;

const Prizes = (): JSX.Element => (
  <div className={styles.prizes}>
    <NavBar showHome />

    <div className={styles.background}>
      <div className={styles.topSection} style={{ backgroundImage: `url(${STARS})` }}>
        <img className={styles.moon} src={MOON} alt="" />
        <img className={styles.hills2} src={HILLS2} alt="" />
        <img className={styles.mountains} src={MOUNTAINS} alt="" />
        <img className={styles.leftTrees} src={LEFT_TREES} alt="" />
        <img className={styles.rightTrees} src={RIGHT_TREES} alt="" />
        <img className={styles.centerBushes} src={CENTER_BUSHES} alt="" />
        <img className={styles.leftBushes} src={LEFT_BUSHES} alt="" />
        <img className={styles.hills} src={HILLS} alt="" />
        <img className={styles.car} src={CAR} alt="" />
      </div>
      <div className={styles.solid} />
      <div className={styles.gradient} />
    </div>

    <div className={styles.content}>
      <div className={styles.winners}>
        <div className={styles.container}>
          <h2>Congratulations!</h2>
          <div className={styles.winnerGrid}>
            {winners.map(({ image, prizeName, projectName, teamName, dummy }) => (
              <div className={clsx(styles.winner, dummy && styles.dummy)}>
                <img className={styles.projectPreview} src={image || APP_LOGO} alt="" />
                <div className={styles.text}>
                  <h3 className={styles.prizeName}>{prizeName || 'Prize Name'}</h3>
                  <h4 className={styles.team}>{teamName || 'Team Name'}</h4>
                  <p className={styles.project}>{projectName || 'Project Name'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {categories.map(({ title, prizes, lightColor, darkColor, hideTitle }) => (
        <div className={styles.category}>
          <h2 className={clsx(styles.title, hideTitle && styles.hide)}>{title}</h2>

          <div className={styles.prizesContainer}>
            {(prizes as Prize[]).map(({ name, description, value, valueDetails, dummy }) => (
              <div className={clsx(styles.prize, dummy && styles.dummy)}>
                <PrizeIcon className={clsx(styles.prizeIcon, styles.light)} color={lightColor} />
                <PrizeIcon className={clsx(styles.prizeIcon, styles.dark)} color={darkColor} />
                <h3 className={styles.name}>{name}</h3>
                {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
                <div className={styles.spacer} />
                <h4 className={styles.value}>${value}</h4>
                {valueDetails && <span className={styles.valueDetails} dangerouslySetInnerHTML={{ __html: valueDetails }} />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Prizes;
