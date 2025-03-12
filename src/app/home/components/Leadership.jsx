'use client'

import React, { useRef, useState } from 'react'
// import { Element } from 'react-scroll'
import { ReactTyped } from 'react-typed'

import { motion, useInView } from 'framer-motion'
import { useSound } from 'use-sound'

import Image from 'next/image'

import {
    SiLinktree,
    SiGithub,
    SiInstagram,
    SiDiscord,
    SiLinkedin,
} from 'react-icons/si'
import {
    CgArrowRightR
} from 'react-icons/cg'
import { MdOutlineMail } from 'react-icons/md';
import { FaGlobeAmericas, FaQuoteLeft } from 'react-icons/fa'

const { leadership, FALLBACK_QUOTE } = require('@/dispositions/leadership.tsx')

function MajorLeaderCard ({ details, index }) {
    const [playSfx_clunk] = useSound('/assets/audio/clunk.mp3')
    const [playSfx_hoverThunk] = useSound('/assets/audio/muffled_hover_thunk.mp3')
    const [playSfx_discorda] = useSound('/assets/audio/discorda.mp3')

    const [displayQuote, setDisplayQuote] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            onAnimationStart={() => {
                setIsAnimating(true)
            }}
            onAnimationComplete={() => {
                setIsAnimating(false)
            }}
            onMouseEnter={() => playSfx_hoverThunk()}
            initial={{ opacity: 0, transform: 'perspective(500px) translateZ(55px) translateX(60%)' }}
            animate={
                isInView ? { opacity: 1, transform: 'translateZ(0px) translateX(0%)' } : ''
            }
            transition={{ duration: 1.25, delay: index * 0.15, ease: 'easeOut' }}
            // w-[200px] sm:w-[240px]
            className={`${isAnimating && 'pointer-events-none'} hover:z-20 sm:hover:mx-4 w-[220px] sm:w-[270px] ring-2 ring-green-950 relative group/majorcard hover:rounded-b-none sm:hover:!scale-[115%] transition-all duration-500 select-none rounded-t-xl rounded-b-lg bg-gradient-to-t from-[#040404] via-green-950 to-green-950 shadow-md hover:shadow-2xl shadow-black hover:shadow-green-300`}
            key={details.leaderName}
        >
            {/* Leader Portrait + Leader Quote Overlay */}
            <div
                className='sm:hover:scale-110 sm:hover:-translate-y-2 outline-neutral-300 outline-0 hover:outline-2 active:!scale-[104%] transition-all duration-200 rounded-t-xl rounded-b-lg drop-shadow-2xl outline-6 active:outline-8 active:outline-neutral-300 outline-double overflow-hidden'
                onMouseDown={() => {
                    setDisplayQuote(!displayQuote)
                    playSfx_clunk()
                }}
                onMouseUp={() => playSfx_clunk()}
            >
                <motion.div
                    animate={displayQuote ? { opacity: 1 } : { opacity: 0 }}
                    className='z-10 absolute w-full h-full opacity-0 outline-black bg-gradient-to-b from-[#040a0470] to-black rounded-t-xl rounded-b-lg'
                >
                    <motion.div
                        className='absolute'
                        initial={{ transform: 'translateY(-8%)' }}
                        animate={{ transform: 'translateY(8%)' }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'linear',
                            duration: 1.5,
                        }}
                    >
                        <FaQuoteLeft size={26} className='p-1 sm:p-0 m-2 sm:m-4' />
                    </motion.div>

                    <div className='w-full h-full flex items-center px-1 sm:px-8 font-semibold text-shadow-lg shadow-black text-center whitespace-pre-line leading-[14px] sm:leading-5 text-[16px] text-balance'>
                        {details.quote
                            ? details.quote
                            : FALLBACK_QUOTE}
                    </div>
                </motion.div>

                <Image
                    width={320}
                    height={320}
                    className='absolute w-full h-48 object-cover rounded-t-xl rounded-b-lg blur-sm opacity-75 '
                    alt=''
                    src={details.imgSrc}
                />

                <Image
                    width={320}
                    height={320}
                    className='relative w-full h-48 object-contain rounded-t-xl rounded-b-lg'
                    alt=''
                    src={details.imgSrc}
                />
                
            </div>

            {/* Leader Name and Role */}
            <div className='rounded-xl p-2 py-3 group-hover/majorcard:pb-0'>
                {/* <div className='absolute text-[10px] sm:text-[16px]'>{details.icon}</div> */}
                <div className='absolute text-sm sm:text-lg subpixel-antialiased'>{details.icon}</div>
                <p className='title-main text-[16px] sm:text-[18px] font-semibold text-center group-hover/majorcard:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] duration-300 group-hover/majorcard:animate-pulse tracking-tight text-balance'>
                    {details.name}
                </p>
                <p className='text-[13px] sm:text-[15px] font-semibold text-center text-neutral-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]'>
                    {details.role}
                </p>
            </div>

            {/* Leader socials and other links, dynamically generated */}
            <div
                onMouseDown={() => playSfx_clunk()}
                onMouseUp={() => playSfx_clunk()}
                className='z-10 absolute hidden group-hover/majorcard:flex border-b-4 border-green-700 justify-center w-full rounded-b-lg bg-gradient-to-b from-[#040a04] to-black gap-2 px-2 pb-2'
            >
                {details.email ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={details.email}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <MdOutlineMail size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {details.linktree ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={details.linktree}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiLinktree size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {details.github ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={details.github}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiGithub size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {details.instagram ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={details.instagram}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiInstagram size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {details.discord ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={details.discord}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiDiscord
                            onMouseUp={() => playSfx_discorda()}
                            size={'3vh'}
                            className='h-10'
                        />
                    </a>
                ) : (
                    <></>
                )}
                {details.linkedin ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={details.linkedin}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiLinkedin size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {details.website ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={details.website}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaGlobeAmericas size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
            </div>
        </motion.div>
    )
}



function MinorLeaderCard({ details, index }) {
    const [playSfx_hoverThunk] = useSound('/assets/audio/muffled_hover_thunk.mp3')

    const [isAnimating, setIsAnimating] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            onAnimationStart={() => {
                setIsAnimating(true)
            }}
            onAnimationComplete={() => {
                setIsAnimating(false)
            }}
            onMouseEnter={() => playSfx_hoverThunk()}
            initial={{ opacity: 0, transform: 'translateX(50%)' }}
            animate={
                isInView ? { opacity: 1, transform: 'translateX(0%)' } : ''
            }
            transition={{ duration: 1.3, delay: index * 0.45, ease: 'easeOut' }}
            className={`${isAnimating && 'pointer-events-none'} w-[256px] hover:z-20 relative leading-[21px] opacity-0 hover:w-[280px] border-b border-neutral-800 border-1 transition-all duration-300 rounded-xl select-none shadow-sm hover:shadow-lg ${details.color_complex} bg-gradient-to-b to-transparent`}
            key={details.title}
        >
            {/* Role and Name of Person */}
            <div className='rounded-xl p-3'>
                <div className='absolute text-xl'>{details.icon}</div>
                <p className='title-main text-lg sm:text-xl font-semibold text-center'>
                    {details.title}
                </p>
                <p className='text-base font-semibold text-center text-neutral-300'>
                    {details.label}
                </p>
            </div>
        </motion.div>
    )
}



export function Leadership() {

    const [currentPage, setCurrentPage] = useState(0)

    return (
        <div className='w-full h-full flex justify-center items-center pb-40 bg-gradient-to-b from-black via-[#031302] to-black'>
            {/* <Element name='leadership' /> */}

            <div className='max-w-[1400px] flex flex-col justify-center items-center w-full h-full py-[44px] px-[10px] gap-4 overflow-x-hidden'>

                <div className='flex flex-row mb-[-8px]'>
                    <Image
                        src={'/assets/bits/kits/kitty_bubbles.png'}
                        className='z-10 w-10 md:w-12 hover:!scale-110 transition duration-300 ease-out'
                        alt=''
                        width={32}
                        height={32}
                        unoptimized
                    />
                    <Image
                        src={'/assets/bits/kits/kitty_think.png'}
                        className='z-10 w-10 md:w-12 hover:!scale-110 transition duration-300 ease-out'
                        alt=''
                        width={32}
                        height={32}
                        unoptimized
                    />
                    <Image
                        src={'/assets/bits/kits/kitty_cook.png'}
                        className='z-10 w-10 md:w-12 hover:!scale-110 transition duration-300 ease-out'
                        alt=''
                        width={32}
                        height={32}
                        unoptimized
                    />
                </div>

                <div className='flex flex-col items-center'>
                    <ReactTyped
                        className='title-main w-full text-center text-3xl sm:text-4xl font-semibold'
                        strings={['Our Chapter Leadership']}
                        typeSpeed={75}
                        startWhenVisible
                    />

                    <div className='flex flex-row py-2 gap-x-2 text-xl font-semibold text-[#ffea76] drop-shadow-[0_0_4px_rgba(255,205,60,0.5)] '>
                        <CgArrowRightR className='my-auto rotate-180 text-2xl cursor-pointer' onClick={() => {
                            setCurrentPage(currentPage == 0 ? leadership.length - 1 : currentPage - 1)
                        }} />
                        <p className='title-main text-center text-[#ffea76] drop-shadow-[0_0_4px_rgba(255,205,60,0.3)] select-none'>
                            {leadership[currentPage].title}
                        </p>
                        <CgArrowRightR className='my-auto text-2xl cursor-pointer' onClick={() => {
                            setCurrentPage(currentPage == leadership.length - 1 ? 0 : currentPage + 1)
                        }} />
                    </div>
                    
                </div>

                <div className='flex flex-col gap-y-6'>

                    <div className='w-full text-4xl font-semibold border-b-2 border-[#345222] drop-shadow-[0_0_30px_rgba(50,255,50,1)]'></div>

                    <div className='flex flex-col'>
                        {leadership.map(
                            (section, index) => (
                                <div className={currentPage == index ? 'block' : 'hidden'} key={section.toString()}>

                                    {/* Major Leadership Role Cards */}
                                    <div className='flex flex-row flex-wrap justify-center align-middle gap-x-4 sm:gap-x-7 gap-y-[18px] group/majorcards'>
                                        {section.major.map(
                                            (details, index) => (
                                                <MajorLeaderCard
                                                    key={details.toString()}
                                                    index={index}
                                                    details={details}
                                                />
                                            )
                                        )}
                                    </div>

                                    {/* Minor Leadership Role Cards */}
                                    <div className='flex flex-row flex-wrap justify-center align-middle mt-5 gap-x-4 sm:gap-x-8 gap-y-4'>
                                        {section.minor.map(
                                            (details, index) => (
                                                <MinorLeaderCard
                                                    key={details.toString()}
                                                    index={index}
                                                    details={details}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* <p className='px-6 title-main text-neutral-700 text-center font-semibold'>
                        pssst! past Leadership will be shown soon!~our history books.
                    </p> */}

                    <div className='w-full text-4xl font-semibold border-b-2 border-[#345222] drop-shadow-[0_0_30px_rgba(50,255,50,1)]'></div>

                </div>
            </div>

        </div>
    )
}
