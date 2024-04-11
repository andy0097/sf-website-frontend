'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { AboutUsSlide } from '@/components/common';
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

import image1 from '@/public/img/aboutus_hero_image.png';

const data = [
    {title:'Vara din 2005', text:'Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.'},
    {title:'Vara din 2010', text:'Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.'},
    {title:'Vara din 2015', text:'Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.'},
];

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHeroSlider(){

    const height ='h-['+ data.length * 100 + 'vh]';

    // Initialize GSAP
    useGSAP(() => {


        const slides = gsap.utils.toArray('.slide'),
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.slide-container',
                scrub: 1,
                start: 'top 50%',
                end: '+=2500px',
                anticipatePin: 1,               
                
            }
        });

    
        gsap.set(slides, {opacity: 0});
        tl.to(slides, {
            keyframes: {
                opacity: [0,1,0]
            },
            ease: "power1.inOut",
            stagger: 3,
            duration: 5,
        });

    });
    

    return(
        <section className="bg-sf_offwhite w-screen h-fit flex justify-center">
            <div className={`w-full justify-start flex flex-col lg:flex-row lg:pt-20 h-[150vh]`}>
                <div className="w-10/12  lg:w-7/12 max-w-4xl  sticky top-8 lg:top-0 h-fit" >
                    <Image
                        src={image1}
                        alt='photo with Adi & Ema Ban'
                        className="w-full"
                    />
                </div>
                <div className='w-full lg:w-5/12 px-14 max-w-2xl text-sf_green space-y-12 mt-52 sticky top-32 h-fit'>
                    <div className=" top-1/2 lg:top-52">
                        <h2>Povestea noastră</h2>
                    </div>
                    <div className={'slide-container align-top relative'+' '}>
                        {data.map((x,i)=>{
                            return (
                                <AboutUsSlide
                                    title={x.title}
                                    text={x.text}
                                    className=' slide'
                                    key={i}
                                />
                            );
                        })}
                        
                    </div>
                </div>
            </div>

        </section>
        
    )
}
