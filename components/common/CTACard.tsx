import Image, { StaticImageData } from "next/image"
import { SecondaryButton } from "../buttons"

interface Props {
    imgSrc: string | StaticImageData,
    headline: string,
    desc: string,
    btnText: string,
    path: string
}

export default function CTACard({imgSrc, headline, desc, btnText, path}:Props){

    return(
        <div className="w-full flex flex-col md:flex-row text-sf_white">
            <Image
                src={imgSrc} 
                alt='call to action image'
                width = '100'
                height='100'
                className="md:rounded-l-lg md:rounded-r-none rounded-t-lg object-cover md:w-[40%] w-full"    
                unoptimized
            />

            <div className="bg-sf_tan py-9 md:px-12 px-28 md:rounded-r-lg md:rounded-l-none rounded-b-lg md:w-[60%] w-full text-center md:text-left">
                <h3>{headline}</h3>
                <p className="py-4">{desc}</p>
                <SecondaryButton
                    buttonText={btnText}
                    path={path}
                />

            </div>

        </div>
    )
    
}