import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type PropTypes = {
  value: string,
  label: string,
  checked: boolean,
  className?: string,
  style?: React.CSSProperties,
  [key: string]: unknown,
};

const StyledCheckbox = ({ value, label, checked, className, style, ...props }: PropTypes): JSX.Element => (
  <label className={clsx(styles.checkboxLabel, checked && styles.checked, className)} style={style}>
    <input
      type="checkbox"
      className={styles.checkbox}
      value={value}
      checked={checked}
      {...props}
    />
    {label}
  </label>
);

export default StyledCheckbox;
