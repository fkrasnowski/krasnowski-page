import Flex from './flex';
import { createRef } from 'react';
import theme from '../theme';

export const navRef = createRef();

const NavBar = ({ children, className }) => (
  <nav className={className} ref={navRef}>
    {children ? (
      <>
        <Flex justify='flex-start'>{children[0]}</Flex>
        <Flex justify='center'>{children[1]}</Flex>
        <Flex justify='flex-end'>{children[2]}</Flex>
      </>
    ) : (
      ''
    )}
    <style jsx>{`
      nav {
        fill: ${theme.colors.secondary};
        position: sticky;
        top: 0px;
        width: 100%;
        height: 50px;
        background-color: transparent;
        color: ${theme.colors.secondary};
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
      }
    `}</style>
  </nav>
);

export default NavBar;
