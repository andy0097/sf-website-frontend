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
                            <h3 className=" text-sf_green">Ce este jugul (ne)potrivit / (in)compatibilitatea spirituală </h3>
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
                    <div className="text-sf_green space-y-8 text-lg">
                        <p className=" text-xs"> citește mai jos primul blog #SufletulFamiliei și  ascultă primul episod al podcastului nostru</p>
                        <p> Amintim metafora jugului în descrierea relației dintre soți în cadrul căsniciei ori de câte ori ținem sesiuni cu tinerii, fie că sunt deja logodiți și vin la sesiunile de premarital sau într-o relație serioasă de prietenie cu o finalitate clară și iminentă. Pentru unii, aceasta înseamnă ceva înjositor, care se aplică doar animalelor. Dar nu este nicidecum o insultă, ci este o metaforă care poate explica mult mai bine ceea ce dorim să subliniem</p>
                        <p> Din punct de vedere practic, jugul este un cadru de lemn care se pune la gâtul animalelor când trag la căruţă sau plug. Și da, în ultimii ani a fost tot mai greu pentru cei din audiență să își imagineze ceva ce chiar nu văzuseră până atunci, dar nimic mai ușor decât tastarea acestui cuvânt în motorul de căutare google și imaginea e în câteva secunde în fața lor.</p>
                        <div>
                            <Image 
                                src={blogImg2}
                                alt="show image"
                            />
                        </div>
                        <p> În acest context, Apostolul Pavel, când face referire la căsătorie, scrie următoarele: „Nu vă înjugaţi la un jug nepotrivit cu cei necredincioşi. Căci ce legătură este între neprihănire şi fărădelege? Sau cum poate sta împreună lumina cu întunericul?”(2 Corinthians 6:14). Iar în acest punct, de multe ori amintim audienței că este singurul criteriu de incompatibilitate pe care îl găsim pe paginile Noului Testament atunci când te întrebi dacă sau nu să începi o relație. Cu alte cuvinte, atunci când te căsătoreşti cu cineva care nu are aceaşi ţintă în viaţă, cum crezi că vei putea merge înainte? Dacă tu spui că-l urmezi pe Hristos şi viitoarea ta soţie nu are acelaşi ţel cum crezi că va evolua relația? </p>
                        <p> Deseori în aceste condiţii ori unul cedează ori se frânge jugul! Așa cum spune un autor, „Apostolul Pavel a știut că un parteneriat sănătos între soți se bazează pe maturitatea lor spirituală și având ca și fundament credința acestora.” Același autor continuă, și atrage atenția că jugul este doar „o parte din discuție. Să zicem că cei doi reușesc să intre cu bine în partea lor de jug. Cu toate acestea, cei doi nu vor reuși să meargă cu bine înainte și să facă progres decât atunci când amândoi păseșc în echipă.”</p>
                        <p>Dacă ești deja într-o relație, fie că este o relație de prietenie înainte de căsătorie, fie că ești deja căsătorit, pune-ți întrebarea ce poți face AZI, sau, de-acum încolo, și cum poți să mergi mai departe împreună cu celălalt, având aceeași destinație și menținând același ritm. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}