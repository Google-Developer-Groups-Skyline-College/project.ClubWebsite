import Image from 'next/image'
import { useState } from 'react'

import { useReward } from 'react-rewards'

export function Podiums() {
    const { reward, isAnimating } = useReward('rewardId', 'confetti', { position: 'absolute', decay: 0.965, startVelocity: 18, spread: 180, lifetime: 200 })

    return (
        <div className='w-full h-[1000px] my-60 flex flex-col justify-center items-center bg-black'>

            <Image
                src={'/assets/hackathon/galaxy.jpg'}
                alt=''
                width={2000}
                height={1100}
                className='absolute w-full h-full object-cover opacity-40 blur-[16px]'
            />

            {/* gradient       */}
            <div className='absolute w-full h-full'>
                {/* top        */}
                <div className='absolute top-[-16px] w-full h-[15%] bg-gradient-to-b from-black to-transparent' />
                {/* bottom     */}
                <div className='absolute bottom-[-16px] w-full h-[20%] bg-gradient-to-t from-black to-transparent' />
            </div>

            

            <div className='max-w-[1280px] h-full flex flex-col justify-center items-center gap-y-2'>

                <p className='title-main text-2xl'>Game Development Track</p>
                <p className='pb-2 title-main text-4xl sm:text-5xl text-transparent font-extrabold bg-gradient-to-t from-white to-[#ffbb00] bg-clip-text drop-shadow-[0_0_40px_rgba(50,250,255,1)]'>
                    Winning Submissions
                </p>

                <div className='my-2 flex flex-col justify-center items-center gap-y-4'>
                    <div className='group relative w-full h-[320px] flex flex-col justify-center items-center bg-gradient-to-r from-yellow-950 via-yellow-600 to-yellow-600 rounded-[32px]' onMouseEnter={() => { if (!isAnimating ) { reward() } } }>
                        <Image
                            src={'/assets/hackathon/game_thumbnails/metal_dug.png'}
                            alt=''
                            width={800}
                            height={800}
                            className='z-0 absolute w-full h-full rounded-[32px] object-cover opacity-20 group-hover:opacity-40 transition duration-500'
                        />
                        
                        <span id='rewardId' className='absolute' />

                        <div className='absolute h-full left-[24px] flex flex-col opacity-35 group-hover:opacity-100 group-hover:animate-pulse transition duration-500'>

                            <p className='text-center text-[72px] h-[72px] my-2 title-main font-semibold'>#1</p>
                            <Image
                                src={'/assets/hackathon/podium.png'}
                                alt=''
                                width={128}
                                height={128}
                                className='w-full h-10'
                            />
                        </div>
                        <p className='z-10 title-main text-[82px] font-semibold'>Metal Dug</p>
                        <p className='z-10 title-main text-[16px] font-semibold mt-[-20px] text-neutral-200'>A mix of Metal Slug and Dig Dug!</p>
                    </div>



                    <div className='w-full flex flex-col xl:flex-row justify-center items-center gap-x-4 bg-black'>

                        <div className='group relative w-[600px] hover:w-[640px] h-[140px] flex flex-col justify-center items-center bg-gradient-to-r from-neutral-900 via-neutral-400 to-neutral-400 transition-all rounded-[32px]'>
                            <Image
                                src={'/assets/hackathon/game_thumbnails/meteor_strike.png'}
                                alt=''
                                width={800}
                                height={800}
                                className='z-0 absolute w-full h-full rounded-[32px] object-cover opacity-30 group-hover:opacity-60 transition duration-500'
                            />
                            <div className='absolute h-full left-[24px] flex flex-col justify-center opacity-25 group-hover:opacity-100 group-hover:animate-pulse transition duration-500'>
                                <p className='text-center text-[48px] h-[48px] my-1 title-main font-semibold'>#2</p>
                                <Image
                                    src={'/assets/hackathon/podium.png'}
                                    alt=''
                                    width={128}
                                    height={128}
                                    className='w-full my-1 h-6'
                                />
                            </div>
                            
                            <p className='z-10 title-main text-[42px] font-semibold'>Meteor Strike</p>
                            <p className='z-10 title-main text-[16px] mt-[-12px] font-semibold text-neutral-300'>Missile Command for a modern era.</p>
                        </div>

                        <div className='group relative w-[600px] hover:w-[640px] h-[140px] flex flex-col justify-center items-center bg-gradient-to-r from-amber-950 via-amber-700 to-amber-700 transition-all rounded-[32px]'>
                            <Image
                                src={'/assets/hackathon/game_thumbnails/gpu_simulator.png'}
                                alt=''
                                width={800}
                                height={800}
                                className='z-0 absolute w-full h-full rounded-[32px] object-cover opacity-10 group-hover:opacity-15 transition duration-500'
                            />
                            <div className='absolute h-full left-[24px] flex flex-col justify-center opacity-25 group-hover:opacity-100 group-hover:animate-pulse transition duration-500'>
                                <p className='text-center text-[48px] h-[48px] my-1 title-main font-semibold'>#3</p>
                                <Image
                                    src={'/assets/hackathon/podium.png'}
                                    alt=''
                                    width={128}
                                    height={128}
                                    className='w-full my-1 h-6'
                                />
                            </div>
                            <p className='z-10 title-main text-[42px] font-semibold'>GPU Simulator</p>
                            <p className='z-10 title-main text-[16px] mt-[-12px] font-semibold text-neutral-300'>Treat your GPU with care.</p>
                        </div>
                    </div>

                    <div className='my-2 flex flex-wrap justify-center items-center gap-y-4 gap-x-4'>
                        

                        <div className='group relative px-24 h-[100px] flex flex-col justify-center items-center bg-gradient-to-r from-black  to-neutral-800 transition-all rounded-[32px]'>
                            <Image
                                src={''}
                                alt=''
                                width={800}
                                height={800}
                                className='z-0 absolute w-full h-full rounded-[32px] object-cover opacity-10 group-hover:opacity-15 transition duration-500'
                            />
                            <p className='z-10 title-main text-[32px] font-semibold'>Falling A&apos;s</p>
                        </div>
                        

                        
                    </div>

                </div>


            </div>
        </div>
    )
}