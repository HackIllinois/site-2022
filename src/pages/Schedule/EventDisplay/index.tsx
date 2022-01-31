import React, { useState } from 'react';
import { DateTime } from 'luxon';

import Events from './Events';
import Calendar from '../Calendar';

import styles from './styles.module.scss';

type Props = {
  date: number,
  width: number
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const timezone = DateTime.local().toFormat('ZZZZ', { locale: 'en-US' });
const timezoneText = <span className={styles.timezoneText} title="automagically set to your timezone :)">(All times are in {timezone})</span>;

// Calendar
const eventDates = [9, 10, 11, 12];
let defaultDate = 9;
const today = new Date();
if (today.getFullYear() === 2021 && today.getMonth() === 3 && eventDates.includes(today.getDate())) {
  defaultDate = today.getDate();
}

const EventDisplay = ({ date, width }: Props): JSX.Element => {
  const [cal_date, setDate] = useState(defaultDate);
  const d = new Date(`April ${date}, 2021`);
  const day = days[d.getDay()];

  return (
    <div className={styles.eventDisplay}>
      {width > 950 ? (
        <p className={styles.dayHeading}>April {date} - {day} {timezoneText}</p>
      ) : (
        <h1 className={styles.dayHeading}>April {date}<br />{timezoneText}</h1>
      )}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Calendar date={cal_date} setDate={setDate} width={width} />
        </div>
      </div>
      <Events date={date} />
    </div>
  );
};

export default EventDisplay;
