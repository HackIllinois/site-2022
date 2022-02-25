import React, { useState } from 'react';

import KITCHEN from 'assets/mentor/kitchen.svg';
import TAG from 'assets/mentor/mentorTag.svg';
import FRAME from 'assets/mentor/frame.svg';
// import MENTOR_BACKGROUND from 'assets/mentor/mentorBackground.svg';
import NEXTARROW from 'assets/registration/right_arrow.svg';

import NavBar from 'components/NavBar';
import useWindowSize from 'util/useWindowSize';
import mentors from './mentorData';

import styles from './styles.module.scss';

const Mentors: React.FC = () => {
  const { width, height } = useWindowSize();
  const [page, setPage] = useState(0);
  // eslint-disable-next-line no-nested-ternary
  const numPages = (width < 1000) ? 1 : (height < 700) ? 2 : 4;
  const maxPage = numPages === 1 ? mentors.length - 1 : ~~(mentors.length / numPages);

  return (
    <div className={styles.background}>
      <img className={styles.kitchen} src={KITCHEN} alt="background" />
      <NavBar showHome />

      <div className={styles.mentorContainer}>
        { (page > 0) && <button className={styles.backButton} onClick={() => setPage(page - 1)}> <img className={styles.backArrow} src={NEXTARROW} alt="" /></button> }
        <img className={styles.tag} src={TAG} alt="mentor board" />
        <div className={styles.mentors}>
          {/* <img className={styles.mentorBackground} src={MENTOR_BACKGROUND} alt="" /> */}
          {mentors.slice(page * numPages, Math.min((page * numPages) + numPages, mentors.length)).map((mentor) => (
            <div className={styles.mentor} key={mentor.name}>
              <div className={styles.subMentor}>
                <img className={styles.frame} src={FRAME} alt="mentor" />
                <div className={styles.mentor_image} style={{ backgroundImage: `url(${mentor.imageURL})` }} />
                <p className={styles.name}>{mentor.name}</p>
              </div>
              <div className={styles.subMentorDescrip}>
                <p className={styles.mentorsDescription}>{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
        { (page < maxPage) && <button className={styles.button} onClick={() => setPage(page + 1)}> <img src={NEXTARROW} alt="" /></button> }
      </div>
    </div>
  );
};

export default Mentors;
