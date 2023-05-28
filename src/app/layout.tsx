import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Will's Personal Portfolio"
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
          <h1 className='nav-bar-item'>Home</h1>
          <h3 className='nav-bar-item'>Resume</h3>
          <h3 className='nav-bar-item'>Projects</h3>
          <h3 className='nav-bar-item'>Contact</h3>
        </div>
      </nav>
      {children}
      </body>
    </html>
  )
}
