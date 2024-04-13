'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { TextCarouselElement } from '@/components/common';
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

import image1 from '@/public/img/aboutus_hero_image.png';

const data = [
    {title:'Vara din 2005', text:'Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.'},
    {title:'Vara din 2010', text:'Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.'},
    {title:'Vara din 2015', text:'Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.'},
];

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHeroSlider(){

    const height ='h-['+ data.length * 100 + 'vh]';

    // Initialize GSAP
    // useGSAP(() => {


    //     const slides = gsap.utils.toArray('.slide'),
    //     tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.slide-container',
    //             scrub: 1,
    //             start: 'top 50%',
    //             end: '+=2500px',
    //             anticipatePin: 1,               
                
    //         }
    //     });

    
    //     gsap.set(slides, {opacity: 0});
    //     tl.to(slides, {
    //         keyframes: {
    //             opacity: [0,1,0]
    //         },
    //         ease: "power1.inOut",
    //         stagger: 3,
    //         duration: 5,
    //     });
    // });
    

    return(
        <section className="bg-sf_offwhite w-screen h-fit flex justify-center">
            <div className={`w-full justify-start flex flex-col lg:flex-row lg:pt-20`}>
                <div className=" w-10/12  lg:w-7/12 max-w-3xl  sticky top-8 lg:top-0 h-fit z-10" >
                    <Image
                        src={image1}
                        alt='photo with Adi & Ema Ban laughing'
                        className="w-full"
                    />
                </div>
                <div className='w-full lg:w-5/12 px-14 max-w-2xl text-sf_green space-y-12 mt-52 top-40 h-fit z-0'>
                    <div >
                        <h2>Povestea noastră</h2>
                    </div>
                    <div className="align-top relative pb-10 space-y-6">
                        <p>
                        Ce înseamnă pentru voi cuvintele „proiecte de suflet”? Ați fost vreodată implicați în astfel de inițiative? Este vorba despre proiecte care animează și vă motivează să dăruiți înspre comunitatea din jurul vostru, devenind astfel o verigă într-un lanț binecuvântător. Cam asta este pentru noi acest podcast devenit realitate după ani de așteptare.
                        </p>
                
                        <p>
                        Gândul s-a înfiripat în mintea noastră cu ani în urmă, însă experiența anilor de căsnicie și lucrare ne-a învățat că uneori lucrurile de valoare se lasă așteptate. Din mai multe perspective, totul a început cu o întrebare: “Adi, mergem la prima sesiune de consiliere pre maritală?” Eram studenți în SUA. Biserica pe care o frecventam de trei ani în acel moment și eram familiarizați cu lucrările desfășurate în sprijinul membrilor ei (College Church din Wheaton) anunțase începerea acestor sesiuni. Pe noi ne mai despărțeau câteva luni de marele eveniment în care deveneam “Mr and Mrs” or “the Bans”, așa că eu am considerat absolut oportună înscrierea noastră pentru a participa la întâlnirile respective. Entuziasmul meu s-a întâlnit cu spiritul de analiză al lui Adi. Pentru că “dragostea de început” și pentru că “îmi place să petrec timp cu tine”, Adi a fost de-acord să mergem la prima sesiune. „The rest – as they say, is history”. Sunt mulțumitoare Domnului, însă, că e istoria noastră sau experiența noastră de viață, fiind îngăduită ca să ne crească în dragoste față de El și unul de altul, să ne maturizeze, și să ne pregătească pentru următorii 20 de ani, ani în care am continuat să fim parte al acestui proces. Rolurile însă s-au schimbat, și din studenți am devenit educatori, fiind coordonatori ai seminarului de consiliere pre maritală, fie că a fost susținut în biserica din care facem parte, în cadrul unor conferințe educaționale sau în ieșiri special organizate pentru tineri și familii.
                        </p>
    
                        <p>
                        Un pas foarte important în acest proces a fost scrierea cărții “Vreau să mă căsătoresc” (Editura Scriptum Oradea), carte scrisă împreună cu mentorii și prietenii noștri buni David si Claudia Arp (recent am sărbătorit 25 de ani de prietenie!). David si Claudia sunt consilieri maritali de zeci de ani buni, iar inima lor bate pentru cupluri aflate înainte de căsătorie, în primii ani, cu copii adolescenti, sau în a doua parte a căsătoriei. La această a doua parte am ajuns de-acum și noi, și apreciem atat de mult sfaturile si încurajările lor. Odată scrisă cartea, ea a devenit manualul pentru sesiunile de consiliere pre maritală, iar tematicile abordate ne-au oferit un material de referință în cadrul întâlnirilor noastre cu tineri aflați înainte de căsătorie.
                        </p>
                            
                        <p>
                        De-a lungul anilor, însă, am simțit adesea că am putea face mai mult și ne-ar place să găsim o cale prin care să fim o încurajare pentru mai multe cupluri și familii. Dumnezeu ne-a scos în cale multe oportunități de implicare și ultimii doi ani au fost aproape în totalitate dedicați familiilor din diverse părți ale lumii, în mod special familii din biserici evanghelice române din diaspora americană, canadiană și vest europeană, Ucraina și Tanzania. Dar faptul că trăim într-o eră digitală, aducea mereu și mereu în fața noastră o oportunitate care rămăsese neadresată.
                        </p>
            
                        <p>
                        Prietenii sunt lăsați de Domnul în jurul tău să te susțină, să te încurajeze, să se roage pentru tine, dar și să îți evidențieze slujiri în care ai putea să te implici. Adelina Ghilea (Nistor de-acum) a fost o astfel de prietenă pentru noi. De câțiva ani încoace, ori de cate ori ne întâlneam aducea în discuție un proiect în care, zicea ea, tare i-ar plăcea să colaborăm. Despre ce era vorba? Un podcast sau o serie de podcasturi în care să discutăm împreună pe marginea tematicilor cărții “Vreau să mă căsătoresc”. Același entuziasm al meu din tinerețe s-a întâlnit din nou cu spiritul de analiză al lui Adi. Și iată un mic spoiler: ascultând podcastul, veți distinge adesea aceste laturi ale personalităților noastre și poate veți zâmbi. Da, în orice căsnicie există diferențe de abordare a unei anumite situații, însă frumusețea e atunci când sunt gata să primesc și să accept părerea celuilalt, și să fiu gata să înțeleg de ce dorește să facă sau să nu facă soțul sau soția mea. Deși niciunul dintre noi nu punea la îndoială beneficiile acestor episoade ale podcastului pentru ascultători, erau aspecte de logistică și organizare, ca să nu mai menționăm finanțare, ce ne făceau să inspirăm adânc înainte de a lua decizia de a ne aventura într-un astfel de proiect. Și astfel, am făcut ceva ce facem zilnic de când am pornit călătoria în doi pe acest pământ: ne-am rugat împreună! Ne-am rugat și am așteptat. Așteptarea nu e niciodată ușoară, mai ales când proiectul în cauză îți este atât de drag. Uitându-ne în urmă, însă, vedem cum lucrurile s-au aliniat atât de frumos atunci când a fost momentul potrivit.
                        </p>

                        <p>
                        Și uite așa, anul trecut, la finalul verii, înregistram episodul pilot pentru podcastul „Sufletul familiei”, nume pe care l-am ales la recomandarea lui Andy, fiul nostru cel mai mare. Da, am luat în considerare mai multe variante de nume, însă în final am rămas la aceasta deoarece credem că reprezintă cel mai bine gândul pe care Domnul ni l-a pus în minte de a veni în ajutorul familiei și a relațiilor din cadrul unei familii creștine. Pentru noi a fost și este foarte important să discutăm despre aspecte ce țin de creșterea și maturizarea unei familii, însă și mai important este să le privim pe toate din perspectiva lui Dumnezeu, Cel care a instituit familia. Având această perspectivă a eternității, discuțiile iau o altă însemnătate, iar exemplele și sfaturile sunt menite să ne conducă înspre o trăire mai frumoasă pentru Creatorul nostru.
                        </p>
                
                        <p>
                        Episodulului pilot i-au urmat alte nouă episoade în care am discutat rând pe rând tematici precum „Așteptări în căsătorie”, „Aprecierea diferențelor”, „Comunicarea”, „Gestionarea sau rezolvarea conflictelor”. Au urmat apoi discuții pe teme financiare, a relației intime, a rolurilor în căsătoria creștină, a teologiei familiei, și un episod special pentru Crăciun. Întrebările formulate de Adelina în urma aprofundării cărții sunt cele care ghidează discuția noastră, însă mereu am dat atenție diverselor întrebări care ne veneau din partea audienței în cadrul sesiunilor pentru familii susținute în ultimii doi ani cu familii. Și desigur, răspunsurile reprezintă experiența celor două zeci de ani de lucrare cu tinerii înainte de căsătorie precum și familii tinere. Toate aceste situații și exemple de viață sunt aduse în fața ascultătorilor, cu intenția de a oferi îndemn și sprijin. Iar așa cum afirmam într-unul din paragrafele anterioare, au fost momente în care diferențele de opinii sau de preferințe au fost mai accentuate. Cum am gestionat situația? Ascultați podcastul, și veți afla răspunsul!
                        </p>
                        
                        <p>
                        Cititori dragi, ne-ar face o mare plăcere să vă avem ca și ascultători în cadrul acestui proiect de suflet! Iar dacă veți găsi drept folositoare îndemnurile noastre, împărtășiți cu cei din jurul vostru detaliile despre modalitățile în care pot și ei, la rândul lor, să ne asculte. M-aș bucura mult, de asemenea, să știu că ne susțineți în rugăciune. Niciun proiect în care am fost implicați până acum nu a fost fără piedici sau provocări. Ziua în care am citit câteva statistici încurajatoare după două luni de difuzare ale podcastului, a coincis cu ziua în care a trebuit să facem față unor piedici de natură personală. Știm însă că în spatele acestora nu stau oamenii care ne descurajează prin cuvintele lor, ci cel rău care încearcă din răsputeri să ajungă la familiile noastre. Dar Isus, prin jertfa lui supremă, a învins moartea și iadul, și de-acum stă la dreapta Tatălui și mijlocește pentru noi. Nu uitați acest lucru, mai ales atunci când vă implicați în lucrare. Ori de câte ori am stat în fața unor lucrări cu folos pentru Împărăție, provocările nu au încetat să apară. Unele le-am gestionat mai ușor, altele au fost mai spinoase, însă rugăciunea și vegherea, precum și faptul că am stat împreună ca și soț și soție în mijlocire înainte Domnului, a adus alinare și rezolvare.
                        </p>
                    </div>

                    {/* Section with fade in text */}
                    {/* <div className={'slide-container align-top relative'+' '}>
                        {data.map((x,i)=>{
                            return (
                                <AboutUsSlide
                                    title={x.title}
                                    text={x.text}
                                    className=' slide'
                                    key={i}
                                />
                            );
                        })}
                        
                        
                    </div> */}
                </div>
            </div>
        </section>
        
        
    )
}
