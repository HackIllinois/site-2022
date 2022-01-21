/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';
import LIGHT from '../../../assets/registration/navigation/light.svg';
import LIGHT_ON from '../../../assets/registration/navigation/activatedLight.svg';

type Props = {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>,
  formIndex: number,
};

const lights: [name: string, cx: number, cy: number, r: number, textx: number][] = [
  ['Welcome', 1639.5, 120, 18, 1602.5],
  ['Personal Info', 1817, 120, 18, 1760],
  ['Demographics', 1995, 120, 18, 1915],
  ['Education', 2276.5, 120, 18, 2236.5],
  ['Experience', 2496.5, 120, 18, 2454.5],
  ['Event Questions', 2496.5, 120, 18, 2454.5],
  ['Finish', 2705.5, 120, 18, 2679.5],
];

const finishScreenIndex = 6;

const Fixtures = ({ setFormIndex, formIndex }: Props): JSX.Element => {
  // we don't want the light for the Finish page to be clickable, and if we're on the Finish page nothing should be clickable
  const isDisabled = (i: number) => (i === finishScreenIndex) || (formIndex === finishScreenIndex);

  return (
    <div className={styles.ovenLights}>
      {lights.map(([name], i) => (
        <div className={clsx(styles.lightGroup, isDisabled(i) && styles.disabled)} onClick={() => !isDisabled(i) && setFormIndex(i)}>
          {i === formIndex ? (
            <div className={styles.image}>
              <img className={styles.image} src={LIGHT_ON} alt="" />
            </div>
          ) : (
            <div className={styles.image}>
              <img src={LIGHT} alt="" />
            </div>
          )}
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Fixtures;
