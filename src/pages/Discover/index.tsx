import React from 'react';

import DISCOVER_BG from 'assets/discover/background.svg';
import SHELF from 'assets/discover/shelf.svg';
import DISPLAY from 'assets/discover/display.svg';
import BLACKBOARD from 'assets/discover/blackboard.svg';
import NEW_LOGO from 'assets/discover/new_logo.svg'
import styles from './styles.module.scss';

const Discover: React.FC = () => (
    <div className={styles.discover}>
        <div className={styles.background} style={{ backgroundImage: `url("${DISCOVER_BG}")` }}>
            <img src={NEW_LOGO} alt="Logo" className={styles.logo} />
            <img src={SHELF} alt="Pastry shelf" className={styles.wall_pastries} />
            <img src={DISPLAY} alt="Pastry display" className={styles.display} />
            <img src={BLACKBOARD} alt="Blackboard" className={styles.blackboard}/>
            {/* <img src={BLACKBOARD} alt="Blackboard" className={styles.blackboard}>
                <div className={styles.registration}>registration</div>
            </img> */}
            {/* <img src={CASHIER} alt="Cashier" className={styles.cashier} /> */}

        </div>
    </div>
//   <div className={styles.discover}>
//     <div className={styles.background} style={{ backgroundImage: `url("${DISCOVER_BG}")` }}>
//       {/* <img src={WALL_PASTRIES} alt="Wall pastries" className={styles.wall_pastries} />
//       <img src={PASTRY_DISPLAY} alt="Pastry display with cashier" className={styles.pastry_display} /> */}
//     </div>
//   </div>
);

export default Discover;
