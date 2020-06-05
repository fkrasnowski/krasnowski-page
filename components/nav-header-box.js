import useVisbilityPercentage from '../modules/visibility-percentage';
import Nav, { navRef } from './navbar';
import { useLayoutEffect, useEffect } from 'react';
import anime from 'animejs';
import { useState } from '@hookstate/core';
import { menuRevealState } from '../state';
import theme from '../theme';

const randomValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const randomColor = () =>
  randomValue([
    '#FFC0CB',
    '#f7aef8',
    '#a09fe8',
    '#b8e0d2',
    '#72ddf7',
    '#edf67d',
    '#7dd181',
  ]);

let headerColor = '#FFC0CB';

setInterval(() => {
  headerColor = randomColor();
}, 3000);

export const HeaderBox = ({ children }) => {
  const [ref, percentage] = useVisbilityPercentage();
  const revealState = useState(menuRevealState);

  useLayoutEffect(() => {
    const animation = anime
      .timeline({
        autoplay: false,
        duration: 1000,
        targets: ref.current,
        easing: 'easeInQuart',
        backgroundColor: [headerColor, theme.colors.muted],
        color: [theme.colors.secondary, 'rgba(0, 0, 0, 0)'],
        borderBottomLeftRadius: ['50% 20%', '0% 0%'],
        borderBottomRightRadius: ['50% 50%', '0% 0%'],
      })
      .add({})
      .add(
        {
          fill: [theme.colors.secondary, theme.colors.accent],
          targets: navRef.current,
          duration: 0.1,
          backgroundColor: ['', theme.colors.muted],
          color: [theme.colors.secondary, theme.colors.accent],
        },
        '-=0'
      )
      .add(
        {
          targets: '.main-button',
          duration: 50,
          color: ['rgba(0, 0, 0, 0)', '#FFFFFF'],
        },
        '-=50'
      )
      .add({ duration: 500 });
    const handleScroll = (percentage) =>
      animation.seek((1 - percentage.toPrecision(3)) * animation.duration);

    if (revealState.get()) {
      animation.seek(animation.duration);
    } else {
      handleScroll(percentage);
    }
  }, [percentage, revealState.get()]);

  return (
    <div ref={ref} className='header'>
      {children}
      <style jsx>
        {`
          .header {
            top: 0px;
            color: ${theme.colors.secondary};
            background-color: ${theme.colors.primary};
            height: fit-content;
            width: 100%;
            text-align: center;
            padding-bottom: 50px;
            padding-top: 70px;
            padding-left: 3rem;
            padding-right: 3rem;
            margin-top: -50px;
            border-bottom-left-radius: 50% 20%;
            border-bottom-right-radius: 50% 50%;
            overflow: hidden;
          }

          @media (max-width: 370px) {
            .header {
              font-size: 0.7rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export const NavBar = (props) => <Nav {...props} />;
