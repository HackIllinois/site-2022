import React, { useState } from 'react';

import useWindowSize from 'util/useWindowSize';
import NavBar from 'components/NavBar';
import Background from './Background';
import Calendar from './Calendar';
import Guide from './Guide';
import EventDisplay from './EventDisplay';

import styles from './styles.module.scss';

const eventDates = [9, 10, 11, 12];
let defaultDate = 9;
const today = new Date();
if (today.getFullYear() === 2021 && today.getMonth() === 3 && eventDates.includes(today.getDate())) {
  defaultDate = today.getDate();
}

const Schedule: React.FC = () => {
  const [date, setDate] = useState(defaultDate);
  const { width } = useWindowSize();

  return (
    <div className={styles.schedule}>
      <NavBar showHome />
      <Background />
      <div className={styles.flexRow}>
        <div className={styles.left}>
          <Calendar date={date} setDate={setDate} width={width} />
          <Guide />
        </div>
        <div className={styles.right}>
          <EventDisplay date={date} width={width}/>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
