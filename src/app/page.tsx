import Image from 'next/image';
import svgIMG from '../../public/person-working-online.svg';
import ProfCard from './prof-card';
import ReactIcon from '../../public/React-icon.svg';
import NextIcon from 'public/nextjs-icon.svg';
import JSIcon from 'public/javascript.svg';
import PythonIcon from 'public/python.svg';
import SKIcon from 'public/Scikit.svg';
import GitIcon from 'public/Git.svg';
import CssAndHtmlLogo from 'public/css&html.svg';
import SQLLogo from 'public/sql.svg';

import AppLink from './app-link';
import InstaIcon from '/public/my-links-imgs/insta.svg';
import FBIcon from 'public/my-links-imgs/fb.svg';
import TwitterIcon from 'public/my-links-imgs/twitter.svg';
import GithubIcon from 'public/my-links-imgs/github.svg';
import SpotifyIcon from 'public/my-links-imgs/spotify.svg';
import GRIcon from 'public/my-links-imgs/goodreads.svg';
import LinkedInLogo from 'public/my-links-imgs/linkedin.svg';
import IndeedIcon from 'public/my-links-imgs/indeed.svg';

const nextjsLink = "https://nextjs.org/";
const reactLink = "https://react.dev/";
const javascriptLink = "https://www.javascript.com/";
const pythonLink = "https://www.python.org/";
const SKLink = "https://scikit-learn.org/stable/";
const GitLink = "https://git-scm.com/";
const HTMLLink = "https://en.wikipedia.org/wiki/HTML";
const SQLLink = "https://en.wikipedia.org/wiki/SQL";


export default function Home() {
  return (
    <div className="page-container">
      <div className="my-intro">
        <h2>Hi! My name is</h2>
        <h1>Will Oxtoby</h1>
      </div>
      <div className='my-links-section-container'>
        <div className='my-links-section'>
          {/* TODO: link these to actual accounts */}
          <AppLink href="#" src={InstaIcon} alt="Instagram Logo"/>
          <AppLink href="#" src={FBIcon} alt="Facebook logo"/>
          <AppLink href="#" src={TwitterIcon} alt="Twitter Logo"/>
          <AppLink href="#" src={GithubIcon} alt="Github Logo"/>
          <AppLink href="#" src={SpotifyIcon} alt="Spotify Logo"/>
          <AppLink href="#" src={GRIcon} alt="GoodReads Logo"/>
          <AppLink href="#" src={LinkedInLogo} alt="LinkedIn Logo"/>
          <AppLink href="#" src={IndeedIcon} alt="Indeed Logo"/>
        </div>
      </div>
      <div className="initial-content inset-shadow-top-and-bot" id='about-me-buttons'>
        <div className='col-1'>
          <div className='text-container'>
            <h1>About Me</h1> 
            {/* TODO: Write this */}
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
          <div className='about-me-buttons-section'>
            <a className='about-me-button' href = "mailto: will@oxtoby.ca">Email Me</a>
            <a className='about-me-button' href="https://drive.google.com/file/d/1oCiw0J_IdLpzFYVKbHoXbFHF3M06l-fd/view?usp=share_link" download="oxtoby-resume">Download Resume</a>
          </div>
        </div>
        <div className='col-2'>
        <div className='img-container'>
          <Image src={svgIMG} alt='person using computer' className='first-SVG'/>
        </div>
        </div>        
      </div>
      <div className='prof-section'>
        {/* TODO: make title pretty */}
        <div className='prof-title'>
          <h1>What can I do?</h1>
        </div>
        <div className='card-section'>
          <div className='row'>
            <ProfCard source={ReactIcon} title='React' altText='React Logo' link={reactLink} id="react-card"/>
            <ProfCard source={NextIcon} title='Next.JS' altText='Next.js Logo'link={nextjsLink} id="next-card"/>
            <ProfCard source={JSIcon} title='Javascript' altText='Javascriopt Logo'link={javascriptLink} id="js-card"/>
            <ProfCard source={PythonIcon} title='Python' altText='Python Logo'link={pythonLink} id="python-card"/>
          </div>
          <div className='row'>
            <ProfCard source={SKIcon} title='SciKit Learn' altText='Scikit learn Logo'link={SKLink}id="skl-card"/>
            <ProfCard source={GitIcon} title='Git(Hub)' altText='Git Logo'link={GitLink}id="git-card"/>
            <ProfCard source={CssAndHtmlLogo} title='HTML CSS' altText='css and html Logos'link={HTMLLink}id="html-card"/>
            <ProfCard source={SQLLogo} title='SQL' altText='SQL Logo'link={SQLLink}id="sql-card"/>
          </div>
        </div>
      </div>
    </div>
  )
}