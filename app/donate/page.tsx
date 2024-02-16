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
                  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.
                  <br/><br/>Our passion is to see our own children become“ all-in” disciples of Jesus while helping otherțs do the same.We hope you find all the resources you need.
                  <br/><br/>Our passion is to see our own children become “all-in” disciples of Jesus while helping otherțs do the same.We hope you find all the resources you need here at “Intentional”. We hope you find all the resources you need here at “Intentional”.
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 text-sf_green mt-44 lg:mt-0'>
              <h3 className="mb-10">
                Motive specifice de rugăciune
              </h3>
              <ul className='space-y-9'>
                <li>Our passion is to see our own children become</li>
                <li>Our passion is to see our own children become</li>
                <li>Our passion is to see our own children become</li>
                <li>Our passion is to see our own children become</li>
                <li>Our passion is to see our own children become</li>
                <li>Our passion is to see our own children become</li>
                <li>Our passion is to see our own children become</li>
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
                  Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.
                  <br/><br/>Our passion is to see our own children become“ all-in” disciples of Jesus while helping otherțs do the same.We hope you find all the resources you need.
                  <br/><br/>Our passion is to see our own children become “all-in” disciples of Jesus while helping otherțs do the same.We hope you find all the resources you need here at “Intentional”. We hope you find all the resources you need here at “Intentional”.
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