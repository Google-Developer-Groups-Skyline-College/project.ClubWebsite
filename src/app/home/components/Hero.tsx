'use client'

import React from 'react'
import { ReactTyped } from 'react-typed'
import { Element } from 'react-scroll'

import Image from 'next/image'

import { IoMdArrowRoundDown } from 'react-icons/io'
import { Link } from 'react-scroll'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TYPED_KEYWORDS = [
    'Build Websites',
    'Design Projects',
    'Pioneer Developers',
    'Optimize Code',
    'Compile Programs',
    'Web Design',
    'Gain Experience',
    '$ yarn build',
    'Grow Your Portfolio',
    '3D-Model',
    'Deploy',
    'Problem-Solve',
    '$ npm install',
    'Interpret',
    'Expand Your Network',
    'Game Design',
    'Collaborate',
    'Delegate',
    '$ git commit',
]

export function Hero(): React.ReactNode {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <div className='w-full h-screen bg-black'>
            <Element name='hero' />

            <div className='absolute w-full h-full pointer-events-none overflow-hidden'>
                <motion.div
                    className='w-full h-full'
                    initial={{ transform: 'translateY(10%)', opacity: '0%' }}
                    animate={isInView ? { transform: 'translateY(0%)', opacity: '100%' } : { transform: 'translateY(10%)', opacity: '0%' }}
                    transition={{ duration: 3, ease: 'backOut' }}
                    ref={ref}
                >

                    {/* Actual backdrop image */}
                    <Image
                        width={1280}
                        height={720}
                        className='absolute w-full h-full blur-[0px] object-cover'
                        src={'/assets/home/skyline_backdrop.jpg'}
                        alt=''
                        priority
                    />

                    {/* Hero .gif overlay */}
                    <Image
                        width={1280}
                        height={720}
                        src={'/assets/home/hero_overlay.gif'}
                        className='absolute top-0 w-full h-full drop-shadow-lg opacity-5 lg:opacity-10'
                        alt=''
                        unoptimized
                        priority
                    />

                </motion.div>
            </div>

            <div className='absolute w-full h-full mx-auto flex flex-col items-center justify-center pb-24'>
                {/* mascot */}
                <Image
                    width={80}
                    height={80}
                    src={'/assets/bits/mascot.gif'}
                    alt=''
                    unoptimized
                    className='z-20 hover:scale-105 transition-all duration-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                />

                {/* The main texts */}
                <h1 className='z-20 title-main text-center text-[4.6vw] xl:text-[52px] text-shadow shadow-black font-bold text-white mx-4 my-[2px] sm:my-[-8px]'>
                    The Computer Science Club at Skyline
                </h1>
                {/* <h1 className='z-20 title-main text-center text-[20px] sm:text-[32px] md:text-[38px] xl:text-[52px] text-shadow shadow-black font-bold text-white mx-4 my-[2px] sm:my-[-8px]'>
                    The Computer Science Club at Skyline
                </h1> */}

                <div className='z-20 title-main w-full text-white text-center text-shadow shadow-black text-[3.25vw] sm:text-xl'>
                    <p className='group'>Elevate Your Code — the <span className='group-hover:text-red-300 group-hover:font-bold transition delay-100'>Sky&apos;s</span> <span className='group-hover:text-red-300 group-hover:font-bold transition delay-300'>the</span> <span className='group-hover:text-red-300 group-hover:font-bold transition delay-500'>Limit.</span></p>
                    <h1 className='title-main font-bold text-2xl sm:pt-[4px]'>
                        {'>'} We{' '}
                        <ReactTyped
                            className='text-[#FCD690] drop-shadow-[0_0_12px_rgba(245,210,140,210)]'
                            strings={TYPED_KEYWORDS}
                            typeSpeed={50}
                            backSpeed={60}
                            backDelay={2000}
                            loop
                        />{' '}
                        {'<'}
                    </h1>
                </div>

                {/* Currently requires a weird arbit. offset of -180 for this particular scroll */}
                <Link
                    to='about'
                    smooth={true}
                    offset={-140}
                    duration={1500}
                    className='z-20 mt-3 relative group w-[210px] hover:w-[240px] active:scale-95 duration-150 hover:border-green-900 border-white rounded-xl hover:outline hover:outline-[4px] active:outline-4 text-white text-lg title-main drop-shadow-[0_16px_20px_rgba(0,0,0,0.7)] overflow-hidden'
                >
                    <IoMdArrowRoundDown className='absolute w-full h-full group-hover:translate-y-0 -translate-y-[100%] duration-300 bg-gradient-to-t from-[#16a34aec] to-[#ffffff91] pointer-events-none' />
                    <button className='flex w-full h-full justify-center py-[6px] font-semibold text-center text-shadow-lg shadow-black hover:bg-green-600 bg-neutral-900 bg-opacity-50 duration-300 hover:border-green-300 overflow-hidden'>
                        <p>I&apos;m Interested</p>
                    </button>
                </Link> 
            </div>

            <div className='absolute w-full h-full'>
                {/* top        */}
                <div className='absolute top-0 w-full h-[15%] bg-gradient-to-b from-black to-transparent' />
                {/* bottom     */}
                <div className='absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent' />
                {/* cent-left  */}
                <div className=' absolute top-0 left-[25%] w-[25%] h-screen bg-gradient-to-l from-[#00000035] sm:from-[#00000075] to-transparent' />
                {/* cent-right */}
                <div className=' absolute top-0 right-[25%] w-[25%] h-screen bg-gradient-to-r from-[#00000035] sm:from-[#00000075] to-transparent' />
            </div>

            <div className='w-full flex flex-col items-center justify-center absolute bottom-8 mx-auto text-center font-semibold opacity-55'>
                <IoMdArrowRoundDown className='text-2xl' />
                <p className='animate-pulse select-none'>Scroll Down to Enter</p>
            </div>
        </div>
    )
}
