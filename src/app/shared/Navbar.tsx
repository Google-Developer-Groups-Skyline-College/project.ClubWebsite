'use client'

/*
    TODO:
        Add context pull-out section for hovering over announcement bar
*/

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// import { Link as ScrollLink, animateScroll } from 'react-scroll'
import Link from 'next/link'

import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { GoHome, GoCodeOfConduct } from 'react-icons/go'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiTool } from 'react-icons/fi'

import { motion } from 'framer-motion'

import { ANNOUNCEMENT_TEXT, ANNOUNCEMENT_GRAD_COLOR } from '@/dispositions/general'

export function Navbar(): React.ReactNode {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [announceDismissed, setAnnounceDismissed] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 40 || announceDismissed)
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [announceDismissed])

    return (
        <div className='z-50 absolute flex flex-col w-full'>

            {/* Announcement Banner */}
            {ANNOUNCEMENT_TEXT ? (
                <motion.div
                    onMouseDown={() => {
                        setAnnounceDismissed(true)
                    }}
                    className={`z-10 w-full h-[58px] sm:h-[40px] px-6 absolute flex justify-between items-center bg-gradient-to-b ${ANNOUNCEMENT_GRAD_COLOR} to-black group/announcement_bar overflow-hidden`}
                    initial={{
                        opacity: 0,
                        translateY: '-100%',
                        position: 'static',
                    }}
                    animate={
                        !announceDismissed
                            ? { opacity: 1, translateY: '0%' }
                            : {
                                opacity: 0,
                                translateY: '-100%',
                                position: 'absolute'
                            }
                    }
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <p className='w-full font-semibold text-xs sm:text-sm text-center text-orange-200 group-hover/announcement_bar:animate-pulse'>
                        {ANNOUNCEMENT_TEXT}
                    </p>
                    
                    <Image
                        width={256}
                        height={128}
                        src={'/assets/bits/diagonal_slowglide_overlay.gif'}
                        alt=''
                        className='-z-10 absolute w-full opacity-5 group-hover/announcement_bar:opacity-20 transition-all duration-500'
                        unoptimized
                    />
                
                    <p className='z-10 right-4 absolute text-neutral-600 text-xs lg:text-base font-semibold select-none animate-pulse'>
                        press to dismiss
                    </p>
                </motion.div>
            ) : (
                <></>
            )}

            {/* Top Bar */}
            <motion.div
                className={(sticky ? 'fixed ' : '') + 'z-20 w-full h-[72px] px-4 flex justify-center items-center bg-gradient-to-b from-black/90 to-transparent'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
            >
                <Link href='/' className='z-10 absolute left-0 drop-shadow-lg ml-4 hover:rotate-180 active:animate-pulse duration-500'>
                    <Image
                        width={48}
                        height={48}
                        src={'/assets/bits/mascot.gif'}
                        alt=''
                        unoptimized
                    />
                </Link>

                {/* Navigation button row */}
                <div className='hidden md:flex flex-row text-[15px] font-semibold w-full justify-center gap-x-2 opacity-35 hover:opacity-100 transition-opacity duration-300'>

                    <Link
                        href='/'
                        // FIX:
                        // onMouseUp={() => {
                        //     animateScroll.scrollToTop()
                        // }}
                        className='py-1 px-3 hover:px-6 active:scale-90 flex bg-neutral-950/25 hover:bg-neutral-700/50 rounded-lg transition-all duration-300'
                    >
                        <GoHome className='my-auto mr-2' />
                        <p>Home</p>
                    </Link>

                    <Link href='/projects' className='py-1 px-3 hover:px-6 active:scale-90 flex bg-neutral-950/25 hover:bg-neutral-700/50 rounded-lg transition-all duration-300'>
                        <FiTool className='my-auto mr-2' />
                        <p>Projects</p>
                    </Link>

                    <Link href='/hackathon' className='py-1 px-3 hover:px-6 active:scale-90 flex bg-neutral-950/25 hover:bg-yellow-700/50 rounded-lg transition-all duration-300'>
                        <HiOutlineRocketLaunch className='my-auto mr-2 text-yellow-300' />
                        <p>The Intercollegiate Hackathon</p>
                    </Link>

                    <Link href='https://discord.com/invite/z5P9kccwRh' target='_blank' className='py-1 px-3 hover:px-6 active:scale-90 flex bg-neutral-950/25 hover:bg-pink-400/30 rounded-lg transition-all duration-300'>
                        <GoCodeOfConduct className='my-auto mr-2 text-pink-300'/>
                        <p>Join Us!</p>
                    </Link>
                    {/* <ScrollLink to='recruitment' offset={-1200} smooth={true} duration={2500}>Join Us!</ScrollLink> */}
                </div>





                {/* Mobile menu */}

                {/* Mobile menu button */}
                <div onClick={handleClick} className='absolute md:hidden z-10 right-0 mr-6 text-2xl hover:cursor-pointer'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* Mobile menu */}
                <div
                    className={
                        !nav
                            ? 'hidden'
                            : 'absolute md:hidden top-0 left-0 w-full h-screen bg-neutral-900/95 flex flex-col justify-center items-center'
                    }
                >
                    <div className='flex flex-col gap-4 font-semibold text-2xl'>
                        <Link
                            href='/'
                            // FIX:
                            // onMouseUp={() => {
                            //     animateScroll.scrollToTop()
                            //     handleClick()
                            // }}
                        >
                            <div className='p-3 hover:px-5 flex bg-neutral-950/25 hover:bg-neutral-700/50 rounded-lg transition-all'>
                                <GoHome className='my-auto mr-2' />
                                Home
                            </div>
                        </Link>

                        <Link href='./projects' onMouseUp={handleClick}>
                            <div className='p-3 hover:px-5 flex bg-neutral-950/25 hover:bg-neutral-700/50 rounded-lg transition-all'>
                                <FiTool className='my-auto mr-2' />
                                Projects
                            </div>
                        </Link>

                        <Link href='./hackathon' onMouseUp={handleClick}>
                            <div className='p-3 hover:px-5 flex bg-neutral-950/25 hover:bg-yellow-700/50 rounded-lg transition-all'>
                                <HiOutlineRocketLaunch className='my-auto mr-2 text-yellow-300' />
                                The Intercollegiate Hackathon
                            </div>
                        </Link>

                        <Link href='https://discord.gg/z5P9kccwRh' onMouseUp={handleClick}>
                            <div className='p-3 hover:px-5 flex bg-neutral-950/25 hover:bg-pink-400/30 rounded-lg transition-all'>
                                <GoCodeOfConduct className='my-auto mr-2 text-pink-300' />
                                Join Us!
                            </div>
                        </Link>

                    </div>
                </div>
            </motion.div>
        </div>
    )
}
