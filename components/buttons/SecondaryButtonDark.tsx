import { Inter } from 'next/font/google';



const inter = Inter({ subsets: ['latin'] })

interface SecondaryButtonDarkProps extends React.HTMLAttributes<HTMLButtonElement>{
    //Custom propreties go here
    disabled?:boolean
    buttonText?:string
    path:string
}

export default function SecondaryButtonDark({className, disabled, buttonText, path, ...props}:SecondaryButtonDarkProps){


    return (
        <>
            <a href={path}>
                <button 
                    className= {`${inter.className} border-2 rounded-full border-sf_green text-sf_green text-base lg:w-52 w-96 lg:h-16 h-24 sf_buttonHover`}
                >
                    {buttonText}
                </button>
            </a>          
        </>
    );
    
}