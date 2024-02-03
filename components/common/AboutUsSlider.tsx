'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { TextCarouselElement } from '@/components/common';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({duration:2})

export default function AboutUsSlider(){

    const app = useRef();
    
    useGSAP(() => {
        const tl1 = gsap.timeline();
        tl1.to('.element1',{opacity:0, duration:5})
        

        ScrollTrigger.create({
            animation:tl1,
            trigger: '.element1',
            start: 'top center',
            end: 'top 10%',
            scrub: true,
            
        });

        gsap.utils.toArray(".element").forEach((element)=>{
            const tlenter = gsap.timeline();
            tlenter.fromTo(element,{opacity: 0}, {opacity:1, duration:3})
            .to(element,{opacity: 0});
            

            ScrollTrigger.create({
                animation: tlenter,
                trigger: element,
                start: 'top 75%',
                end:'top 20%',
                scrub: true,
            });
        })

    }); 

    return(
        <div className='max-w-7xl w-4/5 justify-center flex md:py-72 py-24'>
          <div className='flex flex-col w-full md:flex-row justify-between md:space-x-32'>
            <div className='w-full sticky md:top-72 top-32 h-fit z-20'>
              <video className='w-full h-[30vh] md:h-auto' preload="auto" controls src="/public/video/sf_video.mp4"></video>
              <source src="/public/video/sf_video.mp4" type="video/mp4"></source>
            </div>
            <div className='md:w-6/12 max-w-md space-y-72 mt-[10vh] pb-72'>
                <div className="element1">
                    <TextCarouselElement 
                        subtitle='PRIVIRE DE ANSAMBLU'
                        title='Despre ce mai exact este podcastul Sufletul Familiei'
                    />
                </div>
                <div className="element">
                    <TextCarouselElement 
                        title='God’s vision for family'
                        description="We want to speak on God's original design for family, its purpose, its potential in our world, and the responsibility that we all have towards our individual families, as well as our family of brothers and sisters in Christ from the church family."
                    />
                </div>
                <div className="element">
                    <TextCarouselElement 
                        title='God’s vision for family'
                        description="We want to speak on God's original design for family, its purpose, its potential in our world, and the responsibility that we all have towards our individual families, as well as our family of brothers and sisters in Christ from the church family."
                    />
                </div>
                <div className="element">
                    <TextCarouselElement 
                        title='God’s vision for family'
                        description="We want to speak on God's original design for family, its purpose, its potential in our world, and the responsibility that we all have towards our individual families, as well as our family of brothers and sisters in Christ from the church family."
                    />
                </div>
            </div>
          </div>
        </div>
    )
}
