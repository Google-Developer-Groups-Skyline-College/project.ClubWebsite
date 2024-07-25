'use client'

import React, { useRef, useState } from 'react'
import { Element } from 'react-scroll'

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
import { FaNetworkWired, FaQuoteLeft } from 'react-icons/fa'

const { leadership, FALLBACK_QUOTE } = require('@/dispositions/leadership.tsx')

interface props_MajorLeaderCard {
    leaderName: string
    index: number
}

interface props_MinorLeaderCard {
    roleName: string
    index: number
}

const MajorLeaderCard: React.FC<props_MajorLeaderCard> = ({
    leaderName,
    index,
}) => {
    const [playSfx_clunk] = useSound('/assets/audio/clunk.mp3')
    const [playSfx_hoverThunk] = useSound('/assets/audio/muffled_hover_thunk.mp3')
    const [playSfx_discorda] = useSound('/assets/audio/discorda.mp3')

    const [displayQuote, setDisplayQuote] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const majorLeaderDetails = leadership.major[leaderName]

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
            className={`${isAnimating && 'pointer-events-none'} hover:z-20 sm:hover:mx-4 w-[160px] sm:w-[200px] ring-2 ring-green-950 relative group/majorcard hover:rounded-b-none sm:hover:!scale-[115%] transition-all duration-500 select-none rounded-t-xl rounded-b-lg bg-gradient-to-t from-[#040404] via-green-950 to-green-950 shadow-md hover:shadow-2xl shadow-neutral-600 hover:shadow-green-300`}
            key={leaderName}
        >
            {/* Leader Portrait + Leader Quote Overlay */}
            <div
                className='sm:hover:scale-110 sm:hover:-translate-y-2 outline-neutral-300 outline-0 hover:outline-2 active:!scale-[104%] transition-all duration-200 rounded-t-xl rounded-b-lg drop-shadow-2xl outline-6 active:outline-8 active:outline-neutral-300 outline-double'
                onMouseDown={() => {
                    setDisplayQuote(!displayQuote)
                    playSfx_clunk()
                }}
                onMouseUp={() => playSfx_clunk()}
            >
                <motion.div
                    animate={displayQuote ? { opacity: 1 } : { opacity: 0 }}
                    className='z-10 absolute w-full opacity-0 outline-black bg-gradient-to-b from-[#040a0470] to-black rounded-t-xl rounded-b-lg'
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

                    <div className='aspect-square w-full flex items-center px-1 sm:px-6 font-semibold text-shadow-lg shadow-black'>
                        {/* whitespace-pre-line enables usage of \n below */}
                        <div className='text-center text-white whitespace-pre-line leading-[14px] sm:leading-5 text-sm'>
                            {majorLeaderDetails.quote
                                ? majorLeaderDetails.quote
                                : FALLBACK_QUOTE}
                        </div>
                    </div>
                </motion.div>

                <Image
                    width={320}
                    height={320}
                    className='rounded-t-xl rounded-b-lg aspect-square'
                    alt=''
                    src={majorLeaderDetails.imgSrc}
                />
            </div>

            {/* Leader Name and Role */}
            <div className='rounded-xl p-2 py-3 group-hover/majorcard:pb-0'>
                <div className='absolute text-[10px] sm:text-[16px]'>{majorLeaderDetails.icon}</div>
                <h1 className='title-main text-[16px] sm:text-[19px] font-semibold text-center group-hover/majorcard:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] duration-300 group-hover/majorcard:animate-pulse'>
                    {leaderName}
                </h1>
                <h2 className='text-[13px] sm:text-[15px] font-semibold text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]'>
                    {majorLeaderDetails.role}
                </h2>
            </div>

            {/* Leader socials and other links, dynamically generated */}
            <div
                onMouseDown={() => playSfx_clunk()}
                onMouseUp={() => playSfx_clunk()}
                className='z-10 absolute hidden group-hover/majorcard:flex border-b-4 border-green-700 justify-center w-full rounded-b-lg bg-gradient-to-b from-[#040a04] to-black gap-2 px-2 pb-2'
            >
                {majorLeaderDetails.linktree ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={majorLeaderDetails.linktree}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiLinktree size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {majorLeaderDetails.github ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={majorLeaderDetails.github}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiGithub size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {majorLeaderDetails.instagram ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={majorLeaderDetails.instagram}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiInstagram size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {majorLeaderDetails.discord ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={majorLeaderDetails.discord}
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
                {majorLeaderDetails.linkedin ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={majorLeaderDetails.linkedin}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiLinkedin size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {majorLeaderDetails.website ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={majorLeaderDetails.website}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaNetworkWired size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
            </div>
        </motion.div>
    )
}



const MinorLeaderCard: React.FC<props_MinorLeaderCard> = ({
    roleName,
    index,
}) => {
    const [playSfx_hoverThunk] = useSound('/assets/audio/muffled_hover_thunk.mp3')

    const [isAnimating, setIsAnimating] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const minorLeaderDetails = leadership.minor[roleName]

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
            className={`${isAnimating && 'pointer-events-none'} w-[256px] hover:z-20 relative leading-[21px] opacity-0 hover:w-[280px] border-b border-neutral-800 border-1 transition-all duration-300 rounded-xl bg-gradient-to-b shadow-md hover:shadow-lg ${minorLeaderDetails.color_complex} to-transparent`}
            key={roleName}
        >
            {/* Role and Name of Person */}
            <div className='rounded-xl p-3'>
                <div className='absolute text-xl'>{minorLeaderDetails.icon}</div>
                <h1 className='title-main text-lg sm:text-xl font-semibold text-center'>
                    {roleName}
                </h1>
                <h2 className='text-base font-semibold text-center'>
                    {minorLeaderDetails.label}
                </h2>
            </div>
        </motion.div>
    )
}



export function Leadership(): React.ReactNode {
    return (
        // bg-[radial-gradient(#000_1px,transparent_1px)]
        <div className='w-full h-full pb-40 text-gray-300 bg-gradient-to-b from-black via-[#031302] to-black'>
            <Element name='leadership' />

            <div className='flex flex-col justify-center items-center w-full h-full py-[44px] px-[10px] sm:px-[7.5vw] lg:px-[14.2vw] gap-4 overflow-x-hidden'>
                <div>
                    <h1 className='title-main w-full text-center text-3xl sm:text-4xl font-semibold drop-shadow-[0_0_14px_rgba(255,255,255,0.5)]'>
                        Our Club Leadership
                    </h1>
                    <h1 className='title-main w-full text-center text-xl font-semibold text-[#FCD690] drop-shadow-[0_0_20px_rgba(255,205,60,0.9)]'>
                        👑 2023 - 2024 👑
                    </h1>
                </div>

                {/* <div className="grid grid-cols-4 gap-6 my-4 mx-[20%]"> */}
                <div className='w-full text-4xl font-semibold border-b-2 border-[#345222] mb-2 drop-shadow-[0_0_30px_rgba(50,255,50,1)]'></div>

                {/* Major Leadership Role Cards */}
                <div className='flex flex-row flex-wrap justify-center align-middle gap-x-4 sm:gap-x-7 gap-y-[18px] group/majorcards'>
                    {Object.keys(leadership.major).map(
                        (majorLeaderName, index) => (
                            <MajorLeaderCard
                                key={majorLeaderName + index}
                                index={index}
                                leaderName={majorLeaderName}
                            />
                        )
                    )}
                </div>

                {/* Minor Leadership Role Cards */}
                <div className='flex flex-row flex-wrap justify-center align-middle mt-1 gap-x-4 sm:gap-x-8 gap-y-4'>
                    {Object.keys(leadership.minor).map(
                        (minorLeaderRoleName, index) => (
                            <MinorLeaderCard
                                key={minorLeaderRoleName + index}
                                index={index}
                                roleName={minorLeaderRoleName}
                            />
                        )
                    )}
                </div>

                <p className='px-6 title-main text-neutral-700 text-center font-semibold'>
                    pssst! past Leadership will be shown soon!~our history books.
                </p>

                <div className='w-full text-4xl font-semibold border-b-2 border-[#345222] drop-shadow-[0_0_30px_rgba(50,255,50,1)]'></div>
            </div>
        </div>
    )
}
