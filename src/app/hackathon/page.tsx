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
import { Footer, IntroFade, Gallery, Countdown } from 'shared/_modules'
import Link from 'next/link'

const backdrop = '/assets/hackathon/backdrop.png'
const herologo = '/assets/hackathon/logo.png'

const SHOWTIME = new Date(0).setSeconds(1745017200) // 4:00 - 04/22/24
const ENDTIME = new Date(0).setSeconds(1745622000) // 4:00 - 04/29/24

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

            {/* hero section */}
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
                        className='lg:h-[17vw] px-4 object-contain pointer-events-none select-none'
                        src={herologo}
                        width={1000}
                        height={1000}
                        alt=''
                    />
                </motion.div>

                <motion.div
                    className='-z-10 absolute w-full h-full blur-sm pointer-events-none select-none'
                    initial={{ transform: 'translateY(10%)' }}
                    animate={{ transform: 'translateY(0%)' }}
                    transition={{ duration: 3, ease: 'backOut' }}
                >
                    <Image
                        className='h-full object-cover'
                        src={backdrop}
                        width={2880}
                        height={2620}
                        quality={50}
                        alt=''
                    />
                </motion.div>

                { new Date().getSeconds() < SHOWTIME ?
                <Countdown timestamp={SHOWTIME} className='' />
                :
                <Countdown timestamp={ENDTIME} className='' />
                }

                <div className='flex flex-col md:flex-row mt-4 gap-3'>
                    <span className='absolute flex h-3 w-3'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1dfd1d75] opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-3 w-3 bg-[#1dfd1d75]'></span>
                    </span>
                    <Link
                        href='https://tally.so/r/npvKoP' target='_blank'
                        className='bg-[#1ebd1e75] rounded-xl p-2 px-6 hover:px-10 text-lg font-Poppins font-bold transition-all duration-300 text-center hover:animate-pulse'>
                        📝 Apply Here Now!
                    </Link>

                    <Link
                        href='https://drive.google.com/file/d/11Rvu9Jx0t1qg_MP3NSUTahXrZ6-ildve/view?usp=sharing' target='_blank'
                        className='bg-[#ffd035a4] rounded-xl p-2 px-6 hover:px-10 text-lg font-Poppins font-bold transition-all duration-300 text-center hover:animate-pulse'>
                        🕒 Mission Timeline
                    </Link>

                    <Link
                        href='https://docs.google.com/document/d/1ERW69gX_VNuuO59LUMoFDdS3Ysinw-jfG1h9lHEs40k/edit?usp=sharing' target='_blank'
                        className='bg-[#cc00ff75] rounded-xl p-2 px-6 hover:px-10 text-lg font-Poppins font-bold transition-all duration-300 text-center hover:animate-pulse'>
                        📖 Hacker Handbook
                    </Link>
                </div>

                <div className='flex flex-col md:flex-row mt-2 gap-2'>

                    <Link
                        href='https://discord.gg/X8a6YucWru' target='_blank'
                        className='bg-[#00000075] rounded-xl p-2 px-6 hover:px-10 text-base font-Poppins font-bold transition-all duration-300 text-center hover:animate-pulse'>
                        CSM Girls Who Code
                    </Link>

                    <Link
                        href='https://discord.gg/Q6CPAscMcv' target='_blank'
                        className='bg-[#00000075] rounded-xl p-2 px-6 hover:px-10 text-base font-Poppins font-bold transition-all duration-300 text-center hover:animate-pulse'>
                        CSM AI Club
                    </Link>

                    <Link
                        href='https://discord.gg/z5P9kccwRh' target='_blank'
                        className='bg-[#00000075] rounded-xl p-2 px-6 hover:px-10 text-base font-Poppins font-bold transition-all duration-300 text-center hover:animate-pulse'>
                        GDGoC Skyline College
                    </Link>

                    <Link
                        href='https://discord.gg/g8dvmWCXPB' target='_blank'
                        className='bg-[#00000075] rounded-xl p-2 px-6 hover:px-10 text-base font-Poppins font-bold transition-all duration-300 text-center hover:animate-pulse'>
                        CSM Computer Science Club
                    </Link>

                    <Link
                        href='https://discord.gg/YcryEdk8H5'
                        className='bg-[#00000075] rounded-xl p-2 px-6 hover:px-10 text-base font-Poppins font-bold transition-all duration-300 text-center hover:animate-pulse'>
                        Skyline Data Science Club
                    </Link>
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
