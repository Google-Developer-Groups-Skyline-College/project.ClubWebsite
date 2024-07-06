'use client'

import React, { useRef, useState } from 'react'
import { Element } from 'react-scroll'

import Image from 'next/image'

import { motion, useInView } from 'framer-motion'
import { useSound } from 'use-sound'

import {
    SiLinktree,
    SiGithub,
    SiInstagram,
    SiDiscord,
    SiLinkedin,
} from 'react-icons/si'
import { FaNetworkWired, FaQuoteLeft } from 'react-icons/fa'

const sfx_clunk = '/assets/sound_fx/clunk.mp3'
const sfx_hoverThunk = '/assets/sound_fx/muffled_hover_thunk.mp3'
const sfx_discorda = '/assets/sound_fx/discorda.mp3'

const { leadership, FALLBACK_QUOTE } = require('../dispositions/leadership.tsx')

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
    const [playSfx_clunk] = useSound(sfx_clunk)
    const [playSfx_hoverThunk] = useSound(sfx_hoverThunk)
    const [playSfx_discorda] = useSound(sfx_discorda)

    const [displayQuote, setDisplayQuote] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref)

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
            initial={{ opacity: 0, transform: 'perspective(500px) translateZ(100px) translateX(70%)' }}
            animate={
                isInView ? { opacity: 1, transform: 'translateZ(0px) translateX(0%)' } : ''
            }
            transition={{ duration: 1.25, delay: index * 0.15, ease: 'easeOut' }}
            className={`${isAnimating && 'pointer-events-none'} w-[162px] sm:w-[210px] hover:z-20 ring-2 ring-green-950 relative group opacity-0 hover:rounded-b-none hover:!scale-110 transition duration-500 ease-out select-none rounded-xl bg-gradient-to-t from-[#040404] via-green-950 to-green-950 shadow-md shadow-neutral-400`}
            key={leaderName}
        >
            {/* Leader Portrait + Leader Quote Overlay */}
            <div
                className='hover:scale-105 active:scale-95 transition duration-300 ease-out'
                onMouseDown={() => {
                    setDisplayQuote(!displayQuote)
                    playSfx_clunk()
                }}
                onMouseUp={() => playSfx_clunk()}
            >
                <motion.div
                    animate={displayQuote ? { opacity: 1 } : { opacity: 0 }}
                    className='z-10 absolute w-full outline-4 active:outline-8 active:outline-neutral-100 duration-200 outline-double opacity-0 outline-black bg-gradient-to-b from-[#040a0470] to-black rounded-xl drop-shadow-2xl'
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

                    <div className='aspect-square w-full flex items-center px-6 font-semibold text-shadow-lg shadow-black'>
                        {/* whitespace-pre-line enables usage of \n below */}
                        <div className='text-center text-white whitespace-pre-line leading-[14px] sm:leading-5 text-sm'>
                            {majorLeaderDetails.quote
                                ? majorLeaderDetails.quote
                                : FALLBACK_QUOTE}
                        </div>
                    </div>
                </motion.div>

                <Image
                    width={1024}
                    height={1024}
                    className='rounded-xl aspect-square'
                    alt='mascot'
                    src={majorLeaderDetails.imgSrc}
                />
            </div>

            {/* Leader Name and Role */}
            <div className='rounded-xl p-3 group-hover:pb-0'>
                <div className='absolute text-[16px]'>{majorLeaderDetails.icon}</div>
                <h1 className='title-main text-[17px] sm:text-xl font-semibold text-center group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] duration-300 group-hover:animate-pulse'>
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
                className='z-10 absolute hidden group-hover:flex border-b-4 border-green-700 justify-center w-full rounded-b-xl bg-gradient-to-b from-[#040a04] to-black gap-2 px-2 pb-2'
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
    const [playSfx_hoverThunk] = useSound(sfx_hoverThunk)

    const [isAnimating, setIsAnimating] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref)

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
            className={`${isAnimating && 'pointer-events-none'} w-[240px] hover:z-20 relative group leading-[21px] opacity-0 hover:!scale-110 border-b border-neutral-800 border-1 transition duration-300 ease-out select-none rounded-xl bg-gradient-to-b shadow-md ${minorLeaderDetails.color_complex} to-transparent`}
            key={roleName}
        >
            {/* Role and Name of Person */}
            <div className='rounded-xl p-4'>
                <div className='absolute text-lg'>{minorLeaderDetails.icon}</div>
                <h1 className='title-main text-lg font-semibold text-center'>
                    {roleName}
                </h1>
                <h2 className='text-md font-semibold text-center'>
                    {minorLeaderDetails.label}
                </h2>
            </div>
        </motion.div>
    )
}

export default function Leadership(): React.ReactNode {
    return (
        // bg-[radial-gradient(#000_1px,transparent_1px)]
        <div className='w-full h-full pb-40 text-gray-300 bg-gradient-to-b from-black via-[#031302] to-black'>
            <Element name='leadership' />   

            <div className='flex flex-col justify-center items-center w-full h-full px-[10px] sm:px-[7.5vw] py-[44px] lg:px-[15vw] gap-4 overflow-x-hidden'>
                <div>
                    <h1 className='title-main w-full text-center text-3xl font-semibold leading-7 drop-shadow-[0_0_14px_rgba(255,255,255,0.5)]'>
                        Our Club Leadership
                    </h1>
                    <h1 className='title-main w-full text-center text-lg font-semibold text-yellow-100 drop-shadow-[0_0_20px_rgba(255,205,60,0.9)]'>
                        👑 2023 - 2024 👑
                    </h1>
                </div>

                {/* <div className="grid grid-cols-4 gap-6 my-4 mx-[20%]"> */}
                <div className='w-full text-4xl font-semibold border-b-2 border-[#345222] mb-2 drop-shadow-[0_0_30px_rgba(50,255,50,1)]'></div>

                {/* Major Leadership Role Cards */}
                <div className='flex flex-row flex-wrap justify-center align-middle gap-x-4 sm:gap-x-7 gap-y-[18px]'>
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
                <div className='flex flex-row flex-wrap justify-center align-middle gap-x-4 my-2 sm:gap-x-8 gap-y-3'>
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

                <p className='text-neutral-700 px-6 font-Poppins font-semibold text-center'>
                    pssst! past Leadership will be shown soon!~our history books.
                </p>

                <div className='w-full text-4xl font-semibold border-b-2 border-[#345222] drop-shadow-[0_0_30px_rgba(50,255,50,1)]'></div>
            </div>
        </div>
    )
}
