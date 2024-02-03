import Image from 'next/image'

interface Props {
    imgSrc : string,
    name : string,
    text : string
}

export default function TestimonialCard({imgSrc, name, text} : Props){

    return(
        <div className="h-[500px] bg-sf_offwhite max-w-[392px] drop-shadow-md py-[36px] rounded-[12px] px-[10px] flex flex-col items-center justify-evenly">
            <div className="h-4/12">
                <Image 
                    src={imgSrc} 
                    alt='testimonial rouded photo'
                    width={128}
                    height={128}
                />
            </div>
            <div className="h-[96px]">
                <h2>{name}</h2>
            </div>
            <div className=" h-[188px] w-4/5 overflow-hidden text-ellipsis lg:text-sm">
                <p>{text}</p>
            </div>
        </div>
    );

}