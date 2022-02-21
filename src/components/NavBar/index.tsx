import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import LOGO from 'assets/logo.svg';
import styles from './styles.module.scss';
// import AnimatedLink from './AnimatedLink';
import HighlightedLink from './HighlightedLink';
import MenuIcon from './MenuIcon';

type LinkType = { text: string, to: string };
const links: LinkType[] = [
  { text: 'Interactive Journey', to: '/discover' },
  { text: 'Schedule', to: '/schedule' },
  { text: 'Mentors', to: '/mentors' },
  { text: 'Prizes', to: '/prizes' },
  { text: 'Mini Events', to: '/mini-events' },
];

const linksWithHome = [{ text: 'Home', to: '/' }].concat(links);

type PropTypes = {
  hideLogo?: boolean;
  showHome?: boolean;
  showRegister?: boolean;
  mobileBreakpoint?: number;
  className?: string;
};

const NavBar = ({ hideLogo, showHome, showRegister, mobileBreakpoint = 768, className }: PropTypes): JSX.Element => {
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

    if (!mql.addEventListener) { // support old browsers
      mql.addListener(listener);
      return () => mql.removeListener(listener);
    }

    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, [mobileBreakpoint]);

  const linksToUse = showHome ? linksWithHome : links;

  const menuToggle = (
    <>
      {!isSideBarOpen ? (
        <button
          type="button"
          className={styles.sideBarToggle}
          onClick={() => setIsSideBarOpen(true)}
          aria-label="Open Side Bar"
        >
          <MenuIcon color="black" className={styles.menuIcon} />
        </button>
      ) : (
        <button
          type="button"
          className={styles.sideBarToggle}
          onClick={() => setIsSideBarOpen(false)}
          aria-label="Close Side Bar"
        >
          <div className={styles.closeIcon}> &times; </div>
        </button>
      )}
    </>
  );

  const dropdownMenu = (
    <div className={clsx(styles.sideBar, isSideBarOpen && styles.open, isMobile && styles.mobile)}>
      { menuToggle }
      { isSideBarOpen && (
        <div className={clsx(styles.sideBarLinks)}>
          <nav>
            {linksToUse.map(({ to, text }) => (
              <HighlightedLink
                className={clsx(styles.link, isMobile && styles.mobile)}
                color="black"
                highlightEnabled={false}
                to={to}
                key={text}
              >
                {text}
              </HighlightedLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );

  return (
    <header>
      <nav className={clsx(styles.navBar, className)}>
        <Link to="/">
          <img className={clsx(styles.logo, isMobile && styles.mobile, hideLogo && styles.hidden)} src={LOGO} alt="HackIllinois Logo" />
        </Link>

        { showRegister && <Link className={styles.registerButton} to="/register">Register</Link> }

        { dropdownMenu }
      </nav>
    </header>
  );
};

export default NavBar;
