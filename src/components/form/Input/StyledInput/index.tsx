import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './styles.module.scss';

type PropTypes = {
  className?: string;
  [key: string]: unknown;
};

const StyledInput = forwardRef<HTMLInputElement, PropTypes>(({ className, ...props }: PropTypes, ref): JSX.Element => (
  <input className={clsx(styles.input, className)} {...props} ref={ref} />
));

export default StyledInput;
