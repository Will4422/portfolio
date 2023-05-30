import './globals.css'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import homeSVG from 'public/home.svg';
import clipboardSVG from 'public/clipboard.svg';
import codeSVG from 'public/code.svg';
import mailSVG from 'public/mail.svg';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })
const nextjsLink = "https://nextjs.org/";
const reactLink = "https://react.dev/";

export const metadata = {
  title: "Will Oxtoby"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className='nav-row'>
            <Link href="/" className='nav-bar-item'><h1>Home</h1></Link>
            <Link href="/resume" className='nav-bar-item'><h1>Resume</h1></Link>
            <Link href="/projects" className='nav-bar-item'><h1>Projects</h1></Link>
            <Link href="/#about-me-buttons" className='nav-bar-item'><h1>Contact</h1></Link>
          </div>
        </nav>
        {children}
        <footer>
          <div className='footer-row-1'>
            <div className='col'>
              <Link href="/">
                <div className='footer-item'>
                  <Image src={homeSVG} alt='home' id='footer-item-svg'></Image><h1>Home</h1>
                </div>
              </Link>
              <Link href="/resume">
                <div className='footer-item'>
                  <Image src={clipboardSVG} alt='resume' id='footer-item-svg'></Image><h1>Resume</h1>
                </div>
              </Link>
              <Link href="/projects">
                <div className='footer-item'>
                  <Image src={codeSVG} alt='code symbol'></Image><h1>Projects</h1>
                </div>
              </Link>
              <Link href="/#about-me-buttons">
                <div className='footer-item'>
                  <Image src={mailSVG} alt='mail'></Image><h1>Contact</h1>
                </div>
              </Link>
            </div>
            <div className="col" id='thanks-for-visiting'>
              <p>Thanks for visiting! 👋</p>
            </div>
          </div>
          <div className='footer-row-2'>
            <p>This site was built with <Link href={nextjsLink} className='external-link' target='_blank'>Next.js</Link> and <Link href={reactLink} className='external-link' target='_blank'>React</Link></p>
          </div>
        </footer>
      </body>
    </html>
  )
}
