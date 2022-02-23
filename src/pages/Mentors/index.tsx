import React from 'react';

// import LEFT_TREE from 'assets/mentor/left_tree.svg';
// import BUG from 'assets/mentor/bug.svg';
// import DOTS from 'assets/mentor/dots.svg';
// import FOREGROUND_TREE from 'assets/mentor/foreground_tree.svg';
// import GROUND from 'assets/mentor/ground.svg';
// import RIGHT_TREE from 'assets/mentor/right_tree.svg';
// import LEFT_BUSH from 'assets/mentor/left_bush.svg';
// import RIGHT_BUSH from 'assets/mentor/right_bush.svg';
// import DROP_ARROW from 'assets/mentor/drop_arrow.svg';
import KITCHEN from 'assets/mentor/kitchen.svg';
import TAG from 'assets/mentor/mentorTag.svg';
import NavBar from 'components/NavBar';

import styles from './styles.module.scss';
// import mentors from './mentorData';

// const [tab, setTab] = useState<number>(0);
// const [dropped, setDropped] = useState(false);
const Mentors: React.FC = () => (
  <div className={styles.background}>
    <img className={styles.kitchen} src={KITCHEN} alt="background" />
    <NavBar showHome />

    <div className={styles.mentorContainer}>
      <img className={styles.tag} src={TAG} alt="mentor board" />
    </div>
    {/* <div className={styles.container}>
      <div className={[styles.category_title].join(' ')}>
        MENTORS
      </div>
      <div className={styles.shader} />
      <div className={styles.mentor_list}>
        <br />
        <br />
        {mentors.map((mentor) => (
          <div key={mentor.name} className={styles.mentor}>
            <div className={styles.mentor_image} style={{ backgroundImage: `url(${mentor.imageURL})` }} />
            <div className={styles.mentor_text}>
              <div className={styles.mentor_name}>{mentor.name}</div>
              <div className={styles.mentor_description}>
                {mentor.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}
  </div>
);

export default Mentors;
