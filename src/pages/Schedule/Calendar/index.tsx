import React from 'react';

import Days from './Days';
import styles from './styles.module.scss';

type Props = {
  date: number,
  setDate: React.Dispatch<React.SetStateAction<number>>,
  width: number
};

const Calendar = (props: Props): JSX.Element => (
  <div className={styles.calendar}>
    <h1>April</h1>
    <table>
      <Days {...props} />
    </table>
  </div>
);

export default Calendar;
