import { menuRevealState } from '../state';
import { useState } from '@hookstate/core';

const Hamburger = () => {
  const revealState = useState(menuRevealState);

  return (
    <div className={revealState.get() ? 'hamburgerActive' : 'hamburger'}>
      <span className='hamburgerContainer'>
        <span className='hamburgerBars'></span>
      </span>
      <style jsx>{`
        .hamburger {
          margin: 0;
          padding: 0;
          border: 0;
          background-color: transparent;
        }

        .hamburgerContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hamburgerBars {
          position: absolute;
          width: 15px;
          height: 2px;
          transition: transform 220ms ease-in-out;
          background-color: white;
        }
        .hamburgerBars:before,
        .hamburgerBars:after {
          display: block;
          position: absolute;
          width: 15px;
          height: 2px;
          background-color: white;
          content: '';
        }
        .hamburgerBars:before {
          top: -6px;
          transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
        }
        .hamburgerBars:after {
          bottom: -6px;
          transition: bottom 100ms 250ms ease-in, transform 220ms ease-in-out;
        }
        .hamburgerActive .hamburgerBars {
          transform: rotate(225deg);
          transition: transform 220ms 120ms ease-in-out;
        }
        .hamburgerActive .hamburgerBars:before {
          top: 0;
          transition: top 100ms ease-out;
        }
        .hamburgerActive .hamburgerBars:after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 100ms ease-out, transform 220ms 120ms ease-in-out;
        }
        .hamburger:focus,
        .hamburgerContainer:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Hamburger;
