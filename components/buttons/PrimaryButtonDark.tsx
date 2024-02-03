import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

interface PrimaryButtonDarkProps extends React.HTMLAttributes<HTMLButtonElement>{
    //Custom propreties go here
    disabled?:boolean
    buttonText?:string
    path?:string
}

export default function PrimaryButtonDark({className, disabled, buttonText, path, ...props}:PrimaryButtonDarkProps){


    return (
        <>
            <a href={path}>
                <button className= {`${inter.className} rounded-full bg-sf_green text-sf_white text-base w-52 h-12 sf_buttonHover`}>
                    {buttonText}
                </button>
            </a>          
        </>
    );
    
}

