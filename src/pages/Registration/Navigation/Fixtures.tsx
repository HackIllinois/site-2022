import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Props = {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>,
  formIndex: number,
};

const lights: [name: string, cx: number, cy: number, r: number, textx: number][] = [
  ['Welcome', 1572.5, 68, 17.5, 1537.5],
  ['Personal Info', 1796.5, 62, 13.5, 1744.5],
  ['Race Demographics', 2016.5, 70, 15.5, 1934.5],
  ['Education', 2276.5, 68, 17.5, 2236.5],
  ['Experience', 2496.5, 50, 13.5, 2454.5],
  ['Finish', 2705.5, 76, 15.5, 2682.5],
];

const finishScreenIndex = 5;

const Fixtures = ({ setFormIndex, formIndex }: Props): JSX.Element => {
  const [, scx, scy, sr] = lights[formIndex];

  // we don't want the light for the Finish page to be clickable, and if we're on the Finish page nothing should be clickable
  const isDisabled = (i: number) => (i === finishScreenIndex) || (formIndex === finishScreenIndex);

  return (
    <div>
      <svg width="4321" height="113" viewBox="0 0 4321 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.fixtures}>
        <path d="M1441 23C1482 33.5 1492.5 50.317 1516 58.5C1572 78 1574 66 1681.5 64.5C1789 63 1866 42.5 1915 42.5C1964 42.5 2027.81 76.3327 2095 83C2160.5 89.5 2279 70.9999 2340.5 52.5C2398.06 35.1863 2472 31.9999 2552.5 52.5C2633 73 2826 83 2881.5 64.5" stroke="#6A6A6A" strokeWidth="5" />
        {lights.map(([name, cx, cy, r, textx], i) => (
          <React.Fragment key={name}>
            <g className={clsx(styles.lightGroup, isDisabled(i) && styles.disabled)} onClick={() => !isDisabled(i) && setFormIndex(i)}>
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={i === formIndex ? '#FBB626' : '#85692F'}
              />
              <text className={styles.text} style={{ '--length': name.length } as any} x={textx} y="112" fill="white">{name}</text>
            </g>

            {i === formIndex && (
              <g filter="url(#filter0_f)">
                <circle cx={cx} cy={cy} r={r} fill="#FED684" />
              </g>
            )}
          </React.Fragment>
        ))}

        <path d="M2879 65.3286C2920 54.8286 2930.5 38.0116 2954 29.8286C3010 10.3286 3012 22.3286 3119.5 23.8286C3227 25.3286 3304 45.8286 3353 45.8286C3402 45.8286 3465.81 11.996 3533 5.32862C3598.5 -1.17134 3717 17.3287 3778.5 35.8286C3836.06 53.1423 3910 56.3287 3990.5 35.8286C4071 15.3286 4264 5.32862 4319.5 23.8286" stroke="#6A6A6A" strokeWidth="5" />
        <path d="M1 64.3286C42 53.8286 52.5 37.0116 76 28.8286C132 9.32861 134 21.3286 241.5 22.8286C349 24.3286 426 44.8286 475 44.8286C524 44.8286 587.813 10.996 655 4.32862C720.5 -2.17134 839 16.3287 900.5 34.8286C958.056 52.1423 1032 55.3287 1112.5 34.8286C1193 14.3286 1386 4.32862 1441.5 22.8286" stroke="#6A6A6A" strokeWidth="5" />

        <defs>
          <filter id="filter0_f" x={scx - (sr + 15)} y={scy - (sr + 15)} width={2 * sr + 30} height={2 * sr + 30} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Fixtures;
