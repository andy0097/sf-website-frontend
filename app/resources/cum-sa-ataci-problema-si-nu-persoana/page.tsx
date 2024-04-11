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
                            <h3 className=" text-sf_green">Cum să ataci problema și nu persoana?</h3>
                        </div>
                        <div className=" flex">
                            <div>
                                <p className=" text-sf_green font-semibold">Ema Ban</p>
                            </div>
                            <div className=" ml-10 text-sf_green font-semibold">
                                <p>3 minute</p>
                            </div>

                        </div>

                    </div>

                    {/* The text */}
                    <div className="text-sf_green space-y-8 text-lg">
                        <p>Atunci când se ivește o discuție pe tonalități contradictorii și din poziții diferite, iată o întrebare de a cărui răspuns depinde modul în care va decurge discuția: cum să ataci problema și nu persoana? </p>
                        <p>Răspunsul stă de multe ori în poziționarea ta, ca și persoană, și unghiul din care privești situația. Dacă îți privești soțul sau soția ca pe cineva care este alături de tine „moștenitor al vieții veșnice”, de ce să îi ataci pe ei și nu problema, care într-un final, oricât e de spinoasă, e totuși ceva trecător? </p>
                        <p>În sesiunile noastre pentru familii adresăm adesea această situție atunci când discutăm despre gestionarea conflictelor care apar în căsnicie. Adresarea probleme asigură poziționarea voastră unul lângă celălalt și lucrând împreună la situația dată. În schimb, atacul persoanei din fața mea mă poziționează în tandem cu problema, ne oferindu-mi ocazia de a mă uita la ea din perspectiva corectă. Cineva spunea, „Conflictul este inevitabil în căsnicie: fie îl vom gestiona într-un mod eficient sau sănătos, fie într-un mod dăunător relației.”</p>
                        <div>
                            <Image 
                                src={blogImg2}
                                alt="show image"
                            />
                        </div>
                        <p>După mai bine de două decenii de căsnicie ar trebui să putem spune că suntem experți în modul în care gestionăm conflictele care apar și că de-acum atacăm de fiecare dată problema și nu persoana, însă trebuie să recunoaștem că suntem și noi încă pe drumul progresului și nu în casa perfecțiunii. Ce ne-a ajutat pe noi să fim mai eficienți? În primul rând poziționarea: stau lângă Adi, sau stau lângă Ema, și ne uităm împreună la problemă. Imaginar, o „așezăm” în fața noastră, și așa cum recomandă David și Claudia Arp, mentorii noștri, o definim din câte unghiuri se poate (evident, problemele mici nu au la fel de multe unghiuri ca și cele mai spinoase). După ce o definim, îi dăm celui dintre noi care a ridicat problema să ne ofere mai multe informații precum și motivul pentru care el sau ea o consideră o problemă. Pasul următor e să analizăm fiecare soluțiile care ne vin în minte, ca mai apoi le discutăm. Dacă e o problemă care are ramificații mai ample, ne îngăduim o perioadă ceva mai lungă pentru găsirea și discutarea soluțiilor. La final, decidem pe care dintre soluții o vom implementa, acordându-ne înțelegere și îngăduință atunci când soluția nu merge de prima oară. </p>
                        <p>Ca și cu orice exercițiu, indiferent de domeniu, îmbunătățirea este vizibilă atunci când nu renunțăm la a parcurge pașii de mai sus. Da, ne influențează atât de mult cultura „instantului” care este atât de loud în jurul nostru în ultimele decenii. Însă dacă ne dorim progres nu doar în carieră ci și în familie, care e cu mult mai valoros, influențând de fapt progresul în toate celelalte domenii ale vieții, nu putem opta pentru soluții „instant” ci pentru soluții de durată. Așadar, începeți cu primul pas. Dacă ajungeți să îl parcurgeți, treceți la al doilea. Se prea poate ca primele dăți să mergeți de la primul la al treilea, și apoi să vă mai gândiți la al doilea. Totuși, nu săriți direct la al patrulea, că s-ar putea să vă întoarceți, asemeni unor jocuri de copii, „direct” la primul. Având binele relației în fața noastră, noi am reușit să trecem cu succes de conflicte în multe situații, și ne dorim să reușiți și voi!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}