import React from 'react';

import Fixtures from './Fixtures';

import styles from './styles.module.scss';

type Props = {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>,
  formIndex: number
};

const Navigation = ({ setFormIndex, formIndex }: Props): JSX.Element => (
  <div className={styles.navigation}>
    <Fixtures setFormIndex={setFormIndex} formIndex={formIndex} />
  </div>
);

export default Navigation;
