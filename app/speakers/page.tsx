import { BookEventForm } from "@/components/forms";

export default function Page() {
    return (
      <section className='w-full flex justify-center lg:h-[100vh] bg-sf_lightblue text-sf_green '>
        <div className='max-w-7xl w-4/5 flex lg:flex-row flex-col lg:justify-center items-center my-24 lg:m-0'>
          <div className='lg:w-1/2'>
            <div className='lg:w-4/6'>
              <h2>Vrei să ne chemi la evenimentul tău?</h2>
              <p className='lg:mt-10'>
                Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”.
                <br/><br/>Our passion is to see our own children become“all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need.
                <br/><br/>Our passion is to see our own children become “all-in” disciples of Jesus while helping others do the same.We hope you find all the resources you need here at “Intentional”. We hope you find all the resources you need here at “Intentional”.
              </p>
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