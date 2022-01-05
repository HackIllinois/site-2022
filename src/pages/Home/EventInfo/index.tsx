import React from 'react';

import CAKE_LAYER_ONE from 'assets/home/event_info/cake_layer_one.svg';
import CAKE_LAYER_TWO from 'assets/home/event_info/cake_layer_two.svg';
import CAKE_LAYER_THREE from 'assets/home/event_info/cake_layer_three.svg';
import CAKE_STAND from 'assets/home/event_info/cake_stand.svg';

import styles from './styles.module.scss';

const EventInfo: React.FC = () => (
  <section className={styles.eventInfo}>
    <div className={styles.cakeLayer1}>
      <div className={styles.cakeTop}>
        <img className={styles.cakeFrosting} src={CAKE_LAYER_ONE} alt="" />
        <h1>The Event</h1>
      </div>
      <div className={styles.cakeMiddle}>
        <p>HackIllinois will be held from February 25-27th in-person at the Siebel Center for Computer Science and Electrical and Computer Engineering Buildings at UIUC Campus. Virtually, the event will be hosted on a Discord Server through which attendees can ask questions and interact with one another.</p>
        <p>A hackathon is a collaborative event in which teams learn new skills & technologies and create projects. There’s prizes to win, workshops on various fields in Computer Science, and other fun mini-events to take part in! This year, HackIllinois will be a 36 hour hybrid hackathon, meaning that attendees from around the world can attend virtually, but there will be in-person events at UIUC.</p>
      </div>
      <div className={styles.cakeBottom} />
    </div>
    <div className={styles.cakeLayer2}>
      <div className={styles.cakeTop}>
        <img className={styles.cakeFrosting} src={CAKE_LAYER_TWO} alt="" />
        <h1>Join Us</h1>
      </div>
      <div className={styles.cakeMiddle}>
        <p>Follow us on Twitter (@HackIllinois) and Instagram (@HackIllinois) to be notified of our event updates!</p>
        <p>As mentioned above, we’ll connect mentors and attendees on Discord! As we approach the event, we’ll post a link on our social media to the discord server so that you can join and begin engaging with the community.</p>
        <h2>Discord</h2>
        <p>Our discord server will be the main hub for our event. You’ll use this to find and communicate with teammates and other attendees, access our workshops and mini-events, and get help from mentors—all through one centralized platform.</p>
        <h2>Twitter</h2>
        <p>This is where we’ll be posting main updates with regards to our schedule, additions to our event, and other things we come up with! We’ll also be using it during the event to make updates with any schedule changes and send out reminders for workshops and other mini-events starting out!</p>
        <h2>Instagram</h2>
        <p>This is where we’ll be posting more of the fun, behind-the-scenes aspects of our event! You’ll get an opportunity to see the work that goes into making the event a possibility through insights from teams and profiles of staff members.</p>
      </div>
      <div className={styles.cakeBottom} />
    </div>
    <div className={styles.cakeLayer3}>
      <div className={styles.cakeTop}>
        <img className={styles.cakeFrosting} src={CAKE_LAYER_THREE} alt="" />
        <h1>General FAQs</h1>
      </div>
      <div className={styles.cakeMiddle}>
        <h3>Who can be an in-person attendee?</h3>
        <p>All UIUC students are eligible to be in-person attendees. However, we do have limited capacity, so being an in-person attendee is not a guarantee.</p>
        <h3>How do I register?</h3>
        <p>We will be releasing applications on 14th January.</p>
        {/* <p>(after apps are released) Here is the link to register: https://docs.google.com/forms/d/e/1FAIpQLSddQtnP65bLHhkOHGzJBqUFeMYYj9yPDn4KPzz- geJYMlkY2A/viewform?usp=sf_link</p> */}
        <h3>When does registration close?</h3>
        <p>Registration for those who wish to attend in-person will close on 6th February. However, registration for virtual attendees will remain open until the end of the event.</p>
        <h3>Who can register?</h3>
        <p>Anyone 18 years or older and enrolled in a high school, college, or university (or left school during the current school year) can register!</p>
        <h3>Do I need a team? How do I find one?</h3>
        <p>No, you are not required to have a team to participate. With that being said, we strongly encourage you to work with other participants in order to get the full experience at HackIllinois.</p>
        <p>You can make teams prior to the event or find members through our team matching event or on the event Discord.</p>
        <h3>What should I bring?</h3>
        <p>In-Person Attendees: You should bring a student ID, a reusable water bottle, a change of clothing, and a laptop & charger. Due to safety considerations, please do not bring desktop computers, extra monitors, weapons, or alcoholic beverages.</p>
        <p>Virtual Attendees: Nothing!</p>
        <h3>Will there be food?</h3>
        <p>In-Person Attendees: Snacks, drinks, and all meals will be provided for the entire weekend. If you have a dietary restriction, please make sure to mention it on the application. We’ll have a wide variety of food available, including vegetarian and vegan options, throughout the weekend. All announcements for when the food arrives will be on the app, so please check there.</p>
        <p>Virtual Attendees: Unfortunately, we won’t be able to provide meals or meal vouchers.</p>
        <h3>Where do I sleep?</h3>
        <p>At your dorm/apartment/house! We won’t be providing sleeping rooms this year, and we will close hacking spaces from 2am-8am.</p>
        <h3>Is there anything to do other than code?</h3>
        <p>Yes! There will be a variety of mini-events, workshops, and company events for attendees to join; note that certain events will only be available to in-person attendees. You should definitely check out the schedule that will be posted here on the website!</p>
        <h3>Do I need to have a programming background to participate?</h3>
        <p>No! People of all skill levels are welcomed!</p>
        <h3>How can I stay updated with what is going on at the event?</h3>
        <p>Please download the HackIllinois app (available shortly before the event on the App Store and Play Store)! Our website will also be continually updated with new information throughout the year.</p>
        <h3>Have more questions?</h3>
        <p>Please don’t hesitate to reach out to us at contact@hackillinois.org if you have any other questions!</p>
      </div>
      <div className={styles.cakeBottom} />
    </div>
    <img className={styles.cakeStand} src={CAKE_STAND} alt="" />
  </section>
);

export default EventInfo;
