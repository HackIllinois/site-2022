import React from 'react';
import clsx from 'clsx';

import Checkboxes from 'components/form/Checkboxes';
import Select from 'components/form/Select';
import Scrollbars from 'react-custom-scrollbars';
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
  { label: 'Instagram', value: 'Instagram' },
  { label: 'Twitter', value: 'Twitter' },
  { label: 'Facebook', value: 'Facebook' },
  { label: 'LinkedIn', value: 'LinkedIn' },
  { label: 'Slack', value: 'Slack' },
  { label: 'Reddit', value: 'Reddit' },
  { label: 'Word of Mouth', value: 'Word of Mouth' },
  { label: 'CS Department Email', value: 'CS Department Email' },
];

const Event = (): JSX.Element => (
  <Scrollbars className={clsx(styles.screen, styles.eventQuestions)} renderView={(props) => <div className={styles.scrollbox} {...props} />} renderTrackHorizontal={(props) => <div className={styles.horizontalScrollbar} {...props} />}>
    <h1 className={styles.title}>Hack-Illinois Specific Questions</h1>
    <br />
    <p>How did you hear of HackIllinois?</p>
    <Select name="outreachSurvey" options={learnOptions} placeholder="Where did you hear about us? *" creatable />
    <br />
    <br />
    <br />
    <p>Which of these aspects of the hackathon would you most be interested in engaging in?</p>
    <Checkboxes
      className={styles.checkboxes}
      name="interests"
      options={interestOptions}
    />
    <br />
  </Scrollbars>
);

export default Event;
