import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './styles.module.scss';

type PropTypes = {
  name: string,
  hideErrors?: boolean,
};

const ErrorMessage = ({ name, hideErrors = false }: PropTypes): JSX.Element | null => {
  const { errors } = useFormContext();

  if (!hideErrors && errors[name]) {
    return <div className={styles.errorMessage}>{errors[name].message}</div>;
  }
  return null;
};

export default ErrorMessage;
