import theme from '../theme';
import { useState } from '@hookstate/core';

const Card = ({ children, pic }) => {
  const transition = 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)';
  const unit = 'rem';
  const h = 17;
  const w = 47;
  const imageW = 30;
  const descriptionW = w - imageW;
  const revealState = useState(false);
  const setRevealTrue = () => revealState.set(true);
  const setRevealFalse = () => revealState.set(false);
  return (
    <div
      className={revealState.get() ? 'card revealed' : 'card'}
      onTouchStart={setRevealTrue}
      onTouchEnd={setRevealFalse}
      onMouseEnter={setRevealTrue}
      onMouseLeave={setRevealFalse}
    >
      <a>
        <div className='image'></div>
      </a>
      <div className='description'>{children}</div>
      <p className='info'>Press & hold</p>
      <style jsx>
        {`
          .card {
            height: ${h + unit};
            width: ${w + unit};
            display: flex;
            flex-direction: column;
            position: relative;
            transition: ${transition};
            border-radius: 10px;
            overflow: hidden;
          }

          .revealed { }

          .image {
            height: ${h + unit};
            width: ${imageW + unit};
            padding: 1em 2em;
            position: Absolute;
            text-align: center;
            top: 0px;
            right: 0px;
            transition: ${transition};
            background-image: url(${pic});
            background-size: cover;
            background-repeat: no-repeat;
          }

          /* Bottom Card Section */

          .description {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            height: ${h + unit};
            width: ${descriptionW + unit};
            position: absolute;
            bottom: 0em;
            transition: ${transition};
            padding: 0.5em 1em;
            text-align: center;
          }
          .info {
            color: ${theme.colors.secondary};
            height: ${h + unit};
            width: ${descriptionW + unit};
            position: relative;
            top: ${h - 4 + unit};
            transition: ${transition};
            padding: 0.5em 1em;
            display: none;
          }

          .revealed  .description {
            transform: translate(-${descriptionW + unit});
          }

          .revealed .image {
            width: 100%;
          }

          .revealed .info {
            opacity: 0
          }


          @media (max-width: 800px) {
            .card {
                width: 90%;
            }
            
            .revealed .image {
               width: 115%;
            }

            .revealed .description {
                transform: translate(-105%);
            }
      
            .description {
                width: 100%;
            }
            @media (hover: none) {
              .info {
                display: inline
              }
            }
            
        `}
      </style>
    </div>
  );
};

export default Card;
