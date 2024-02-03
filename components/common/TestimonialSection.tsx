'use client';

import { TestimonialCard } from "@/components/common";


const testimonialData = [
    {imgSrc: '/img/test_profile_photo.png', name: 'Ema Ban 1', desc: 'Jess has been a voice in my life for years now through her books, her Instagram posts, and also this podcast. It is a calm, refreshing reminder that God is mighty in us!'},
    {imgSrc: '/img/test_profile_photo.png', name: 'Ema Ban2', desc: '2This is an example text where we can just see what an testimonial would look on our screen. We like what we do and everything we do it for likes us too'},
    {imgSrc: '/img/test_profile_photo.png', name: 'Ema Ban3', desc: '3This is an example text where we can just see what an testimonial would look on our screen. We like what we do and everything we do it for likes us too. 3This is an example text where we can just see what an testimonial would look on our screen. We like what we do and everything we do it for likes us too'},
]


export default function TestimonialWrap(){

    

    return(
        <div className="w-full grid grid-rows lg:grid-cols-3 lg:gap-x-7 gap-x-0 lg:gap-y-0 gap-y-7 py-5">
            {testimonialData.map((x,i)=>{
                return (
                    <TestimonialCard
                        imgSrc={x.imgSrc}
                        name={x.name}
                        text={x.desc}
                        key={i}
                    />
                );
            })}
        </div>
    )

}