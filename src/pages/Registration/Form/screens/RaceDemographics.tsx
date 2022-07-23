import React from 'react';
import clsx from 'clsx';
import Scrollbars from 'react-custom-scrollbars-2';

import Checkboxes from 'components/form/Checkboxes';
import styles from './styles.module.scss';

const raceOptions = [
  { label: 'American Indian or Alaskan Native', value: 'American Indian or Alaskan Native' },
  { label: 'Asian', value: 'Asian' },
  { label: 'Black or African American', value: 'Black or African American' },
  { label: 'Native Hawaiian or Pacific Islander', value: 'Native Hawaiian or Pacific Islander' },
  { label: 'Hispanic or Latino or Spanish Origin', value: 'Hispanic or Latino or Spanish Origin' },
  { label: 'White', value: 'White' },
  { label: 'Other', value: 'Other', isOther: true },
  { label: 'Prefer Not to Answer', value: 'Prefer Not to Answer', isRadio: true },
];

const RaceDemographics = (): JSX.Element => (
  <Scrollbars className={clsx(styles.screen, styles.raceDemographics)} renderView={(props) => <div className={styles.scrollbox} {...props} />} renderTrackHorizontal={(props) => <div className={styles.horizontalScrollbar} {...props} />}>
    <h1 className={styles.title}>Race Demographics</h1>
    <Checkboxes
      className={styles.checkboxes}
      name="race"
      options={raceOptions}
    />
    <p className={styles.note}>
      <i><b>Note:</b> This is a purely optional question! :) In light of recent events, we’re collecting this information in order to determine what our current attendee demographics are and how we can work on increasing diversity! Don’t forget that it’s purely optional and won’t affect anything! </i>
    </p>
  </Scrollbars>
);

export default RaceDemographics;
