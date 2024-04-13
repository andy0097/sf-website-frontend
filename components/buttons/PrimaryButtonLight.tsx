import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

interface PrimaryButtonLightProps extends React.HTMLAttributes<HTMLButtonElement>{
    //Custom propreties go here
    disabled?:boolean
    buttonText?:string
    path:string
}

export default function PrimaryButtonLight({className, disabled, buttonText, path, ...props}:PrimaryButtonLightProps){


    return (
        <>
            <a href={path}>
                <button className= {`${inter.className} rounded-full bg-sf_white text-sf_green text-base w-52 h-14 sf_buttonHover`}>
                    {buttonText}
                </button>
            </a>          
        </>
    );
    
}