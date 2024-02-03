'use client'; 

import Image from "next/image";
import { useRef } from "react";
import { PodcastCard } from ".";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import elipse1 from '@/public/img/Ellipse 1.png';
import elipse2 from '@/public/img/Ellipse 2.png';
import elipse3 from '@/public/img/Ellipse 3.png';
import elipse4 from '@/public/img/Ellipse 4.png';
import elipse5 from '@/public/img/Ellipse 5.png';
import elipse6 from '@/public/img/Ellipse 6.png';
import elipse7 from '@/public/img/Ellipse 7.png';
import hero_logo from '@/public/img/hero_logo.svg';


export default function Hero(){

    const app = useRef();
    
    useGSAP(() => {
        
        gsap.timeline({repeat:-1})
        .to('.elipse2',{x:54, y:50, duration:33})
        .to('.elipse2',{x:0, y:0, duration:33});

        gsap.timeline({repeat:-1})
        .to('.elipse3',{x:-40, y:60, duration:20})
        .to('.elipse3',{x:0, y:0, duration:30});

        gsap.timeline({repeat:-1})
        .to('.elipse4',{x:-100, y:-110, duration:25})
        .to('.elipse4',{x:0, y:0, duration:25});

        gsap.timeline({repeat:-1})
        .to('.elipse5',{x:-120, y:85, duration:33})
        .to('.elipse5',{x:0, y:0, duration:33});

        gsap.timeline({repeat:-1})
        .to('.elipse6',{x:97, y:-80, duration:24})
        .to('.elipse6',{x:0, y:0, duration:33});

        gsap.timeline({repeat:-1})
        .to('.elipse7',{x:-92, y:-90, duration:35})
        .to('.elipse7',{x:0, y:0, duration:35});        
    }); 
    return(
        <>
        {/**Create the canvas */}
        <section className="w-full h-screen md:h-[75vh] bg-sf_green realtive flex justify-center items-center">
            {/**moving background */}
            <div className="absolute w-full h-screen md:h-[75vh] z-0">
                <div className="relative overflow-hidden w-full h-full">
                    <div className="absolute md:-bottom-24 bottom-1/2 -left-20 elipse1 w-3/4 md:100%">
                        <Image src={elipse1} alt='moving circle'/>
                    </div>
                    <div className='absolute md:-top-24 top-1/3 md:right-1/3 -right-1/3 elipse2 w-3/4 md:100%'>
                        <Image  src={elipse4} alt='moving circle'/>
                    </div>
                    <div className='hidden md:block absolute -bottom-28 -right-28 elipse3 '>
                        <Image src={elipse3} alt='moving circle'/>
                    </div>
                    <div className='absolute md:bottom-1/2 bottom-50 left-2/3 elipse4'>
                        <Image  src={elipse2} alt='moving circle'/>
                    </div>
                    <div className='absolute md:-bottom-10 bottom-1/3 left-1/3 elipse5'>
                        <Image src={elipse5} alt='moving circle'/>
                    </div>
                    <div className='hidden md:block absolute -top-6 -left-6 elipse6'>
                        <Image src={elipse6} alt='moving circle'/>
                    </div>
                    <div className='hidden md:block absolute top-2/4 left-2/4 elipse7'>
                        <Image  src={elipse7} alt='moving circle'/>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl w-4/5 h-3/4 z-10 text-sf_white relative grid md:grid-cols-12 grid-rows-auto ">
                <div className='md:col-span-7'>
                    <Image className='w-4/3 md:w-full' src={hero_logo} alt="hero logo Sufletul Familiei"/>
                </div>
                <div className='md:col-span-4 self-end'>
                    <PodcastCard/>
                </div>

            </div>
        </section>

        </>
    );

}