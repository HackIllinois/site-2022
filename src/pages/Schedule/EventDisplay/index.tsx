import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

import Events from './Events';
import Calendar from '../Calendar';

import styles from './styles.module.scss';

type Props = {
  defaultDate: number,
  width: number
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const timezone = DateTime.local().toFormat('ZZZZ', { locale: 'en-US' });
const timezoneText = <span className={styles.timezoneText} title="automagically set to your timezone :)">(All times are in {timezone})</span>;

const EventDisplay = ({ defaultDate, width }: Props): JSX.Element => {
  const [date, setDate] = useState(defaultDate);
  const [selectedNormal, setSelectedNormal] = useState(true);
  const [selectedAsync, setSelectedAsync] = useState(false);
  const d = new Date(`February ${date}, 2022`);
  const day = days[d.getDay()];

  const selectNormal = () => {
    setSelectedNormal(true);
    setSelectedAsync(false);
  };

  const selectAsync = () => {
    setSelectedNormal(false);
    setSelectedAsync(true);
  };

  useEffect(() => {
    setSelectedNormal(true);
    setSelectedAsync(false);
  }, []);

  return (
    <div className={styles.eventDisplay}>
      <div className={styles.buttonContainer}>
        <button className={selectedNormal ? styles.selectedButton : styles.unselectedButton} onClick={selectNormal}>Normal</button>
        <button className={selectedAsync ? styles.selectedButton : styles.unselectedButton} onClick={selectAsync}>Async</button>
      </div>
      <p className={styles.dayHeading}>February {date} - {day} {timezoneText}</p>
      <div className={styles.container}>
        <Calendar date={date} setDate={setDate} width={width} disableAsync={selectedAsync} />
        <Events date={date} setAsync={selectedAsync} />
      </div>
    </div>
  );
};

export default EventDisplay;
