import Head from 'next/head';
import Link from 'next/link';
import { createRef } from 'react';
import { NavBar, HeaderBox } from '../components/nav-header-box';
import Button from '../components/button';
import Card from '../components/card';
import Padding from '../components/padding';
import RoundButton from '../components/round-button';
import PicCard from '../components/pic-card';
import { Logo, LinkedInIcon, GitHubIcon, MailIcon } from '../components/svg';
import { Menu, RevealMenu } from '../components/menu';

const projectsRef = createRef();
const aboutRef = createRef();
const contactRef = createRef();
export default () => (
  <div className='container'>
    <Head>
      <title>Krasnowski</title>
      <link rel='icon' href='/kr.ico' />
      <link
        href='https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'
        rel='stylesheet'
      ></link>
    </Head>
    <div id='top' />
    <RevealMenu>
      <Padding h='40px' />
      <Button scrollTo={projectsRef} minus={80}>
        Projects
      </Button>
      <Button scrollTo={aboutRef} minus={80}>
        About
      </Button>
      <Button scrollTo={contactRef} minus={80}>
        Contact
      </Button>
    </RevealMenu>
    <NavBar>
      <>
        <Logo />
        <Button>Krasnowski</Button>
      </>
      <></>
      <>
        <Menu>
          <Button scrollTo={projectsRef} minus={80}>
            Projects
          </Button>
          <Button scrollTo={aboutRef} minus={80}>
            About
          </Button>
          <Button scrollTo={contactRef} minus={80}>
            Contact
          </Button>
        </Menu>
      </>
    </NavBar>
    <HeaderBox>
      {' '}
      <h1 className='title'>
        My name is
        <br />
        <h2 className='name'>Franciszek Krasnowski</h2>
        and I am IT hothead
      </h1>
    </HeaderBox>
    <main>
      <h1 ref={projectsRef}>Some Projects</h1>

      <div className='grid'>
        <Card href='/'>
          <h3>Styled Proxy 💄</h3>
          <p>
            An exprimental css-in-js library to style components using Proxy.
          </p>
        </Card>

        <Card href='https://www.npmjs.com/package/extensions.macro'>
          <h3>JavaScript Extensions 🧩</h3>
          <p>A Babel macro inspired by Kotlin's extensions.</p>
        </Card>

        <Card href='https://github.com/fkrasnowski/anyall.macro'>
          <h3>anyall.macro 🐸</h3>
          <p>A macro making multiple values comparison easy.</p>
        </Card>

        {/* <Card href='/'>
          <h3>Firepit 🔥</h3>
          <p>Dart package for fetching Firebase data offline.</p>
        </Card> */}
        <Card href='https://github.com/fkrasnowski/useVisibilityPercentage'>
          <h3>use-visbility-percentage</h3>
          <p>A react hook to measure visibility of element on screen</p>
        </Card>
      </div>

      <Padding h='2rem' />
      <h1 ref={aboutRef}>That's me</h1>
      <Padding h='3rem' />
      <PicCard pic='/me.jpg'>
        <h3>
          I'm an extravert 😎. I like meeting new people as well as discover new
          places, especially if there's good beer 🍻. Picking and brewing herbs
          makes me mellow 🌿.
        </h3>
      </PicCard>
      <Padding h='3rem' />
      <h1 ref={contactRef}>Contact me</h1>
      <div className='grid'>
        <div>
          <RoundButton img={<LinkedInIcon />} />
          <RoundButton img={<GitHubIcon />} />
        </div>
        <RoundButton img={<MailIcon />} />
      </div>
    </main>
    <footer>
      <Button>Go to top</Button>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        /* padding: 0 0.5rem; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-weight: 500;
        /* font-size: 4rem; */
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .grid div {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 800px;
      }

      .logo {
        height: 1em;
      }

      .name {
        font-family: 'Permanent Marker', cursive;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        background: black;
        color: white;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
