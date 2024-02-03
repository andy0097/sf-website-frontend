import Image from 'next/image';
import { SecondaryButton } from '../buttons';

import smallLogo from '@/public/img/logomark_small.svg';
import arrowRight from '@/public/img/right_arrow.svg';


export default function PodcastCard(){

    return(
        <>
            <div >
                <div className="h-fit lg:px-10 px-4 lg:py-12 py-4 bg-sf_white rounded-[12px] grid lg:grid-cols-4 md:grid-row-auto grid-cols-4">
                    <div className='col-span-1'>
                        <Image src={smallLogo} alt='small logo mark'/>
                    </div>
                    <div className='col-span-3 text-sf_green h-fit'>
                        <p className='font-medium'>Episodul 1</p>
                        <h3 className='hidden lg:block'>Descoperiți-vă așteptările</h3>
                        <h4 className='block lg:hidden'>Descoperiți-vă așteptările</h4>
                        <div className='flex justify-between'>
                            <p>2 Octombrie</p>
                            <Image src={arrowRight} alt='allow pointing right'/>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col mt-4 lg:mt-12 lg:justify-between items-center space-y-4 lg:space-y-0'>
                        <div className='w-10/12 mr-0.5'>
                            <SecondaryButton 
                                buttonText='Abonare Spotify'
                                path='https://www.spotify.com'   
                            />
                        </div>
                        <div className='w-10/12 ml-0.5'>
                            <SecondaryButton 
                                buttonText='Abonare Apple'
                                path='https://www.youtube.com'    
                            />
                        </div>
                        
                        
                    
                </div>
            </div>
            
        </>
    );

}