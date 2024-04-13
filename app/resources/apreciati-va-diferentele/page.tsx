import Image from "next/image";

import blogImg from '@/public/img/blog image.png';
import blogImg2 from '@/public/img/blog image 1.jpg';

export default function Page(){
    


    return(
        <section className="w-full flex flex-col justify-center items-center">
            <div className=" max-w-3xl w-4/5 flex flex-col justify-center items-center">
                {/* The image */}
                <div className="w-full pt-32">
                    <Image
                        src={blogImg}
                        alt="image with a kid touching the light"
                        className="bg-cover"
                    />
                </div>
                <div className=" mb-40">
                    {/* The title */}
                    <div className=" my-10 w-full">
                        <div className=" mb-10">
                            <p className=" text-sf_green">6 November 2023</p>
                        </div>
                        <div className=" mb-7">
                            <h3 className=" text-sf_green">Apreciați-vă diferențele</h3>
                        </div>
                        <div className=" flex">
                            <div>
                                <p className=" text-sf_green font-semibold">Ema Ban</p>
                            </div>
                            <div className=" ml-10 text-sf_green font-semibold">
                                <p>7 minute</p>
                            </div>

                        </div>

                    </div>

                    {/* The text */}
                    <div className="text-sf_green space-y-4 text-lg">
                        <p>Când diferențele sunt prea mari, e o ocazie sau o provocare foarte bună să acorzi mai mult timp relației. Poate sună interesant, deoarece zici, „ei bine, dacă diferențele sunt prea mari și nu ne înțelegem, de ce aș vrea să petrec mai mult timp cu soțul sau soția, concentrându-ne pe relația noastră?” </p>
                        <p>Motivul e simplu: pentru că atunci când petreceți timp împreună și vă concentrați pe aspectele pozitive ale relației, tonalitatea discuției și atitudinea fiecăruia se schimbă. Recent citeam în paginile unei cărți despre relația dintre soț si soție și autorii subliniau un aspect foarte important: chiar dacă în cuplu sunt multe aspecte care ne plac sau le apreciem la celălalt, totuși, alegem să dăm atenție mereu și mereu celor mai puțin plăcute, cu alte cuvinte, să ne concentrăm pe aspectele negative. </p>
                        <div>
                            <Image 
                                src={blogImg2}
                                alt="show image"
                            />
                        </div>
                        <p>Haideți să facem împreună un exercițiu de imaginație: dacă pe o coală albă de hârtie pun cu creionul negru un punct mic, unde îți fuge privirea prima oară? La acel punct negru! Tendința e să ne uităm la ceea ce ne deranjează sau ne atrage atenția și uităm de aspectele pe care le apreciem. Cumva, considerăm că se înțelege de la sine că suntem mulțumitori pentru ceea ce facem spre binele relației. Din nefericire, nu este așa. Situația se va îmbunătăți si diferențele nu vor mai fi așa de mari sau nu vom mai fi noi deranjați atât de tare de ele dacă ne concentrăm pe aspectele pozitive ale relației. John Gottman, David si Claudia Arp, și alți specialiști în domeniul relațiilor, recomandă 5 aprecieri (VERBALE!) pentru fiecare cuvânt de critică. Tot Gottman subliniază cât de important e să comunicăm cu scopul de a-l auzi pe celălalt și nu doar pentru a ne spune păsul, asumându-ne totodată responsabilitatea pentru partea noastră din discuția tensionată.</p>
                        <p>Începeți, așadar, cu pași mici, dar faceți acei pași care vor revigora și consolida relația voastră. Cum ar fi ca săptămâna viitoare să verbalizați zilnic câte un aspect pe care îl apreciați la celălalt? Și nu fiți zgârciți cu cuvintele de laudă! Dragostea crește și se adâncește atunci când fiecare se uită la celălalt prin prisma lui Dumnezeu și pune binele relației dintre soți mai presus de binele individual sau personal. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}