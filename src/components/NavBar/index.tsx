import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import LOGO from 'assets/logo.svg';
import styles from './styles.module.scss';
import AnimatedLink from './AnimatedLink';
import HighlightedLink from './HighlightedLink';
import MenuIcon from './MenuIcon';

type LinkType = { text: string, to: string };
const links: LinkType[] = [
  // { text: 'Mentors', to: '/mentors' },
  // { text: 'Prizes', to: '/prizes' },
  { text: 'Schedule', to: '/schedule' },
  // { text: 'Resources', to: '/resources' },
];

const linksWithHome = [{ text: 'Home', to: '/' }].concat(links);

type PropTypes = {
  hideLogo?: boolean;
  showHome?: boolean;
  mobileBreakpoint?: number;
  className?: string;
};

const NavBar = ({ hideLogo, showHome, mobileBreakpoint = 768, className }: PropTypes): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileBreakpoint);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    const listener = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (!e.matches) { // not mobile
        setIsSideBarOpen(false);
      }
    };
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, [mobileBreakpoint]);

  const linksToUse = showHome ? linksWithHome : links;

  return (
    <header>
      <nav className={clsx(styles.navBar, className)}>
        <Link to="/">
          <img className={clsx(styles.logo, hideLogo && styles.hidden)} src={LOGO} alt="HackIllinois Logo" />
        </Link>

        <div className={styles.spacer} />

        {isMobile ? (
          <button
            type="button"
            className={styles.sideBarToggle}
            onClick={() => setIsSideBarOpen(true)}
            aria-label="Open Side Bar"
          >
            <MenuIcon className={styles.menuIcon} />
          </button>
        ) : linksToUse.map(({ text, to }) => (
          <AnimatedLink className={styles.link} to={to}>{text}</AnimatedLink>
        ))}
      </nav>

      {isMobile && (
        <div className={clsx(styles.sideBar, isSideBarOpen && styles.open)}>
          <Link to="/">
            <img className={styles.logo} src={LOGO} alt="HackThis Logo" />
          </Link>

          <nav>
            {linksWithHome.map(({ to, text }) => (
              <HighlightedLink className={styles.link} to={to}>{text}</HighlightedLink>
            ))}
          </nav>
        </div>
      )}

      {isSideBarOpen && (
        <button
          type="button"
          className={styles.sideBarBackground}
          onClick={() => setIsSideBarOpen(false)}
          aria-label="Close Side Bar"
        />
      )}
    </header>
  );
};

export default NavBar;
