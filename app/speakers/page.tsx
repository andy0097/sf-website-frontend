import { BookEventForm } from "@/components/forms";

export default function Page() {
    return (
      <section className='w-full flex justify-center lg:h-[100vh] bg-sf_lightblue text-sf_green '>
        <div className='max-w-7xl w-4/5 flex lg:flex-row flex-col lg:justify-center items-center my-24 lg:m-0'>
          <div className='lg:w-1/2'>
            <div className='lg:w-4/6'>
              <h2>Vrei să ne chemi la evenimentul tău?</h2>
              <p className='lg:mt-10'>
                Chemarea noastră este de a ajuta familiile din toată lumea să aibă o viață cât mai aproape de Dumnezeu. Mai jos ai o listă cu subiectele pe care noi le abordăm cel mai bine, dar suntem deschiși și la alte abordări.
              </p>
              <ul className=" mt-4 space-y-3 pl-6 list-disc">
                <li>Dragostea nu este o întâmplare</li>
                <li>Comunicarea în familie: personalitate, rol & impact</li>
                <li>Familia & Social Media</li>
                <li>Adolescenții & Social media (Sesiune pentru părinți de pre adolescenți și adolescenți)</li>
                <li>Personalitatea & Deciziile tale de azi: o pregătire pentru restul vieții</li>
                <li>Personalitatea în familie</li>
                <li>Despre Sexualitate: Ideea lui Dumnezeu vs ideile noastre</li>
                <li>Sfaturi pentru o căsnicie reînvigorată</li>
                <li>Creșterea copiilor în Era Digitală</li>
                <li>Seminar de Consiliere premaritală: importanța și eficiența unui astfel de seminar în biserică</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className='lg:w-5/6'>
              <BookEventForm/>
            </div>
          </div>
        </div>
      </section>
    )
  }