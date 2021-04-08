import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Props = {
  date: number,
  setDate: React.Dispatch<React.SetStateAction<number>>,
  width: number
};

const startDate = 9;
const endDate = 12;

const Days = ({ date, setDate, width }: Props): JSX.Element => {
  const [numOfWeeks, setNumOfWeeks] = useState(width > 950 ? 5 : 2);

  useEffect(() => setNumOfWeeks(width > 950 ? 5 : 2), [width]);

  const changeDate = (d: number) => {
    if (d >= startDate && d <= endDate) setDate(d);
  };

  const daysInMonth = [];
  for (let i = 0; i < 4; i++) {
    daysInMonth.push(<td className={styles.empty} key={`startblank${i}`} />);
  }
  for (let d = 1; d < 31; d++) {
    const currentDay = (d === date);
    const activeDay = (d >= startDate && d <= endDate);
    daysInMonth.push(
      <td
        className={clsx(styles.calendarDay, currentDay && styles.selectedDay, activeDay && styles.activeDay)}
        key={d}
        data-active={activeDay && !currentDay ? 'yes' : 'no'}
      >
        <button className={styles.dayButton} onClick={() => changeDate(d)} disabled={!activeDay}>{d}</button>
      </td>,
    );
  }
  daysInMonth.push(<td className={styles.empty} key="endblank" />);

  const rows: JSX.Element[][] = [];
  let cells: JSX.Element[] = [];
  daysInMonth.forEach((day, i) => {
    if (i % 7 !== 0) {
      cells.push(day);
      if (i === daysInMonth.length - 1) {
        rows.push(cells);
      }
    } else {
      rows.push(cells);
      cells = [];
      cells.push(day);
    }
  });

  return (
    <tbody>
      {rows.map((d, i) => {
        if (i > 1 && i <= numOfWeeks + 1) {
          // array should be constant so
          // eslint-disable-next-line react/no-array-index-key
          return <tr key={`daysinmonth${i}`}>{d}</tr>;
        }
        return null;
      })}
    </tbody>
  );
};

export default Days;
