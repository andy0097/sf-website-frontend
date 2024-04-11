import Image from "next/image";
import Link from "next/link";



type Props = {
    title : string,
    publishedDate : string,
    summary : string,
    imgSrc : string
}

export default function CardBlogPost({title, publishedDate, summary, imgSrc} : Props) {
  
    

    return (
        <div className=' w-full md:max-w-96 md:h-[34rem] h-[40rem] bg-sf_offwhite rounded-xl cursor-pointer text-left shadow-sm hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out' >
            <div className="h-[40%]  relative">
                <Image
                    src={imgSrc}
                    alt= "picture for blog"
                    fill = {true}
                    className=" object-cover rounded-xl"
                />
            </div>
            <div className=" h-[60%] p-4 grid content-evenly">
                <div className=" text-sf_green font-medium">
                    <p>{publishedDate}</p>
                </div>
                <div className=" h-24 text-sf_green overflow-hidden">
                        <h3 className="text-wrap">{title}</h3>
                </div>
                <div className=" h-24 text-sf_green overflow-hidden">
                        <p className="text-wrap">{summary}</p>
                </div>
                <div className="text-sf_green">
                        <p className=" underline">Citește articolul</p>
                </div>
            </div>
        </div>
  )
}

