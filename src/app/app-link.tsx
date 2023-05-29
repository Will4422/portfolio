import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AppLink = (props: {href: string, src: string, alt: string}) => {
    return ( 
        <Link href={props.href} target='_blank' className='my-link'>
            <Image src={props.src} alt={props.alt} className='my-link-svg'></Image>
        </Link>
     );
}
 
export default AppLink;