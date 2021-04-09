import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

type PropTypes = {
  to: string;
  children: ReactNode;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
};

const AnimatedLink = ({ to, children, color = 'white', className, style = {}, ...props }: PropTypes): JSX.Element => (
  <NavLink
    className={clsx(styles.animatedLink, className)}
    to={to}
    style={{ color, ...style }}
    {...props}
    activeClassName={styles.active}
    exact
  >
    {children}
    <div className={styles.line} style={{ backgroundColor: color }} />
  </NavLink>
);

export default AnimatedLink;
