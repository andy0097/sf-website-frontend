import Image from 'next/image'
import footerLogo from '@/public/img/footer_logo.svg'
import copyrightMark from '@/public/img/acopyright-mark.svg'
import applePodcastMark from '@/public/img/icon_apple_podcast.svg'
import spotifyMark from '@/public/img/icon_spotify.svg'
import soundcloudMark from '@/public/img/icon_sound_cloud.svg'
import youtubeMark from '@/public/img/icon_youtube.svg'
import facebookMark from '@/public/img/icon_facebook.svg'
import instagramMark from '@/public/img/icon_svg.svg'
import { NavLinks } from '.'
import { NewsletterForm } from '../forms'

export default function Footer(){



    return(
        <>
            <div className = 'bg-sf_green py-20 flex justify-center'>
                <div className='max-w-7xl w-4/5 grid grid-row-2 gap-y-4 '>
                    <div className='lg:grid lg:grid-cols-12 flex flex-col items-center'>
                        <div className = 'col-span-2'>
                            <Image
                                src={footerLogo}
                                alt="Logo podcast sufletul familiei"
                                // width={500} automatically provided
                                // height={500} automatically provided
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                        </div>
                        <div className = 'hidden lg:grid grid-row-2 gap-y-4 col-span-5 py-20 justify-center h-min'>
                            <div className = 'grid grid-cols-2 lg:gap-x-12 text-sf_white font-semibold tracking-widest h-min'>
                                <p>INFORMAȚII</p>
                                <p>ACȚIUNE</p>
                            </div>
                            <div className = ' grid grid-cols-2 gap-x-12 text-sf_white h-min font-normal gap-y-2 text-xs'>
                                <NavLinks/>
                            </div>
                        </div>
                        {/* usefull links for mobile */}
                        <div className = ' flex flex-col lg:hidden py-20 justify-center text-center items-center leading-relaxed'>
                            <div className = 'text-sf_white font-semibold tracking-widest h-min '>
                                <p>LINKURI UTILE</p>
                            </div>
                            <div className = ' text-sf_white h-min font-normal text-xs leading-[3]'>
                                <NavLinks/>
                            </div>
                        </div>
                        <div className='hidden lg:block col-span-5 py-20'>
                            <h3 className = 'text-sf_white'>Join our newsletter</h3>
                            <NewsletterForm/>
                        </div>
                        {/* newsletter for mobile */}
                        <div className='lg:hidden flex flex-col justify-center items-center'>
                            <h3 className = 'text-sf_white'>Join our newsletter</h3>
                            <NewsletterForm 
                                mobile = {true}
                            />
                        </div>
                    </div>
                    <div className = ' hidden lg:flex lg:flex-row flex-col lg:justify-between items-center lg:text-left text-center'>
                        <div className='text-xs text-sf_white'>
                            <span className='flex lg:flex-row flex-col space-x-3'>
                                <p>
                                    Copyright 
                                </p>
                                < Image src={copyrightMark} alt = 'copyright mark'/>
                                <p>
                                    2023 Sufletulfamiliei.ro
                                </p>
                                <p className='hidden lg:block'>
                                    |
                                </p>
                                <a href='#'>
                                    Termeni & Condiții
                                </a>
                                <p className='hidden lg:block'>
                                    |
                                </p>
                                <a href='#'>
                                    Confidențialitate
                                </a>

                            </span>
                        </div>
                        <div className='flex flex-row space-x-8'>
                            <a href='#'>
                                <Image src ={applePodcastMark} alt='apple podcast logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={spotifyMark} alt='spotify logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={soundcloudMark} alt='soundcloud logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={youtubeMark} alt='youtube logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={facebookMark} alt='facebook logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={instagramMark} alt='instagram logo in white' />
                            </a>
                        </div>
                    </div>
                    {/*for mobile only*/ }
                    <div className = 'flex lg:hidden flex-col justify-between items-center text-center'>
                        <div className='flex flex-row space-x-8 mt-16'>
                            <a href='#'>
                                <Image src ={applePodcastMark} alt='apple podcast logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={spotifyMark} alt='spotify logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={soundcloudMark} alt='soundcloud logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={youtubeMark} alt='youtube logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={facebookMark} alt='facebook logo in white' />
                            </a>
                            <a href='#'>
                                <Image src ={instagramMark} alt='instagram logo in white' />
                            </a>
                        </div>
                        <div className='text-s text-sf_white mt-16'>
                            <span className='flex flex-col space-x-3 space-y-6'>
                                <a href='#'>
                                    Termeni & Condiții
                                </a>
                                <a href='#'>
                                    Confidențialitate
                                </a>
                                <div className='flex flex-row space-x-4'>
                                    <p>
                                        Copyright 
                                    </p>
                                    < Image src={copyrightMark} alt = 'copyright mark'/>
                                    <p>
                                        2023 Sufletulfamiliei.ro
                                    </p>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};