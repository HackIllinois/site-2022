import React from 'react';

import styles from './styles.module.scss';
import COLORS from '../colors.module.scss';

const { otherEventColor, minieventColor, qnaColor, workshopColor } = COLORS;
const eventTypes = [
  [otherEventColor, 'Workshop'],
  [minieventColor, 'Mini Event'],
  [qnaColor, 'Company Q&A'],
  [workshopColor, 'Other'],
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
