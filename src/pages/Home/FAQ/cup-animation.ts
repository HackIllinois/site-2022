import lottie, { AnimationDirection } from 'lottie-web';
import { useEffect, useRef, RefObject } from 'react';

import animationData from './data.json';

// returns a ref object that should be given to the div containing the animation (i.e. <div ref={animationContainer} ... />)
const useCupAnimation = (): RefObject<HTMLDivElement> => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const direction = useRef<AnimationDirection>(1);

  useEffect(() => {
    lottie.destroy();

    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData,
      });

      animation.addEventListener('DOMLoaded', () => {
        const svgElement = animationContainer.current?.querySelector('svg');
        if (svgElement) {
          svgElement.setAttribute('viewBox', '48 57 435 580');
        }
      });

      animation.addEventListener('complete', () => {
        direction.current *= -1;
        animation.setDirection(direction.current as AnimationDirection);
        animation.play();
      });
    }
  }, []);

  return animationContainer;
};

export default useCupAnimation;
