import React from 'react'

import { BiCalendarEvent } from 'react-icons/bi'
import { PiToiletPaperDuotone } from 'react-icons/pi'
import { SiDiscord, SiYoutube, SiLinkedin, SiInstagram, SiGithub, SiLinktree, SiSlideshare } from 'react-icons/si'

import Link from 'next/link'

import { CLUB_MEETING_DAY, CLUB_MEETING_HOUR, CLUB_MEETING_LOCATION } from '../dispositions/general'

import Countdown from './Countdown'

function getNextDayOfWeek(currentDate: Date, dayOfWeek: number) {
    const resultDate = new Date(currentDate.getTime())
    resultDate.setDate(currentDate.getDate() + (7 + dayOfWeek - currentDate.getDay()) % 7)

    return resultDate.toLocaleDateString()
}

const nextMeetingDate = getNextDayOfWeek(new Date(), CLUB_MEETING_DAY)
const nextMeetingDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][CLUB_MEETING_DAY]

const meetingTimeFormattedHour = new Date(nextMeetingDate + ' ' + CLUB_MEETING_HOUR).toLocaleTimeString('en', {hour: '2-digit', minute:'2-digit'})

export default function Overview(): React.ReactNode {
    return (
        <div className='py-72 flex flex-col justify-center items-center black'>

            <div className='w-full py-10 flex flex-col md:flex-row justify-center items-center gap-x-0 md:gap-x-16 gap-y-6'>

                <div className='w-full md:w-[28vw] px-6 md:px-0'>
                    <h1 className='title-main text-4xl font-semibold'>Our Club Meetings</h1>
                    <h2 className='text-neutral-400'>In-person festivities and member meet-ups!</h2>
                    <div className='w-full h-[1px] bg-neutral-400 my-3' />


                    <h2 className='title-main text-neutral-400 font-semibold'>⏰ WHEN</h2>
                    <h2 className='title-main text-3xl font-semibold'>
                        Weekly, <span className='text-[#FCD690] font-bold'>{nextMeetingDay}s</span> at <span className='text-blue-200 font-bold'>{meetingTimeFormattedHour}.</span>
                    </h2>
                    <div className='text-neutral-300 italic'>
                        Next meeting will be on {nextMeetingDate}, which is in:
                    </div>
                    <Countdown timestamp={new Date(`${nextMeetingDate} ${CLUB_MEETING_HOUR}`).getTime()} className='my-4'/>


                    <h2 className='title-main text-neutral-400 font-semibold'>📍 WHERE</h2>
                    <div className='title-main text-neutral-300 text-xl'>
                        <span className='font-semibold'>{CLUB_MEETING_LOCATION}</span>
                    </div>
                    <div className='text-neutral-300'>
                        You can also tune-in remotely on our{' '}
                        <Link href={'https://discord.com/channels/939701223144185867/1147046718710485034'} target='_blank' className='text-purple-400 font-semibold'>Discord</Link> Stage.
                    </div>
                    <p className='w-52 p-2 my-2 text-sm text-center font-semibold hover:animate-pulse bg-yellow-900 rounded-lg'>🔔 Sign up for reminders!</p>
                </div>

                <div className='hidden md:block w-[1px] h-[500px] bg-neutral-500' />

                <div className='w-full md:w-[28vw] px-6 md:px-0 text-right'>
                    <h1 className='title-main text-4xl font-semibold'>Club Documentation</h1>
                    <h2 className='text-neutral-400'>Good-to-know information for student members~</h2>
                    <div className='w-full h-[1px] bg-neutral-400 my-3' />
                    <div className='flex flex-row-reverse flex-wrap font-semibold gap-x-2 gap-y-2'>
                        <Link href='https://docs.google.com/document/d/1z8tFEMwJXxxcEVszzM8xmOp_1bGMlNBAd4mEGoOn4zU/edit?usp=sharing' target='_blank' className='flex flex-row items-center group px-3 hover:px-5 py-2 bg-fuchsia-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                            <PiToiletPaperDuotone className='group-hover:text-lg'/>Meeting Minutes (Summaries)
                        </Link>
                        <Link href='https://drive.google.com/drive/folders/1PTXDZAXJRQUPQWG8amUQyvEYumFVJe5k?usp=sharing' target='_blank' className='flex flex-row items-center group px-3 hover:px-5 py-2 bg-green-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                            <SiSlideshare className='group-hover:text-lg'/>Meeting Slides
                        </Link>
                        <Link href='https://docs.google.com/document/d/1z8tFEMwJXxxcEVszzM8xmOp_1bGMlNBAd4mEGoOn4zU/edit?usp=sharing' target='_blank' className='flex flex-row items-center group px-3 hover:px-5 py-2 bg-blue-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                            <BiCalendarEvent className='group-hover:text-lg'/>Club Events Timeline
                        </Link>
                        <Link href='https://docs.google.com/forms/d/e/1FAIpQLSc_rpt_CnEXA7beq_UKktr415J97dPa3-xntnE4OCJ1zbpSqg/viewform?usp=sf_link' target='_blank' className='flex flex-row items-center group px-3 hover:px-5 py-2 bg-yellow-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                            <SiGithub className='group-hover:text-lg'/>Apply to GitHub Organization
                        </Link>
                    </div>
                </div>

            </div>

            <div className='border-t-[1px] py-8 px-4 text-center border-neutral-600'>
                <p className='text-lg'>🤝</p>
                <p className='title-main font-semibold text-xl'>Let&apos;s connect.</p>
                <p className='title-main text-neutral-500 font-semibold'>Expand your network.</p>

                <div className='flex flex-row flex-wrap gap-3 justify-center py-4'>
                    <Link
                        href='https://discord.com/invite/z5P9kccwRh'
                        target='_blank'
                    >
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-blue-800 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-600 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiDiscord className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            Discord
                        </button>
                    </Link>

                    <Link
                        href='https://www.linkedin.com/company/computer-science-club-skyline/'
                        target='_blank'
                    >
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-red-900 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-red-700 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiYoutube className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            YouTube
                        </button>
                    </Link>

                    <Link
                        href='https://www.linkedin.com/company/computer-science-club-skyline/'
                        target='_blank'
                    >
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-blue-600 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-400 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiLinkedin className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            LinkedIn
                        </button>
                    </Link>

                    <Link
                        href='https://www.linkedin.com/company/computer-science-club-skyline/'
                        target='_blank'
                    >
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-purple-600 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-purple-400 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiInstagram className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            Instagram
                        </button>
                    </Link>

                    <Link
                        href='https://github.com/Skyline-College-Computer-Science-Club/'
                        target='_blank'
                    >
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-1 py-3 2 active:scale-95 hover:bg-yellow-700 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-yellow-700 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiGithub className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            GitHub
                        </button>
                    </Link>

                    <Link href='https://linktr.ee/skylinecsc' target='_blank'>
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-green-900 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-green-700 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiLinktree className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            LinkTree
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}