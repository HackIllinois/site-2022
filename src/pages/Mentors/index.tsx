import React from 'react';

import LEFT_TREE from 'assets/mentor/left_tree.svg';
import BUG from 'assets/mentor/bug.svg';
import DOTS from 'assets/mentor/dots.svg';
import FOREGROUND_TREE from 'assets/mentor/foreground_tree.svg';
import GROUND from 'assets/mentor/ground.svg';
import RIGHT_TREE from 'assets/mentor/right_tree.svg';
import LEFT_BUSH from 'assets/mentor/left_bush.svg';
import RIGHT_BUSH from 'assets/mentor/right_bush.svg';
// import DROP_ARROW from 'assets/mentor/drop_arrow.svg';
import NavBar from 'components/NavBar';

import styles from './styles.module.scss';
import mentors from './mentorData';

// const [tab, setTab] = useState<number>(0);
// const [dropped, setDropped] = useState(false);
const Mentors: React.FC = () => (
  <div className={styles.background}>
    <NavBar />
    {/* <div
      className={styles.select_wrapper}
      style={{ maxHeight: dropped ? '150px' : '45px' }}
    >
      {categories[tab].name.toUpperCase()}{' '}
      <span
        onClick={() => setDropped(!dropped)}
        tabIndex={0}
        onKeyPress={() => {}}
        role="button"
        className={styles.drop_arrow}
      >
        <img
          style={{
            transition: '.5s',
            height: '100%',
            transform: `rotate(${dropped ? '180' : '0'}deg)`,
          }}
          src={DROP_ARROW}
          alt={DROP_ARROW}
        />
      </span>
      <div className={styles.drop_list}>
        {categories.map((c, i) => (
          <div
            key={c.name}
            onClick={() => {
              setTab(i);
              setDropped(false);
            }}
            tabIndex={0}
            onKeyPress={() => {}}
            role="button"
            className={styles.drop_category}
          >
            {c.name}
          </div>
        ))}
      </div>
    </div> */}
    <div className={styles.shade} />
    <div className={styles.mobile}>
      <img src={RIGHT_BUSH} alt="" className={styles.right_bush} />
      <img src={LEFT_BUSH} alt="" className={styles.left_bush} />
      <img src={FOREGROUND_TREE} alt="" className={styles.foreground_tree} />
      <img src={RIGHT_TREE} alt="" className={styles.right_tree} />
      <img src={LEFT_TREE} alt="" className={styles.left_tree} />
      <img src={GROUND} alt="" className={styles.ground} />
      <img src={BUG} alt="" className={styles.bug} />
      <div className={styles.dots} style={{ backgroundImage: `url("${DOTS}")` }} />
      {/* <div className={styles.mentor_type_list}>
        {categories.map((category, i) => (
          <div
            style={{ transform: `rotate(${category.angle}deg)` }}
            className={[
              styles.category,
              i === tab ? styles.category_select : '',
            ].join(' ')}
            onKeyPress={() => {}}
            tabIndex={i}
            onClick={() => {
              setTab(i);
            }}
            role="button"
          >
            {category.name}
          </div>
        ))}
      </div> */}
    </div>

    <div className={styles.container}>
      <div className={[styles.category_title/* , styles.mobile */].join(' ')}>
        {/* {categories[tab].name} */}
        MENTORS
      </div>
      <div className={styles.shader} />
      <div className={styles.mentor_list}>
        {/* Hack to get some extra padding, but also keeps the overflow cutoff at the top of the container */}
        <br />
        <br />
        {mentors.map((mentor) => (
          <div key={mentor.name} className={styles.mentor}>
            <div className={styles.mentor_image} style={{ backgroundImage: `url(${mentor.imageURL})` }} />
            {/* <img
              src={mentor.imageURL}
              alt=""
              className={styles.mentor_image}
            /> */}
            <div className={styles.mentor_text}>
              <div className={styles.mentor_name}>{mentor.name}</div>
              <div className={styles.mentor_description}>
                {mentor.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Mentors;
