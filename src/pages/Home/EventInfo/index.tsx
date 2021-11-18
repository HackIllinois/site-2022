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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente quod laborum corporis est. Id ipsum dolore rem nobis sint ratione quia deserunt corrupti, rerum quasi ipsam at soluta quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia ducimus tempore accusantium rem nesciunt, facere consequatur. Accusantium totam architecto veritatis dignissimos repellendus dolorem! Voluptas officiis neque sapiente corporis earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.</p>
      </div>
      <div className={styles.cakeBottom}></div>
    </div>
    <div className={styles.cakeLayer2}>
      <div className={styles.cakeTop}>
        <img className={styles.cakeFrosting} src={CAKE_LAYER_TWO} alt="" />
        <h1>Join Us</h1>
      </div>
      <div className={styles.cakeMiddle}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente quod laborum corporis est. Id ipsum dolore rem nobis sint ratione quia deserunt corrupti, rerum quasi ipsam at soluta quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia ducimus tempore accusantium rem nesciunt, facere consequatur. Accusantium totam architecto veritatis dignissimos repellendus dolorem! Voluptas officiis neque sapiente corporis earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.</p>
      </div>
      <div className={styles.cakeBottom}></div>
    </div>
    <div className={styles.cakeLayer3}>
      <div className={styles.cakeTop}>
        <img className={styles.cakeFrosting} src={CAKE_LAYER_THREE} alt="" />
        <h1>General FAQs</h1>
      </div>
      <div className={styles.cakeMiddle}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente quod laborum corporis est. Id ipsum dolore rem nobis sint ratione quia deserunt corrupti, rerum quasi ipsam at soluta quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia ducimus tempore accusantium rem nesciunt, facere consequatur. Accusantium totam architecto veritatis dignissimos repellendus dolorem! Voluptas officiis neque sapiente corporis earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo qui rerum assumenda dicta explicabo quos quas ut minus voluptatum, eum libero harum dolorem, voluptate laborum adipisci excepturi eligendi, veniam quo.</p>
      </div>
      <div className={styles.cakeBottom}></div>
    </div>
    <img className={styles.cakeStand} src={CAKE_STAND} />
  </section>
);

export default EventInfo;
