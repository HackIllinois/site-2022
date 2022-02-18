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
    <p>February</p>
    <table>
      <Days {...props} />
    </table>
  </div>
);

export default Calendar;
