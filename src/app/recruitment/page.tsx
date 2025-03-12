import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Footer, IntroFade, InfoHub } from 'shared/_modules'
import { IoHomeOutline } from 'react-icons/io5'

export default function Recruitment(): React.ReactNode {
    return (
        <div className='bg-[#3f341f]'>

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

            <IntroFade />

            <div className='flex flex-col h-screen justify-center items-center gap-2 md:gap-4 pt-4 px-4 pb-10'>
                <Image
                    src={'/assets/bits/mascot.gif'}
                    width={100}
                    height={100}
                    alt=''
                    className='z-10 hover:!scale-105 transition duration-300 ease-out'
                    unoptimized
                />
                
                <h1 className='title-main w-full text-center text-xl md:text-4xl font-semibold'>
                    <span className='text-green-400 drop-shadow-[0_0_10px_rgba(50,250,50,0.45)]'>
                        Join Us.{' '}
                    </span>
                    <span className='text-yellow-300 drop-shadow-[0_0_10px_rgba(255,250,50,0.45)]'>
                        The Computer Science Club.
                    </span>
                </h1>
                <h1 className='title-main w-full text-center text-2xl md:text-5xl font-semibold drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]'>
                    Open to all for 2024—2025.
                </h1>
                <h1 className='title-main w-full text-center text-xl font-semibold drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] animate-pulse'>
                    Scroll down to find out how.
                </h1>

                <Link
                    href={'/home'}
                    className='z-20 mt-3 relative group w-[300px] hover:w-[340px] active:scale-95 duration-150 hover:border-green-900 border-white rounded-xl hover:outline hover:outline-[4px] active:outline-4 text-white text-lg title-main drop-shadow-[0_16px_20px_rgba(0,0,0,0.7)] overflow-hidden'
                >
                    <IoHomeOutline className='absolute w-full h-full group-hover:translate-y-0 -translate-y-[100%] duration-300 bg-gradient-to-t from-[#16a34aec] to-[#ffffff91] pointer-events-none' />
                    <button className='flex w-full h-full justify-center py-[6px] font-semibold text-center text-shadow-lg shadow-black hover:bg-green-600 bg-neutral-900 bg-opacity-50 duration-300 hover:border-green-300 overflow-hidden'>
                        <p>Or, Explore More at Home</p>
                    </button>
                </Link> 
            </div>

            <InfoHub />

            <div className='absolute w-full h-full'>
                {/* top        */}
                <div className='absolute top-0 w-full h-[15%] bg-gradient-to-b from-black to-transparent' />
            </div>

            <div className='w-full h-full flex flex-col gap-8 py-40 justify-center items-center'>

                <h1 className='title-main w-full text-center text-2xl md:text-5xl font-semibold drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]'>
                    Join our Online Community on Discord
                </h1>

                <iframe src='https://e.widgetbot.io/channels/939701223144185867/939714632929665034'
                    allow='clipboard-write'
                    height='600'
                    width='75%'
                    className='rounded-2xl drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]'
                />

                <a href='https://discord.com/invite/z5P9kccwRh' target='_blank' className='w-[75%] h-[72px] hover:scale-[101%] hover:animate-pulse transition-all opacity-70 hover:opacity-85 duration-300'>
                    <iframe
                        title='discord'
                        src='https://ptb.discord.com/widget?id=939701223144185867&theme=dark'
                        width='100%'
                        height='72'
                        className='rounded-2xl pointer-events-none '
                        sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
                    ></iframe>
                    <p className='font-semibold mt-2 ml-2'>👉 Click to join us!</p>
                </a>
            </div>

            <Footer />
        </div>
    )
}
