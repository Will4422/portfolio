import React from 'react';
import Image from 'next/image';

function ProjectCard(props: {src: string, alt: string, title: string, desc: string}) {
    return ( 
        <div className='project-card'>
            {/* TODO: make dynamic */}
            <Image src={props.src} alt={props.alt}></Image>
            <div>
                {/* TODO: make responsive */}
                <h2>Title</h2>
                <p>Description</p>
            </div>
        </div>
     );
}

export default ProjectCard;