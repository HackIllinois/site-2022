import React from 'react';
import clsx from 'clsx';

import BLOB from 'assets/home/event_info/blob.svg';
import CAMPFIRE from 'assets/home/event_info/campfire.svg';
import CAMPFIRE_TABLET from 'assets/home/event_info/campfire_tablet.svg';
import CAMPFIRE_MOBILE from 'assets/home/event_info/campfire_mobile.svg';
import DISCORD_LOGO from 'assets/home/event_info/discord_logo.png';
import TWITTER_LOGO from 'assets/home/event_info/twitter_logo.svg';
import INSTAGRAM_LOGO from 'assets/home/event_info/instagram_logo.svg';

import styles from './styles.module.scss';

const EventInfo: React.FC = () => (
  <div className={styles.eventInfo}>
    <img className={clsx(styles.campfire, styles.desktop)} src={CAMPFIRE} alt="" />
    <img className={clsx(styles.campfire, styles.tablet)} src={CAMPFIRE_TABLET} alt="" />
    <img className={clsx(styles.campfire, styles.mobile)} src={CAMPFIRE_MOBILE} alt="" />
    <img className={styles.blob} src={BLOB} alt="" />

    <div className={styles.textContainer}>
      <h2>THE EVENT</h2>
      <p className={styles.one}>Earlier this year, we hosted the <a href="https://fellowship.hackillinois.org" target="_blank" rel="noreferrer">HackIllinois Open Source Fellowship</a>, a new virtual event format with an emphasis on long-term Open Source Contributions.</p>
      <p className={styles.one}>As a result, HackIllinois 2021 will not be limited to only Open Source contributions! People of any skill level, experience, and major with an interest in building a tech project are encouraged to apply and participate. Held virtually from April 9-12, HackIllinois 2021 will feature workshops, mentorship, challenges, and fun mini-events—all hosted on one discord server. Our goal is to provide participants with the same immersive hackathon experience as an in-person event through a virtual hub, with attendees working together synchronously from anywhere in the world.</p>

      <h2>JOIN US</h2>
      <p className={styles.two}>Follow us on Twitter (<a href="https://twitter.com/hackillinois/" target="_blank" rel="noreferrer">@HackIllinois</a>) and Instagram (<a href="https://www.instagram.com/hackillinois/" target="_blank" rel="noreferrer">@HackIllinois</a>) to be notified of our event updates!</p>
      <p className={styles.two}>As mentioned above, we’ll connect mentors and attendees on <b>Discord</b>! As we approach the event, we’ll post a link on our social media to the discord server so that you can join and begin engaging with the community.</p>

      <h2><img src={DISCORD_LOGO} alt="" /> Discord</h2>
      <p className={styles.three}>Our discord server will be the main hub for our event. You’ll use this to find and communicate with teammates and other attendees, access our workshops and mini-events, and get help from mentors—all through one centralized platform.</p>

      <h2><img src={TWITTER_LOGO} alt="" /> Twitter</h2>
      <p className={styles.three}>This is where we’ll be posting main updates with regards to our schedule, additions to our event, and other things we come up with! We’ll also be using it during the event to make updates with any schedule changes and send out reminders for workshops and other mini-events starting out!</p>

      <h2><img src={INSTAGRAM_LOGO} alt="" /> Instagram</h2>
      <p className={styles.two}>This is where we’ll be posting more of the fun, behind-the-scenes aspects of our event! You’ll get an opportunity to see the work that goes into making the event a possibility through insights from teams and profiles of staff members.</p>
    </div>
  </div>
);

export default EventInfo;
