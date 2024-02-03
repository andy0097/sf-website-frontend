import Image from "next/image"
import { SecondaryButton } from "../buttons"

interface Props {
    imgSrc: string,
    headline: string,
    desc: string,
    btnText: string,
    path: string
}

export default function CTACard({imgSrc, headline, desc, btnText, path}:Props){

    return(
        <div className="w-full flex flex-col md:flex-row text-sf_white">
            <img
                src={imgSrc} 
                alt='call to action image' 
                className="md:rounded-l-lg md:rounded-r-none rounded-t-lg object-cover md:w-[40%] w-full"    
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