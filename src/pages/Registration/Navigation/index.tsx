import React from 'react';

import Fixtures from './Fixtures';

type Props = {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>,
  formIndex: number
};

const Navigation = ({ setFormIndex, formIndex }: Props): JSX.Element => (
  <div>
    <Fixtures setFormIndex={setFormIndex} formIndex={formIndex} />
  </div>
);

export default Navigation;
