
interface Props {
    title: string
    text: string
    className: string
}

export default function AboutUsSlide({title, text, className}:Props){

    return(
        <div className={'absolute'+ ''+className}>
            <h3>{title}</h3>        
            <div className='mt-12'>
                <p className="">
                    {text}
                </p>
            </div>
        </div>
    )
}