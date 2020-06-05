import { useLayoutEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';

const useVisibiltyPerctange = () => {
  const ref = useRef();
  const [percentage, setPercentage] = useState(0);
  useLayoutEffect(() => {
    setPercentage(getPercentage(ref));
    const scrollHandler = throttle(() => setPercentage(getPercentage(ref)), 16);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  return [ref, percentage];
};

const getPercentage = (ref) => {
  const { top, bottom } = ref.current.getBoundingClientRect();
  const height = top < bottom ? bottom - top : top - bottom;
  const hb = bottom / height;
  if (hb > 1) return 1;
  if (hb < 0) return 0;
  return hb;
};

export default useVisibiltyPerctange;
