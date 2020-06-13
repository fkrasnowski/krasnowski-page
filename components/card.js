import theme from '../theme';
const Card = ({ href, newTab = true, children }) => (
  <a href={href} target={newTab ? '_blank' : '_self'} className='card'>
    {children}
    <style jsx>{`
      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        max-width: 400px;
        transition: color 0.5s ease, border-color 0.5s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: black;
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
      }

      .card :global(h3) {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card :global(p) {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
        word-break: normal;
      }
    `}</style>
  </a>
);

export default Card;
