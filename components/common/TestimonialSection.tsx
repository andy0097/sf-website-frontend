'use client';

import { TestimonialCard } from "@/components/common";


const testimonialData = [
    {imgSrc: '/img/test_profile_photo.png', name: 'Ema', desc: 'Sunt binecuvântată să îi am pe Adi și Ema ca și parents-in-law (sună mai bine decât socrii)! Trebuie să mărturisesc că la început am fost intimidată și pe alocuri reticientă la gândul de a face consiliere premaritală cu viitorii mei socrii. Acum mă bucur că am ales să facem asta!După ce veți asculta și voi podcast-urile veți înțege de ce!'},
    {imgSrc: '/img/test_profile_photo.png', name: 'David și Anca', desc: 'Podcastul “Sufletul Familiei” îmi oferă momente foarte bune de autoexaminare. Experiența în consilierea de cuplu a lui Adi și a Emei este foarte evidentă și îmi oferă claritate în faptul că nu sunt singur în problemele cu care mă confrunt, ci că și alți tineri, poate chiar și moderatorii, au trecut la un moment dat prin ce trec eu cu soția mea. Apreciez momentele de reflectare asupra Scripturii și modul în care cei doi reușesc să ajungă la conturarea unor sfaturi practice pentru situații specifice. Și nu în ultimul rând întrebările foarte precis formulate ale Adelinei, împreună cu vocile calde și primitoare ale celor trei, fac ca acest podcast să îmi producă o mare plăcere de fiecare dată când îl ascult, să mă pună pe gânduri cu privire la ce vrea Dumnezeu de la mine ca soț, și să mă provoace la punerea în practică a ideilor conturate.'},
    {imgSrc: '/img/test_profile_photo.png', name: 'Otilia și Andrei', desc: 'Credem că este important să fim atenți din ce alegem să ne hrănim sufletul, în ce ne ancorăm rădăcinile, astfel încât rezultatul să fie un rod bun. Ca și familie proaspăt căsătorită, ne-am simțit binecuvântați să găsim un podcast profund ancorat în valorile creștine, care să abordeze subiecte atat de relevante pentru viața noastră de zi cu zi. Fie că este vorba despre gestionarea conflictelor, creșterea copiilor sau întărirea legăturii în căsnicie, podcastul a devenit o sursă de inspirație și îndrumare pentru noi. Căldura gazdelor și deschiderea cu care abordează diversele încercări și bucurii din viața unei familii creștine, aduce în “Sufletul Familiei” cu adevărat căldura unei discuții empatice  în “familie”.Credem ca podcastul “Sufletul Familiei” este o resursă valoroasă, care aduce claritate în subiectele care pot crea tensiune în relațiile din familie, fiind o inspirație pentru a preveni apariția unor probleme, dar de asemeni o încurajare pentru cei care caută soluționare.'},
]


export default function TestimonialWrap(){

    

    return(
        <div className="w-full grid grid-rows lg:grid-cols-3 lg:gap-x-7 gap-x-0 lg:gap-y-0 gap-y-7 py-5">
            {testimonialData.map((x,i)=>{
                return (
                    <TestimonialCard
                        imgSrc={x.imgSrc}
                        name={x.name}
                        text={x.desc}
                        key={i}
                    />
                );
            })}
        </div>
    )

}