import React from 'react';

import styles from './styles.module.scss';
import useCupAnimation from './cup-animation';

const FAQ = (): JSX.Element => {
  const animationRef = useCupAnimation();

  return (
    <div className={styles.faq}>
      <div className={styles.cup} ref={animationRef} />
      <div className={styles.content}>
        <h1><span className={styles.notMobile}>General </span>FAQ</h1>

        <h4>What kind of projects can I work on?</h4>
        <p>
          Because we aren’t limiting submissions to Open Source Contributions, there’s <b>no limit</b> to what you can work on! Any project submission of any level is allowed, no matter the goal or theme of the end product.
        </p>

        <h4>What if I don’t have that much programming experience?</h4>
        <p>
          People of all programming levels are welcome! You’ll have the chance to gain technical experience through workshops and work with mentors who can guide you with your project idea.
        </p>

        <h4>How do applications work?</h4>
        <p>
          There is no application! Just register <a href="/register">here</a> and we will send you more information about our event - everyone is accepted! Registration is open until the end of the event. In order to join our Discord server and submit a project, you will need to register! You must be 18+ to register.
        </p>

        <h4>Where can I go for more information?</h4>
        <p>
          Take a look at our website for more information about our event! If you have any further questions, feel free to reach out to us through our social media channels, or email us at <a className={styles.noUnderline} href="mailto:contact@hackillinois.org">contact@hackillinois.org</a>!
        </p>

        <h4>What do I need as a virtual hacker?</h4>
        <p>
          You won’t need much to get the most out of your HackIllinois experience. All it’ll take is:
          <ul>
            <li>A Github account to share and collaborate on your code with others.</li>
            <li>A Discord account to work and engage with teammates, mentors, and other attendees.</li>
          </ul>
        </p>

        <h4>Can I work in a team? Alone?</h4>
        <p>
          Yes! HackIllinois allows teams of up to size 6. While teamwork is highly encouraged to ensure the most effective ideation and development over the span of the event, with a discord channel dedicated towards finding teammates, individual submissions are also allowed.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
