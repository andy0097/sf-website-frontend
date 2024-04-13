import Image from 'next/image'
import  { AboutUsHeroSlider } from '@/components/common/';
import { SecondaryButton } from '@/components/buttons';

export default function Page() {
  return (
    <>
        <AboutUsHeroSlider/>
        <section className="bg-sf_tan w-screen flex justify-center py-36">
          <div className='text-center text-white space-y-8 m-30 flex flex-col items-center'>
            <h2>Book us for an event</h2>
            <p>Our passion is to see our own children become like Jesus</p>
            <div className=' w-full max-w-48 '>
              <SecondaryButton
                path='/speakers'
                buttonText='Book now'
                className=' md:px-9'
              />
            </div>
          </div>

        </section>
    </>
  )
}