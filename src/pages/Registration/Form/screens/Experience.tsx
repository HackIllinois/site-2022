import React from 'react';
import clsx from 'clsx';

import Select from 'components/form/Select';
import FileUpload from 'components/form/FileUpload';
import styles from './styles.module.scss';

const formatYears = (years: number) => `${years} year${years === 1 ? '' : 's'}`;
const programmingYearsOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .map((years) => ({
    value: years,
    label: years === 10 ? '10+ years' : formatYears(years),
  }));

const abilityOptions = [
  { value: 1, label: '1 - What is code?' },
  { value: 2, label: '2 - I am familiar with code, but need guidance. ' },
  { value: 3, label: '3 - I am comfortable working on independent projects.' },
  { value: 4, label: '4 - I am comfortable writing and reviewing production level code.' },
  { value: 5, label: '5 - I am code.' },
];

const internshipOptions = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' },
];

const Experience = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.experience)}>
    <h1 className={styles.title}>Experience</h1>
    <Select name="programmingYears" options={programmingYearsOptions} placeholder="How many years have you been programming? *" />
    <Select name="programmingAbility" options={abilityOptions} placeholder="On a scale from 1 to 5, how do you rate your programming ability? *" />
    <Select name="hasInternship" options={internshipOptions} placeholder="Do you have an internship or full-time position this summer? *" />
    <FileUpload
      className={styles['resume-upload']}
      name="resumeFilename"
      type="resume"
      accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      text="Attach your resume [file - pdf, docx] (optional)"
    />
  </div>
);

export default Experience;
