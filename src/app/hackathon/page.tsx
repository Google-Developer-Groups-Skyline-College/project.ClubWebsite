'use client'

import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'

import { useState, useEffect } from 'react'

import { HackathonAlbum } from '@/dispositions/gallery'

// components
import Image from 'next/image'

import { HackathonTimer } from '@/lib/hackathon/Timer'
import { Track } from '@/lib/hackathon/Track'

import { Podiums } from './components/_modules'
import { Footer, IntroFade, Gallery } from 'shared/_modules'

const backdrop = '/assets/hackathon/backdrop.png'
const herologo = '/assets/hackathon/herologo.png'

const SHOWTIME = new Date(0).setSeconds(1744268400) // 4:00 - 04/22/24
const ENDTIME = new Date(0).setSeconds(1744873200) // 4:00 - 04/29/24

const GALLERY_TYPED_WORDS = [
    'Experience Software Development',
    'Experience Project Design',
    'Experience Team Coordination',
    'Experience Real-World Programming',
]

const trackClasses = {
    container: 'font-bold',
    content: 'font-bold',
    header: 'font-bold',
    description: 'font-bold',
};

export default function Hackathon() {

    return (
        <>
            <IntroFade />

            <div className='relative flex flex-col w-full h-screen justify-center items-center overflow-hidden'>

                <motion.div
                    initial={{ transform: 'translateY(3%)' }}
                    animate={{ transform: 'translateY(-3%)' }}
                    transition={{
                        duration: 3,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                >
                    <Image
                        className='lg:h-[17vw] px-4 object-contain pointer-events-none'
                        src={herologo}
                        width={1000}
                        height={1000}
                        alt=''
                    />
                </motion.div>

                <motion.div
                    className='-z-10 absolute w-full h-screen pointer-events-none blur-sm'
                    initial={{ transform: 'translateY(10%)' }}
                    animate={{ transform: 'translateY(0%)' }}
                    transition={{ duration: 3, ease: 'backOut' }}
                >
                    <Image
                        className='object-cover'
                        src={backdrop}
                        width={2880}
                        height={2620}
                        quality={50}
                        alt=''
                    />
                </motion.div>

                {/* <div className="text-8xl font-bold text-orange-200">Hackathon</div> */}
                <HackathonTimer startTime={SHOWTIME} endTime={ENDTIME} className='text-center font-bold font-Ubuntu mt-4 bg-[#00000075] rounded-2xl p-2 px-12 sm:text-4xl text-2xl' />

                <div className='flex flex-col sm:flex-row mt-4 gap-3'>
                    {/* <a href='https://forms.gle/k9y4ZKbnatqiS  BFRA'> */}
                    <div className='flex bg-[#c51a1a75] rounded-xl sm:w-40 h-10 font-semibold transition-all hover:scale-105 text-center'>
                        <span className='absolute flex h-3 w-3'>
                            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d40] opacity-75'></span>
                            <span className='relative inline-flex rounded-full h-3 w-3 bg-[#ff4d40]'></span>
                        </span>
                        <span className='mx-auto my-auto text-center'>
                            ⛔ Apps Closed
                        </span>
                    </div>
                    {/* </a> */}
                    <a href='https://drive.google.com/file/d/1H9kzRPuWqiKmZSB3WRJo_PqzxrOWLSpB/view?usp=sharing'>
                        <div className='bg-[#ffd035a4] rounded-xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
                            🕒 The Timeline
                        </div>
                    </a>
                    <a href='https://docs.google.com/document/d/15pP7UGDzaynIAKgSyr7UfDeE1j1VzpseOmH3kx6Ukv0/edit?usp=sharing'>
                        <div className='bg-[#cc00ff75] rounded-xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
                            📖 Hacker Handbook
                        </div>
                    </a>
                </div>

                <div className='flex flex-col sm:flex-row mt-2 gap-2'>
                    <a href='https://discord.gg/z5P9kccwRh'>
                        <div className='bg-[#00000075] rounded-xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
                            Join Skyline&apos;s CSC Discord
                        </div>
                    </a>
                    <a href='https://discord.gg/g8dvmWCXPB'>
                        <div className='bg-[#00000075] rounded-xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
                            Join San Mateo&apos;s CSC Discord
                        </div>
                    </a>
                </div>

                <div className='absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent' />
            </div>

            {/* <div>
                <Track trackName='Track 1' trackDescription='Track1 description' classNames={trackClasses} />
                <Track trackName='Track 2' trackDescription='Track2 description' />
                <Track trackName='Track 3' trackDescription='Track3 description' />
            </div> */}

            <Podiums />

            {/* <Gallery /> */}
            <div className='w-full bg-gradient-to-b from-slate-900 via-black to-black py-20'>
                <h1 className='title-main mx-auto text-4xl text-center sm:text-4xl font-extrabold text-white'>
                    <ReactTyped
                        strings={GALLERY_TYPED_WORDS}
                        typeSpeed={50}
                        backSpeed={75}
                        backDelay={3000}
                        loop
                        className='bg-gradient-to-t from-white to-[#5fff6c] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(50,250,255,1)]'
                    ></ReactTyped>
                </h1>

                <Gallery album={HackathonAlbum} />
            </div>
            <Footer />
        </>
    )
}
