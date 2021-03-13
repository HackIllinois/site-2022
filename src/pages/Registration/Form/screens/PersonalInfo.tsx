import React from 'react';
import clsx from 'clsx';

import Input from 'components/form/Input';
import Select from 'components/form/Select';
import Constant from 'components/form/Constant';
import states from 'data/states.json';
import countries from 'data/countries.json';
import styles from './styles.module.scss';

const locationOptions = states
  .concat(countries)
  .filter((place) => place !== 'United States') // removing US because we want people in the US to pick a state
  .concat('Other')
  .map((place) => ({ value: place, label: place }));

const genderOptions = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Non-Binary', value: 'Non-Binary' },
  { label: 'Prefer Not to Answer', value: 'Prefer Not to Answer' },
];

const PersonalInfo = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.personalInfo)}>
    <h1 className={styles.title}>Personal Information</h1>
    <Input className={styles.input} name="name" placeholder="Name" />
    <Input className={styles.input} name="email" placeholder="Primary Email Address" />
    <Select
      className={styles.select}
      name="location"
      options={locationOptions}
      placeholder="Where are you located this semester? *"
      menuPlacement="top"
    />
    <Constant name="timezone" value={`GMT${new Date().toString().split('GMT')[1]}`} />
    <Select
      className={styles.select}
      name="gender"
      options={genderOptions}
      placeholder="Gender"
      menuPlacement="top"
      creatable
    />
  </div>
);

export default PersonalInfo;
