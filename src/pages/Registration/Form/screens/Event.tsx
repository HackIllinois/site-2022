import React from 'react';
import clsx from 'clsx';

import Checkboxes from 'components/form/Checkboxes';
import styles from './styles.module.scss';

const interestOptions = [
  { label: 'Attending technical workshops', value: 'Attending technical workshops' },
  { label: 'Submitting a project to win prizes', value: 'Submitting a project to win prizes' },
  { label: 'Mini-Events (e.g. game tournaments)', value: 'Mini-Events (e.g. game tournaments)' },
  { label: 'Meeting new people', value: 'Meeting new people' },
  { label: 'Working with mentors to get feedback', value: 'Working with mentors to get feedback' },
  { label: 'Company Q&As and Networking events', value: 'Company Q&As and Networking events' },
  { label: 'Pitching Shark Tank projects', value: 'Pitching Shark Tank projects' },
  { label: 'Other', value: 'Other', isOther: true },
];

const learnOptions = [
  { label: 'Attending technical workshops', value: 'Attending technical workshops' },
  { label: 'Submitting a project to win prizes', value: 'Submitting a project to win prizes' },
  { label: 'Mini-Events (e.g. game tournaments)', value: 'Mini-Events (e.g. game tournaments)' },
  { label: 'Meeting new people', value: 'Meeting new people' },
  { label: 'Working with mentors to get feedback', value: 'Working with mentors to get feedback' },
  { label: 'Company Q&As and Networking events', value: 'Company Q&As and Networking events' },
  { label: 'Pitching Shark Tank projects', value: 'Pitching Shark Tank projects' },
  { label: 'Other', value: 'Other', isOther: true },
];

const Event = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.eventQuestions)}>
    <h1 className={styles.title}>Hack-Illinois Specific Questions</h1>
    <span>Which of these aspects of the hackathon would you most be interested in engaging in?</span>
    <Checkboxes
      className={styles.checkboxes}
      name="interests"
      options={interestOptions}
    />
    <span>How did you hear of HackIllinois?</span>
    <Checkboxes
      className={styles.checkboxes}
      name="learn"
      options={learnOptions}
    />
  </div>
);

export default Event;
