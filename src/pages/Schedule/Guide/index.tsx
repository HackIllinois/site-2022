import React from 'react';

import styles from './styles.module.scss';

const eventTypes = [
  ['#2C9C98', 'Workshop'],
  ['#6F8CC1', 'Mini Event'],
  ['#EE6C72', 'Company Q&A'],
  ['#FBB63B', 'Other'],
];

const Guide: React.FC = () => (
  <div className={styles.guide}>
    <h1>Guide</h1>
    <div className={styles.gridContainer}>
      {eventTypes.map((event) => (
        <div className={styles.eventType} key={event[1]}>
          <span className={styles.colorTag} style={{ backgroundColor: event[0] }} />
          <span className={styles.textTag}>{event[1]}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Guide;
