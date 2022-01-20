import React from 'react';

import Select, { OptionType } from 'components/form/Select';
import clsx from 'clsx';

import majors from 'data/majors.json';
import schools from 'data/schools.json';
import styles from './styles.module.scss';

const degreeOptions: OptionType[] = [
  { value: 'ASSOCIATES', label: 'Associates Degree' },
  { value: 'BACHELORS', label: 'Bachelor’s Degree' },
  { value: 'MASTERS', label: 'Master’s Degree' },
  { value: 'PHD', label: 'PhD' },
  { value: 'GRADUATED', label: 'Graduated' },
  { value: 'OTHER', label: 'Other' },
];

const graduationYearOptions: OptionType[] = [];
for (let i = 2026; i >= 1970; i -= 1) {
  graduationYearOptions.push({ value: i, label: String(i) });
}
graduationYearOptions.push({ value: 0, label: 'N/A' });

const schoolOptions: OptionType[] = schools.concat('N/A').map((school) => ({ value: school, label: school }));

const firstMajors = ['Computer Science', 'Computer Engineering', 'Electrical Engineering'];
const remainingMajors = majors.filter((major) => !firstMajors.includes(major));
const majorOptions: OptionType[] = firstMajors
  .concat(remainingMajors)
  .concat('N/A')
  .map((major) => ({ value: major, label: major }));

const Education = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.education)}>
    <h1 className={styles.title}>Education</h1>
    <Select name="degreePursued" options={degreeOptions} placeholder="What degree are you currently pursuing? *" />
    <Select name="graduationYear" options={graduationYearOptions} placeholder="Graduation Year (Enter N/A if not applicable) *" />
    <Select name="school" options={schoolOptions} placeholder="School (Enter N/A if not applicable) *" creatable />
    <Select name="major" options={majorOptions} placeholder="Major (Enter N/A if not applicable) *" menuPlacement="top" creatable />
  </div>
);

export default Education;
