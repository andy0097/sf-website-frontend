import { DonateHeroSection, GiveCard } from "@/components/common";


export default function Page() {
    return (
      <>
        <DonateHeroSection/>
        <section className="relative flex justify-center z-20">
          <div className='max-w-7xl w-4/5 justify-center flex lg:flex-row flex-col my-44'>
            <div className=' w-full lg:w-6/12 text-sf_green flex flex-col items-center'>
              <div className="lg:w-4/6">
                <h2 className='mb-10'>Sprijin în rugăciune</h2>
                <p>
                  Familia a fost și este întotdeauna un element important extrem de important în societate. Iar de multe ori familia este atacată.
                  <br/><br/>În această lucrare avem nevoie de susținere în rugăciune din partea voastră, iar când vă aduceți aminte de noi, aici sunt câteva motive specifice pentru care avem nevoie.
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 text-sf_green mt-44 lg:mt-0'>
              <h3 className="mb-10">
                Motive specifice de rugăciune
              </h3>
              <ul className='space-y-9'>
                <li>Sfințire atât pentru noi cât și pentru familiile noastre</li>
                <li>Protecția Lui Dumnezeu în toate locurile unde mergem</li>
                <li>Înțelepciune în abordarea subiectelor potrivite</li>
                <li>Empatie și deschidere pentru cei din jur</li>
                <li>Uși deschise prin care să ajungem la cât mai mulți oameni</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="relative flex justify-center">
          <div className='max-w-7xl w-4/5 justify-center flex flex-col lg:flex-row mb-44'>
            <div className='w-full lg:w-6/12 text-sf_green flex flex-col items-center'>
              <div className="lg:w-4/6">
                <h2 className='mb-10'>Sprijin financiar</h2>
                <p>
                  Dacă simți că rezonezi cu acest proiect și vrei să-l susții și financiar ne bucurăm de acest lucru.
                  <br /><br /> Banii adunați vor fi folosiți pentru a crea materiale și resurse care să ajute cât mai multe familii.
                  <br /><br /> Ai atât varianta de a plăti recurend sau poți alege să faci o singură dată.
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 text-sf_green mt-44 lg:mt-0'>
              <GiveCard/>
            </div>
          </div>
        </section>
      </>
    );
  }