import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfCard(props: {title: string, source: string, altText: string, link: string, id: string}) {
    return (
        <div className='my-flex'>
                <a href={props.link} target='_blank' className='card-container' id={props.id}>
                    <h3 className='card-title' id={props.id+"-text"}>{props.title}</h3>
                    <Image src={props.source} alt={props.altText} className='card-logo'/>
                </a>
        </div>
    )
}