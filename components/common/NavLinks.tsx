'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
 

const links = [
    { name: 'Despre noi', href: '/about-us'},
    { name: 'Resurse', href: '/resources' },
    { name: 'Donează', href: '/donate' },
    { name: 'Speakeri', href: '/speakers' },
  ];



export default function NavLinks({onLinkClick}:{onLinkClick? : any}){

    const pathname = usePathname();

    return(
        <>
        {links.map((link) => {
       
        return (
          <Link
            key={link.name}
            href={link.href}
            className= {pathname === link.href ? 'underline' : ''}
            onClick = {onLinkClick}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
        </>
    )
}