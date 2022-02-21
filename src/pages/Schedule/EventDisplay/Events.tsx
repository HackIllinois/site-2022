import React, { useState, useEffect } from 'react';

import { EventType } from 'util/types';
import { getEvents } from 'util/api';
import styles from './styles.module.scss';
import COLORS from '../colors.module.scss';

const { megaphoneColor } = COLORS;

// replaces any links with actual links using <a> tags
const urlRegex = /https?:\/\/((www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*))/g;
const processDescription = (description: string) => description.replace(urlRegex, '<a href="$&" onclick="event.stopPropagation()" target="_blank" rel="noopener noreferrer">$1</a>');

type Props = {
  date: number,
};

const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours < 12 ? 'AM' : 'PM';
  hours %= 12;
  hours = hours || 12;
  const mins = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${mins} ${ampm}`;
  return strTime;
};

const Events = ({ date }: Props): JSX.Element => {
  const [eventData, setEventData] = useState<Array<EventType>>();
  const [currEvents, setCurrEvents] = useState<Array<EventType>>();

  useEffect(() => {
    getEvents().then((events) => setEventData(events));
  }, []);

  useEffect(() => {
    if (eventData?.length) {
      const eventsInDay = eventData.filter((event) => {
        const d = new Date(event.startTime * 1000);
        return d.getDate() === date;
      });
      eventsInDay.sort((a, b) => ((a.startTime > b.startTime) ? 1 : -1));
      setCurrEvents(eventsInDay);
    }
  }, [date, eventData]);

  return (
    <div className={styles.events}>
      {currEvents?.map((event) => {
        const startTime = new Date(event.startTime * 1000);
        const endTime = new Date(event.endTime * 1000);
        const hasDescription = !!event.description.trim();
        const isAnnouncement = event.startTime === event.endTime;

        let ampmMarginTop = 20;
        if (!isAnnouncement && !hasDescription) ampmMarginTop = 5;

        return (
          <div className={styles.eventWrapper} key={event.id}>
            <div className={styles.times}>
              <h1 style={{ marginTop: ampmMarginTop }}>{formatAMPM(startTime)}</h1>
              {!isAnnouncement && <h3>{formatAMPM(endTime)}</h3>}
            </div>
            <div className={styles.body}>
              {!isAnnouncement ? (
                <>
                  <div className={styles.lineContainer}>
                    <span
                      className={styles.line}
                      data-type={event.eventType.toLowerCase()}
                    />
                  </div>
                  <div className={styles.text}>
                    <h2>{event.name}</h2>
                    {!!event.points && <div className={styles.points} data-type={event.eventType.toLowerCase()}>{event.points} points</div>}
                    <p dangerouslySetInnerHTML={{ __html: processDescription(event.description) }} />
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.lineContainer}>
                    <svg className={styles.megaphone} width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.664.058 6 4.58v7l.748.267-1.127 2.254a2 2 0 0 0 1.156 2.792l4.084 1.361a2.014 2.014 0 0 0 2.421-1.003l1.303-2.606 4.079 1.457a1 1 0 0 0 1.336-.94V.998a1 1 0 0 0-1.336-.94zm-7.171 16.3L7.41 14.995l1.235-2.47 4.042 1.443-1.194 2.388zM2 11.58h2v-7H2c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2z" fill={megaphoneColor} />
                    </svg>
                  </div>
                  <div className={styles.text}>
                    <h2 className={styles.announcement}>
                      {event.name}
                    </h2>
                    <p dangerouslySetInnerHTML={{ __html: processDescription(event.description) }} />
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
