import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Props = {
  date: number,
  setDate: React.Dispatch<React.SetStateAction<number>>,
  width: number
};

const startDate = new Date('February 25, 2022');
const endDate = new Date('February 27, 2022');

const firstDayOfMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
const lastDayOfMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

const WIDTH_BREAKPOINT = 912;

const Days = ({ date, setDate, width }: Props): JSX.Element => {
  const [shouldMinify, setShouldMinify] = useState(width <= WIDTH_BREAKPOINT);
  useEffect(() => setShouldMinify(width <= WIDTH_BREAKPOINT), [width]);

  const changeDate = (d: number) => {
    if (d >= startDate.getDate() && d <= endDate.getDate()) setDate(d);
  };

  const daysInMonth = [];
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    daysInMonth.push(<td className={styles.empty} key={`Blank ${i}`} />);
  }

  for (let d = 1; d <= lastDayOfMonth.getDate(); d++) {
    const currentDay = (d === date);
    const activeDay = (d >= startDate.getDate() && d <= endDate.getDate());
    daysInMonth.push(
      <td
        className={clsx(styles.calendarDay, currentDay && styles.selectedDay, activeDay && styles.activeDay)}
        key={`Day ${d}`}
        data-active={activeDay && !currentDay ? 'yes' : 'no'}
      >
        <button className={styles.dayButton} onClick={() => changeDate(d)} disabled={!activeDay}>{d}</button>
      </td>,
    );
  }

  const rows: JSX.Element[][] = [];
  let cells: JSX.Element[] = [];

  daysInMonth.forEach((day, i) => {
    cells.push(day);
    if (cells.length === 7 || i === daysInMonth.length - 1) {
      rows.push(cells);
      cells = [];
    }
  });

  const containsDate = (row: JSX.Element[], targetDate: Date) => (
    row.some((cell) => cell.key === `Day ${targetDate.getDate()}`)
  );

  return (
    <tbody>
      {rows.map((row, i) => {
        if (!shouldMinify || containsDate(row, startDate) || containsDate(row, endDate)) {
          // array should be constant so
          // eslint-disable-next-line react/no-array-index-key
          return <tr key={`Week ${i}`}>{row}</tr>;
        }
        return null;
      })}
    </tbody>
  );
};

export default Days;
