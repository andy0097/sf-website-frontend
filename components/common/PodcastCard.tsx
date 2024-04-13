import Image from 'next/image';
import { SecondaryButton } from '../buttons';
import Link from 'next/link';

import smallLogo from '@/public/img/logomark_small.svg';
import arrowRight from '@/public/img/right_arrow.svg';


export default function PodcastCard(){

    return(
            
        <div>
            <Link href="https://open.spotify.com/episode/0onbZMRYTnjteZDcZ2chhj?si=0e771561b6e6488a">
                <div className="h-fit lg:px-10 px-4 lg:py-12 py-4 bg-sf_white rounded-[12px] grid lg:grid-cols-4 md:grid-row-auto grid-cols-4">
                    <div className='col-span-1'>
                        <Image src={smallLogo} alt='small logo mark'/>
                    </div>
                    <div className='col-span-3 text-sf_green h-fit'>
                        <p className='font-medium'>Episodul 4</p>
                        <h3 className='hidden lg:block'>Rezolvați-vă conflictele</h3>
                        <h4 className='block lg:hidden'>Rezolvați-vă conflictele</h4>
                        <div className='flex justify-between'>
                            <p>28 Martie</p>
                            <Image src={arrowRight} alt='allow pointing right'/>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='flex lg:flex-row flex-col mt-4 lg:mt-12 lg:justify-between items-center space-y-4 lg:space-y-0'>
                    <div className='w-10/12 mr-0.5'>
                        <SecondaryButton 
                            buttonText='Abonare Spotify'
                            path='https://open.spotify.com/show/7d2VRDSjmh2YhTRoyBUCO9?si=1e44edbb39bc418c'   
                        />
                    </div>
                    <div className='w-10/12 ml-0.5'>
                        <SecondaryButton 
                            buttonText='Abonare Apple'
                            path='https://podcasts.apple.com/ro/podcast/sufletul-familiei/id1712107730'
                        />
                    </div>
            </div>
        </div>
            
            
    );
}

