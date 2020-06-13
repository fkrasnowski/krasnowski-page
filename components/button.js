import { menuRevealState } from '../state';
import { useState } from '@hookstate/core';
import useScrollTo from 'use-scroll-to';

const Button = ({ children, scrollTo, plus, minus }) => {
  const revealState = useState(menuRevealState);
  const scroll = useScrollTo(scrollTo, { plus, minus });
  return (
    <button
      onClick={() => {
        scroll();
        revealState.set(false);
      }}
    >
      {children}
      <style jsx>{`
        button {
            font-size: 15px;
            font-weight: 550;
            background: transparent;
            color: inherit;
            padding 0.3rem;
            margin 0.5rem;
            border-radius: 10px;
            border: 0px solid grey;
            min-width: 80px;        
            text-align: center;
            transition: all 0.4s;
            cursor: pointer;
        }

        button:hover {
            background: rgba(132, 132, 132, 0.2);
        }
    `}</style>
    </button>
  );
};

export default Button;
