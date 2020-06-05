import theme from '../theme';

const Button = ({ img, text }) => (
  <button>
    {img}
    <style jsx>{`
      button {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        border: 2px solid #eaeaea;
        margin: 1.5rem;
        background: transparent;
        fill: ${theme.colors.accent};
        transition: color 0.5s ease, border-color 0.5s ease, fill 0.5s ease;
      }

      button:hover,
      button:focus,
      button:active {
        color: ${theme.colors.secondary};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        fill: ${theme.colors.secondary};
      }

      @media (max-width: 400px) {
        button {
          width: 120px;
          height: 120px;
          margin: 1rem;
        }
      }
    `}</style>
  </button>
);

export default Button;
