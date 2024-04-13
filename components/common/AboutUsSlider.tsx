'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { TextCarouselElement } from '@/components/common';
import { ScrollTrigger } from "gsap/all";
import { Suspense } from 'react'
import VideoComponent from '../utils/HeroVideo';

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

        gsap.utils.toArray(".element").forEach((element:any)=>{
            const tlenter = gsap.timeline();
            tlenter.fromTo(element,{opacity: 0}, {opacity:1, duration:3})
            .to(element,{opacity: 0});
            

            ScrollTrigger.create({
                animation: tlenter,
                trigger: element,
                start: 'top 80%',
                end:'top top',
                scrub: true,
            });
        })

    }); 

    return(
        <div className='max-w-7xl w-4/5 justify-center flex md:py-72 py-24'>
            
          <div className='flex flex-col w-full md:flex-row justify-between md:space-x-32'>
            <div className='w-full sticky md:top-72 top-32 h-fit z-20'>
                <div className='w-full md:h-auto'>
                    <Suspense fallback={<p>Loading video...</p>}>
                        <VideoComponent />
                    </Suspense>
                </div>
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
                        title='Lecții și experiențe de viață'
                        description="Sufletul familiei s-a născut din dorința noastră de a împărtăși cu ascultătorii lecții de viață precum și experiența multor cupluri și a familiilor cu care ne-am întâlnit în cadrul sesiunilor și a seminarelor pe care le-am susținut de-a lungul anilor."
                    />
                </div>
                <div className="element">
                    <TextCarouselElement 
                        title='Impact și influență în comunitate'
                        description="Familia este prețioasă pentru noi. Pasiunea noastră este să vedem soți și soții umblând cu Domnul și încurajându-se unul pe altul în relația lor unul cu altul precum și cu copiii lor, fiind acea familie care are un impact pozitiv în comunitate. "
                    />
                </div>
                <div className="element">
                    <TextCarouselElement 
                        title='Despre familie și pentru familie'
                        description="Tematicile discutate sunt de interes pentru familie și relațiile dintre cei care formează familia. Așteptările noastre în cadrul acestor relații, cunoașterea și aprecierea diferențelor dintre noi, modul în care comunicăm și gestionăm conflictele care apar, finanțele, relația intimă, dezvoltarea și aprecierea personală precum și a rolului și chemării date de Dumnezeu fiecăruia dintre soți."
                    />
                </div>
                <div className="element">
                    <TextCarouselElement 
                        title=''
                        description="Tematicile de bază ale cărții Vreau sî ma căsătoresc sunt tematicile pe care le veți regăsi discutate în acest podcast, discuțiile fiind moderate de Adelina Nistor, prietena și colaboratoarea noastră cu expertiză în domeniul media."
                    />
                </div>
            </div>
          </div>
        </div>
    )
}
