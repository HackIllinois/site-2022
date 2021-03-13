import React from 'react';
import clsx from 'clsx';

import RIGHT_ARROW from 'assets/registration/right_arrow.svg';
import styles from './styles.module.scss';

type PropTypes = {
  type?: 'button' | 'submit';
  children?: React.ReactNode;
  arrow?: 'left' | 'right';
  hidden?: boolean;
  disabled?: boolean;
  loading?: boolean;
  [key: string]: unknown;
};

const Button = ({ type = 'button', children, arrow, hidden, disabled, loading, ...props }: PropTypes): JSX.Element => (
  <button type={type} className={clsx(styles.button, hidden && styles.hidden, disabled && styles.disabled, loading && styles.loading)} {...props}>
    {arrow === 'left' && (
      <img className={clsx(styles.arrowIcon, styles.left, children && styles.margin)} src={RIGHT_ARROW} alt="<" />
    )}
    {children}
    {arrow === 'right' && (
      <img className={clsx(styles.arrowIcon, styles.right, children && styles.margin)} src={RIGHT_ARROW} alt=">" />
    )}
  </button>
);

export default Button;
