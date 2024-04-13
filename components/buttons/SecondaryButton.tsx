import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

interface SecondaryButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    //Custom propreties go here
    disabled?:boolean
    buttonText?:string
    path:string
}

export default function SecondaryButton({className, disabled, buttonText, path, ...props}:SecondaryButtonProps){


    return (
        <>
            <a href={path}>
                <button className= {`${inter.className} border-2 rounded-full border-sf_white text-sf_white text-base px-6 w-full md:h-16 h-20 sf_buttonHover`}>
                    {buttonText}
                </button>
            </a>          
        </>
    );
    
}