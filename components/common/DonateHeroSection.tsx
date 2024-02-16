'use client';

import {useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import imageHero from '@/public/img/get_involved_hero.png';
import verticalLine from '@/public/img/horizontal line.svg';


export default function DonateHeroSection(){
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if(ref.current){
            console.log(height);
            setHeight(ref.current.clientHeight);
        }      
    },[height])
    return(
        <section>
            <div className={"hidden relative lg:flex justify-center"}>
                <div className="w-full bg-sf_browngrey flex absolute top-20 justify-end z-10 max-h-[100vh]">
                    <div className="w-1/2 flex justify-end">
                        <Image
                        src={imageHero}
                        alt='Adi and Ema Ban holding in a field'
                        ref = {ref}
                        />
                    </div>
                </div>
                <div className={'max-w-7xl w-4/5 flex flex-row z-20 mt-20 space-x-32 items-center' + ' ' + 'h-[' + height + 'px]'} >
                    <div className='h-full flex justify-center'>
                        <Image
                            src={verticalLine}
                            alt = 'a vertical line'
                        />
                    </div>
                    <div className="w-1/2 text-white my-44 h-fit max-w-[418px]">
                        <h2>Your support and generosity makes it possible for us to create resources that invite followers of Jesus and families to experience transformation.</h2>
                    </div>
                </div>
            </div>
            <div className={"lg:hidden flex flex-col items-center w-full bg-sf_browngrey"}>
                <div className={'max-w-7xl w-4/5 flex flex-row z-20 mt-20 space-x-32 items-center'} >
                    <div className='h-full flex justify-center'>
                        <Image
                            src={verticalLine}
                            alt = 'a vertical line'
                        />
                    </div>
                    <div className="w-1/2 text-white my-44 h-fit">
                        <h2>Your support and generosity makes it possible for us to create resources that invite followers of Jesus and families to experience transformation.</h2>
                    </div>
                </div>
                <div className="w-full bg-sf_browngrey flex top-20 justify-end z-10">
                    <div className="w-full flex justify-center">
                        <Image
                        src={imageHero}
                        alt='Adi and Ema Ban holding in a field'
                        className='w-full h-auto'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};