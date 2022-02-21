import React from 'react';

import styles from './styles.module.scss';
import Background from './Background';
import Form from './Form';

const RSVP = (): JSX.Element => (
  <div className={styles.rsvp}>
    <Background />
    <div className={styles.spacer} />
    <Form />
  </div>
);

export default RSVP;
