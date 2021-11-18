import React from 'react';
import clsx from 'clsx';
// import useWindowSize from 'util/useWindowSize';

import styles from './styles.module.scss';

type Props = {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>,
  formIndex: number,
};

const lights: [name: string, cx: number, cy: number, r: number, textx: number][] = [
  ['Welcome', 1639.5, 120, 18, 1602.5],
  ['Personal Info', 1817, 120, 18, 1760],
  ['Race Demographics', 1995, 120, 18, 1915],
  ['Education', 2276.5, 120, 18, 2236.5],
  ['Experience', 2496.5, 120, 18, 2454.5],
  ['Finish', 2705.5, 120, 18, 2679.5],
];

const finishScreenIndex = 5;

const Fixtures = ({ setFormIndex, formIndex }: Props): JSX.Element => {
  // const [, scx, scy, sr] = lights[formIndex];

  // we don't want the light for the Finish page to be clickable, and if we're on the Finish page nothing should be clickable
  const isDisabled = (i: number) => (i === finishScreenIndex) || (formIndex === finishScreenIndex);

  // const { width, height } = useWindowSize();

  return (
    <div>
      <svg width="4321" height="113" viewBox="0 0 4321 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.fixtures}>
        {lights.map(([name, cx, cy, r, textx], i) => (
          <React.Fragment key={name}>
            <g className={clsx(styles.lightGroup, isDisabled(i) && styles.disabled)} onClick={() => !isDisabled(i) && setFormIndex(i)}>
              <circle
                // style={{ position: 'absolute', left: '100' }}
                cx={cx}
                cy="120%"
                r={r}
                fill={i === formIndex ? '#FBB626' : '#85692F'}
                stroke="black"
                strokeWidth="2.25px"
              />
              <text className={styles.text} style={{ '--length': name.length } as any} x={textx} y="185" fill="black">{name}</text>
            </g>

            {i === formIndex && (
              <g filter="url(#filter0_f)">
                <circle cx={cx} cy={cy} r={r} fill="#FED684" />
              </g>
            )}
          </React.Fragment>
        ))}

        {/* <defs>
          <filter id="filter0_f" x={scx - (sr + 15)} y={scy - (sr + 15)} width={2 * sr + 30} height={2 * sr + 30} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur" />
          </filter>
        </defs> */}
      </svg>
    </div>
  );
};

export default Fixtures;
