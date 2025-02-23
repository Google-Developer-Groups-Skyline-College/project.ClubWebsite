import React from 'react'
import Image from 'next/image'

import { Footer } from 'shared/_modules'

export default function Promotion(): React.ReactNode {
    return (
        <>
            <div className='w-full h-[220vh] overflow-hidden'>

                {/* top        */}
                <div className='absolute top-0 w-full h-[15%] bg-gradient-to-b from-black to-transparent' />
                {/* bottom     */}
                <div className='absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[#0a0a0a] to-transparent' />

                <Image
                    src='/assets/home/skyline_backdrop_negative.png'
                    width={1600}
                    height={1600}
                    alt=''
                    className='bg-white object-cover aspect-auto` absolute w-full h-[220vh] opacity-[80%]'
                    priority
                />

                <div className='w-full h-full flex flex-col mt-64 justify-center items-center'>

                    <Image
                        src={'/assets/bits/mascot.gif'}
                        width={100}
                        height={100}
                        alt=''
                        className='z-10 hover:!scale-105 transition duration-300 ease-out'
                        unoptimized
                    />

                    <div className='flex flex-col gap-2 md:gap-4 pt-4 px-4 pb-10'>
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
                            Join our Community on Discord now below!
                        </h1>
                    </div>

                    <iframe src="https://e.widgetbot.io/channels/939701223144185867/939714632929665034" 
                        allow="clipboard-write; fullscreen" 
                        height="600"
                        className='rounded-2xl drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]'
                        width="75%">
                    </iframe>

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

            </div>
            <Footer />
        </>
    )
}
