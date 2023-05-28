
import Image from 'next/image';
import svgIMG from '../../public/person-working-online.svg';
import ProfCard from '../../public/prof-card';
import ReactIcon from '../../public/React-icon.svg';

export default function Home() {
  return (
    <div className="page-container">
      <div className="my-intro">
        <h2>Hi! My name is</h2>
        <h1>Will Oxtoby</h1>
      </div>
      <div className="initial-content inset-shadow-top-and-bot">
        <div className='text-container'>
          <h1>About Me</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className='img-container'>
          <Image src={svgIMG} alt='person using computer' className='first-SVG'/>
        </div>
      </div>
      <div className='prof-section'>
        <h1>Proficiencies</h1>
        <div className='card-section'>
          <div className='row'>
            <ProfCard source={ReactIcon} title='React' altText='React Logo'/>
            <ProfCard source={ReactIcon} title='React' altText='React Logo'/>
            <ProfCard source={ReactIcon} title='React' altText='React Logo'/>
            <ProfCard source={ReactIcon} title='React' altText='React Logo'/>
          </div>
          <div className='row'>
            <ProfCard source={ReactIcon} title='React' altText='React Logo'/>
            <ProfCard source={ReactIcon} title='React' altText='React Logo'/>
            <ProfCard source={ReactIcon} title='React' altText='React Logo'/>
            <ProfCard source={ReactIcon} title='React' altText='React Logo'/>
          </div>
        </div>
      </div>
      <footer>
        
      </footer>
    </div>
  )
}