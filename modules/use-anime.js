import { useLayoutEffect } from 'react';
import anime from 'animejs';

const useAnime = (animeFun) => {
  let animation = null;
  useLayoutEffect(() => {
    animation = animeFun(anime);
  }, []);
  return animation;
};

export default useAnime;
