
import Image from 'next/image'
import { PrimaryButtonDark, SecondaryButtonDark } from '@/components/buttons/index';
import { Hero, AboutUsSlider, TestimonialWrap, CTACard } from '@/components/common';
import { ToastContainer } from 'react-toastify';
import { AskQuestionForm } from '@/components/forms';

import aboutUs from '@/public/img/about_Adi&Ema.png'
import image from '@/public/img/image_get_involved.png'
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
  
  return (
    <>
      <Hero/>
      <section className=' w-full h-[496px] bg-sf_offwhite flex justify-center items-center'>
        <div className='max-w-7xl w-4/5 flex flex-col justify-center items-center'>
          <div className='w-6/12 space-y-2'>
            <h2 className='text-sf_green text-center'>În unele cazuri, Dumnezeu face ceva în tine înainte să facă ceva prin tine.</h2>
            <p className='text-center text-sf_green'>C. Groeschel</p>
          </div>
        </div>
      </section>
      <section className='w-full bg-white flex flex-col justify-center items-center py-16'>
        <div className='max-w-7xl w-4/5 justify-center flex'>
          <div className='md:w-10/12 flex flex-col md:flex-row-reverse justify-between space-y-8 items-center'>
            <div className='md:max-w-md md:p-8'>
              <Image src={aboutUs} alt='photo with Adi and Ema'/>
            </div>
            <div className=' space-y-6 md:w-6/12 md:max-w-md'>
              <h2 className=' text-sf_green'>Despre Adi și Ema</h2>
              <p className='text-sf_green font-normal w-11/12'>
                Bine ați venit pe pagina podcastului Sufletul familiei! Suntem Adi și Ema, consilieri maritali, implicați activ în mentorarea cuplurilor aflate înainte de căsătorie, în primii ani de căsătorie precum și a celor care au sărbătorit împreună mai multe aniversări de la căsătorie. 
                <br /><br />Anul acesta noi vom sărbători treizeci de ani de la nunta noastră, și ne uităm în urmă cu bucurie și cu experiența lecțiilor învățate. Avem trei băieți – Andy, căsătorit cu Ema, Eduard și Thomas.
                <br /><br />Împreună cu mentorii noștri David și Claudia Arp suntem co-autorii cărții &quot;Vreau să mă căsătoresc&quot; (Scriptum, 2011). David și Claudia sunt fondatorii organizației MarriageAlive și coordonatorii seminarelor 10GreatDates, binecunoscute în domeniul eclesial din SUA și Germania.
              </p>
              <div className='flex items-start'>
                <PrimaryButtonDark buttonText='Mai multe' path='/about-us'/>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='w-full bg-sf_lightblue flex justify-center'>
        <AboutUsSlider/>
      </section>
      <section className='w-full bg-sf_lightblue flex justify-center'>
        <div className='max-w-7xl w-6/12 justify-center flex flex-col md:pb-72 py-24 items-center'>
          <div className='slideUp text-center text-sf_green'>
            <h2>Ne poți asculta atât pe Spotify cât și pe Apple Podcast, și nu uita să ne urmărești pe social media pentru ultimele detalii.</h2>
          </div>
          <div className='flex lg:flex-row flex-col lg:w-10/12 justify-between mt-10 max-w-md space-y-6 lg:space-y-0' >
            <SecondaryButtonDark
              buttonText='Abonare Spotify'
              path='https://open.spotify.com/show/7d2VRDSjmh2YhTRoyBUCO9?si=1e44edbb39bc418c'
            />
            <SecondaryButtonDark
              buttonText='Abonare Apple'
              path='https://podcasts.apple.com/ro/podcast/sufletul-familiei/id1712107730'
            />
          </div>
        </div>
      </section>
      <section className='w-full bg-sf_white flex justify-center'>
        <div className='max-w-7xl w-4/5 justify-center flex flex-col md:py-72 py-32 items-center'>
          <div className='text-sf_green text-center'>
            <h2>Testimoniale</h2>
            <div className='mt-[96px]'>
                <TestimonialWrap/>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full bg-sf_browngrey flex justify-center'>
        <div className='max-w-7xl w-4/5 justify-center flex flex-col md:py-40 py-32 items-center'>
          <div className='max-w-[440px]'>
            <div className='text-sf_green text-center'>
              <h2>Pune o întrebare</h2>
              <p className='my-10'>Nu putem promite ca vom avea raspunsuri, dar vom incerca sa te ajutam cu ce putem! Apreciem initiativa si sinceritatea ta.</p>
            </div>
            <div className='w-full'>
              <AskQuestionForm/>
            </div>
          </div>
          
        </div>
      </section>
      <section className='w-full bg-sf_white flex justify-center'>
        <div className='max-w-7xl w-4/5 justify-center flex flex-col md:py-40 py-32 items-center'>
          <div className='w-full flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-4'>
            <CTACard
              imgSrc={image}
              headline='Implică-te și tu'
              desc='Fii parte din proiectul Dufletul familiei susținându-ne în rugaciuni și financiar'
              path='/donate'
              btnText='Implică-te'
            />
            <CTACard
              imgSrc='/img/image_book_event.png'
              headline='Speakeri'
              desc='Organizez o conferință sau un eveniment pentru familii și îți dorești să ne chemi ca speakeri? Vezi aici ce subiecte stpânim cel mai bine'
              path='/speakers'
              btnText='Vezi detalii'
            />
          </div>
        </div>

      </section>
      <ToastContainer />
    </>
        
 
  )
}


async function getPosts(){
  const posts = await fetch('http://127.0.0.1:800/posts',{
    method: 'GET',
  });

  if(!posts.ok){
    throw new Error('Failed to get posts');
  }
  return Promise.resolve();
}