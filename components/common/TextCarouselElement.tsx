interface Props {
    subtitle? : string,
    title? : string,
    description? : string
}

export default function TextCarouselElement({subtitle, title, description}:Props){

    return(
        <div className=" h-[10vh]">
            {subtitle ? (<p>{subtitle}</p>) : ''}
            {title ? (<h2>{title}</h2>) : ''}
            <p>{description}</p>
        </div>
    );
}