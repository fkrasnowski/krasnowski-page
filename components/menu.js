import { useEffect } from 'react';
import { useState, self } from '@hookstate/core';
import { menuRevealState, menuChildrenState } from '../state';
import Hamburger from './hamburger';

export const RevealMenu = ({ children }) => {
  const revealState = useState(menuRevealState);
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          position: sticky;
          top: 0px;
          width: 100%;
          height: 400px;
          margin-bottom: -400px;
          background-color: #262626;
          color: white;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          display: ${revealState.get() ? 'flex' : 'none'};
          z-index: 1;
        }
        div :global(button) {
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
};

export const Menu = ({ children }) => {
  const revealState = useState(menuRevealState);

  return (
    <>
      <div className='menu'>{children}</div>
      <button onClick={() => revealState.set((b) => !b)} aria-label='menu'>
        {/* {revealState.get() ? '✖' : '🔲'} */}
        <Hamburger />
      </button>
      <style jsx>
        {`
          .menu {
            display: contents;
          }

          button {
            display: none;
          }


          @media (max-width: 600px) {
            .menu {
              display: none;
            }

            button {
            display: block; 
            width: 35px;
            height: 35px;
            padding 0.3rem;
            margin 0.5rem;
            border-radius: 10px;
            border: 0px solid grey;
            /* background: rgba(132, 132, 132, 0.5); */
            background: black;
            font-size: 15px;
            color: white;
            font-weight: 550;
            z-index: 1;
        }
          }
          
        `}
      </style>
    </>
  );
};
