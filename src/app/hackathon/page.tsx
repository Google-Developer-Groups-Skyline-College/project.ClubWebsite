'use client'

import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'

import { HackathonAlbum } from '@/dispositions/gallery'

import Image from 'next/image'

import { HackathonTimer } from '@/lib/hackathon/Timer'

import { Podiums } from './components/_modules'
import { Footer, IntroFade, Gallery } from 'shared/_modules'
import Link from 'next/link'

const backdrop = '/assets/hackathon/backdrop.png'

const SHOWTIME = new Date(0).setSeconds(1776459600) // 2:00 PM - 04/17/26
const ENDTIME = new Date(0).setSeconds(1777064400) // 2:00 PM - 04/24/26

const GALLERY_TYPED_WORDS = [
    'Experience Software Development',
    'Experience Project Design',
    'Experience Team Coordination',
    'Experience Real-World Programming',
]

export default function Hackathon() {

    return (
        <>
            <IntroFade />

            {/* hero section */}
            <div className='relative flex flex-col w-full h-screen justify-center items-center overflow-hidden'>

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

                <motion.div
                    className='flex flex-col items-center pointer-events-none select-none'
                    initial={{ opacity: 0, transform: 'translateY(20px)' }}
                    animate={{ opacity: 1, transform: 'translateY(0px)' }}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                >
                    <p className='text-sm sm:text-lg tracking-[0.3em] uppercase text-neutral-400 font-Poppins'>
                        The Third Annual Intercollegiate
                    </p>
                    <h1 className='text-5xl sm:text-7xl lg:text-8xl font-extrabold font-Poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 leading-tight'>
                        HACKATHON
                    </h1>
                    <p className='text-base sm:text-xl text-neutral-300 font-Poppins mt-1'>
                        April 17 — 24, 2026
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <HackathonTimer startTime={SHOWTIME} endTime={ENDTIME} className='text-center font-bold font-Ubuntu mt-6 bg-[#00000075] backdrop-blur-sm rounded-2xl p-2 px-12 sm:text-4xl text-2xl' />
                </motion.div>

                <motion.div
                    className='flex flex-col items-center mt-6 gap-3'
                    initial={{ opacity: 0, transform: 'translateY(10px)' }}
                    animate={{ opacity: 1, transform: 'translateY(0px)' }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    {/* main action buttons */}
                    <div className='flex flex-col sm:flex-row gap-3 items-center'>
                        <a
                            href='https://tally.so/r/RG45LK' target='_blank'
                            className='relative bg-[#bd1e1e] rounded-xl p-2 px-8 hover:px-10 text-lg font-Poppins font-bold transition-all duration-300 text-center hover:brightness-125'>
                            <span className='absolute -top-1 -right-1 flex h-3 w-3'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
                            </span>
                            Applications Open
                        </a>

                        {/* Hidden for now — restore when ready
                        <Link
                            href='https://drive.google.com/file/d/11Rvu9Jx0t1qg_MP3NSUTahXrZ6-ildve/view?usp=sharing' target='_blank'
                            className='bg-[#ffd035cc] text-black rounded-xl p-2 px-8 hover:px-10 text-lg font-Poppins font-bold transition-all duration-300 text-center hover:brightness-125'>
                            Mission Timeline
                        </Link>

                        <Link
                            href='https://docs.google.com/document/d/1ERW69gX_VNuuO59LUMoFDdS3Ysinw-jfG1h9lHEs40k/edit?usp=sharing' target='_blank'
                            className='bg-[#cc00ffcc] rounded-xl p-2 px-8 hover:px-10 text-lg font-Poppins font-bold transition-all duration-300 text-center hover:brightness-125'>
                            Hacker Handbook
                        </Link>
                        */}

                    </div>

                    {/* participating clubs */}
                    <p className='text-xs tracking-[0.2em] uppercase text-neutral-500 font-Poppins mt-2'>Participating Clubs</p>
                    <div className='flex flex-wrap justify-center gap-2 max-w-3xl'>
                        <Link href='https://discord.gg/g8dvmWCXPB' target='_blank'
                            className='bg-[#00000090] backdrop-blur-sm rounded-xl p-2 px-5 text-sm font-Poppins font-semibold transition-all duration-300 text-center text-neutral-300 hover:text-white hover:bg-[#ffffff20]'>
                            CSM Computer Science Club
                        </Link>
                        <Link href='https://discord.gg/d37V2vut' target='_blank'
                            className='bg-[#00000090] backdrop-blur-sm rounded-xl p-2 px-5 text-sm font-Poppins font-semibold transition-all duration-300 text-center text-neutral-300 hover:text-white hover:bg-[#ffffff20]'>
                            CSM Data Engineering Club
                        </Link>
                        <Link href='https://discord.gg/4D9hxv4QHg' target='_blank'
                            className='bg-[#00000090] backdrop-blur-sm rounded-xl p-2 px-5 text-sm font-Poppins font-semibold transition-all duration-300 text-center text-neutral-300 hover:text-white hover:bg-[#ffffff20]'>
                            CSM Robotics Club
                        </Link>
                        <Link href='https://discord.gg/X8a6YucWru' target='_blank'
                            className='bg-[#00000090] backdrop-blur-sm rounded-xl p-2 px-5 text-sm font-Poppins font-semibold transition-all duration-300 text-center text-neutral-300 hover:text-white hover:bg-[#ffffff20]'>
                            CSM Girls Who Code
                        </Link>
                        <Link href='https://discord.gg/Q6CPAscMcv' target='_blank'
                            className='bg-[#00000090] backdrop-blur-sm rounded-xl p-2 px-5 text-sm font-Poppins font-semibold transition-all duration-300 text-center text-neutral-300 hover:text-white hover:bg-[#ffffff20]'>
                            CSM AI Club
                        </Link>
                        <Link href='https://discord.gg/FmSYJANKec' target='_blank'
                            className='bg-[#00000090] backdrop-blur-sm rounded-xl p-2 px-5 text-sm font-Poppins font-semibold transition-all duration-300 text-center text-neutral-300 hover:text-white hover:bg-[#ffffff20]'>
                            CSM Google Developer Group
                        </Link>
                        <Link href='https://discord.gg/ZMEDAGtpWK' target='_blank'
                            className='bg-[#00000090] backdrop-blur-sm rounded-xl p-2 px-5 text-sm font-Poppins font-semibold transition-all duration-300 text-center text-neutral-300 hover:text-white hover:bg-[#ffffff20]'>
                            Skyline Google Developer Group
                        </Link>
                        <Link href='https://discord.gg/YcryEdk8H5' target='_blank'
                            className='bg-[#00000090] backdrop-blur-sm rounded-xl p-2 px-5 text-sm font-Poppins font-semibold transition-all duration-300 text-center text-neutral-300 hover:text-white hover:bg-[#ffffff20]'>
                            Skyline Data Science Club
                        </Link>
                    </div>
                </motion.div>

                <div className='absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent' />

            </div>

            <Podiums />

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
