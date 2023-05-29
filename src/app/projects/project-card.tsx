import React from 'react';
import Image, { StaticImageData } from 'next/image';



function ProjectCard(props: {src: StaticImageData, alt: string, title: string, desc: string, link: string}) {
    return ( 
        <a className='project-card' href={props.link} target='_blank'>
            {/* TODO: make dynamic */}
            <Image src={props.src} alt={"placeholder"} className='project-card-img'></Image>
            <div className='project-card-text-section'>
                {/* TODO: make responsive */}
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </a>
     );
}

export default ProjectCard;