import React from 'react';
import Image from 'next/image';

export default function ProfCard(props: {title: string, source: string, altText: string}) {
    return (
        <div className='card-container'>
            <h3 className='card-title'>{props.title}</h3>
            <Image src={props.source} alt={props.altText} className='card-logo'/>
        </div>
    )
}