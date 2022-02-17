import React, { useState } from 'react';
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
  const d = new Date(`February ${date}, 2022`);
  const day = days[d.getDay()];

  return (
    <div className={styles.eventDisplay}>
      <p className={styles.dayHeading}>February {date} - {day} {timezoneText}</p>
      <div className={styles.container}>
        <Calendar date={date} setDate={setDate} width={width} />
        <Events date={date} />
      </div>
    </div>
  );
};

export default EventDisplay;
