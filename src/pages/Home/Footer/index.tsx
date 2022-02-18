import React from 'react';

import HACKILLINOIS_LOGO from 'assets/home/footer/hackillinois_logo.svg';
import FACEBOOK_LOGO from 'assets/home/footer/facebook_logo.svg';
import INSTAGRAM_LOGO from 'assets/home/footer/instagram_logo.svg';
import TWITTER_LOGO from 'assets/home/footer/twitter_logo.svg';
import LINKEDIN_LOGO from 'assets/home/footer/linkedin_logo.svg';
import GITHUB_LOGO from 'assets/home/footer/github_logo.svg';
import EMAIL_LOGO from 'assets/home/footer/email_logo.svg';
import styles from './styles.module.scss';

const socials = [
  {
    href: 'https://www.facebook.com/hackillinois/',
    src: FACEBOOK_LOGO,
    alt: 'Facebook',
  },
  {
    href: 'https://instagram.com/HackIllinois',
    src: INSTAGRAM_LOGO,
    alt: 'Instagram',
  },
  {
    href: 'https://twitter.com/HackIllinois',
    src: TWITTER_LOGO,
    alt: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/company/hackillinois/',
    src: LINKEDIN_LOGO,
    alt: 'Linkedin',
  },
  {
    href: 'https://github.com/HackIllinois',
    src: GITHUB_LOGO,
    alt: 'Github',
  },
  {
    href: 'mailto:contact@hackillinois.org',
    src: EMAIL_LOGO,
    alt: 'Email',
  },
];

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.innerFooter}>
      <div className={styles.imageWrapper}>
        <img src={HACKILLINOIS_LOGO} alt="HackIllinois Logo" />
      </div>
      <div className={styles.socialsWrapper}>
        <div className={styles.socials}>
          {socials.map((social) => (
            <a key={social.alt} href={social.href}>
              <div className={styles.social}>
                <img src={social.src} alt={`${social.alt} Logo`} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
