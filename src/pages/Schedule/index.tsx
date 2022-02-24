import React from 'react';

import useWindowSize from 'util/useWindowSize';
import NavBar from 'components/NavBar';
import Background from './Background';
// import Guide from './Guide';
import EventDisplay from './EventDisplay';

import styles from './styles.module.scss';

const eventDates = [25, 26, 27];
let defaultDate = 25;
const today = new Date();
if (today.getFullYear() === 2022 && today.getMonth() === 1 && eventDates.includes(today.getDate())) {
  defaultDate = today.getDate();
}

const Schedule: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <div className={styles.schedule}>
      <NavBar showHome />
      <Background />
      <div className={styles.flexRow}>
        { /* <div className={styles.left}>
          <Guide />
        </div> */ }
        <div className={styles.right}>
          <EventDisplay defaultDate={defaultDate} width={width} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
