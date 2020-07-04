import theme from '../theme';

const Card = ({ children, pic }) => {
  const transition = 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)';
  const unit = 'rem';
  const h = 17;
  const w = 47;
  const imageW = 30;
  const descriptionW = w - imageW;
  return (
    <div className='property-card'>
      <a>
        <div className='property-image'></div>
      </a>
      <div className='property-description'>{children}</div>
      <p className='property-info'>Press to reveal</p>
      <style jsx>
        {`
          .property-card {
            height: ${h + unit};
            width: ${w + unit};
            display: flex;
            flex-direction: column;
            position: relative;
            transition: ${transition};
            border-radius: 10px;
            overflow: hidden;
          }
          .property-image {
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

          .property-description {
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
          .property-info {
            color: ${theme.colors.secondary};
            height: ${h + unit};
            width: ${descriptionW + unit};
            position: relative;
            top: ${h - 4 + unit};
            transition: ${transition};
            padding: 0.5em 1em;
            display: none;
          }

          .property-card:active  .property-description {
            transform: translate(-${descriptionW + unit});
          }

          .property-card:active .property-image {
            width: 100%;
          }

          .property-card:active .property-info {
            opacity: 0
          }


          @media (max-width: 800px) {
            .property-card {
                width: 90%;
            }
            .property-card:active .property-image {
               width: 115%;
            }

            .property-card:active .property-description {
                transform: translate(-105%);
            }
            .property-description {
                width: 100%;
            }
            .property-info {
              display: inline;
            }
        `}
      </style>
    </div>
  );
};

export default Card;
