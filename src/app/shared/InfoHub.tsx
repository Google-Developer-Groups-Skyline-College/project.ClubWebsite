import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { BiBriefcase } from 'react-icons/bi'
import { PiToiletPaperDuotone } from 'react-icons/pi'
import { SiGithub } from 'react-icons/si'

import { INFOHUB_MEETING_DAY, INFOHUB_MEETING_HOUR, INFOHUB_MEETING_LOCATION, INFOHUB_MEETING_LOCATION_LINK, INFOHUB_ANNOUNCEMENT } from '@/dispositions/general'

import { Countdown } from 'shared/_modules'
import Socials from 'shared/Socials'

function getNextDayOfWeek(currentDate: Date, dayOfWeek: number) {
    const resultDate = new Date(currentDate.getTime())
    resultDate.setDate(currentDate.getDate() + (7 + dayOfWeek - currentDate.getDay()) % 7)

    return resultDate.toLocaleDateString()
}

const nextMeetingDate = getNextDayOfWeek(new Date(), INFOHUB_MEETING_DAY)
const nextMeetingDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][INFOHUB_MEETING_DAY]

const meetingTimeFormattedHour = new Date(nextMeetingDate + ' ' + INFOHUB_MEETING_HOUR).toLocaleTimeString('en', { hour: '2-digit', minute:'2-digit' })

export function InfoHub(): React.ReactNode {
    return (
        <div className='flex flex-col justify-center items-center py-72 bg-black'>

            {/* <div className='title-main w-full text-center text-3xl sm:text-4xl font-semibold'>Chapter Overview</div> */}

            <div className='w-full max-w-[1260px] px-8 xl:px-12 py-10 flex flex-col md:flex-row justify-center items-center gap-x-0 md:gap-x-8 gap-y-12 xl:gap-x-16'>

                <div className='flex flex-col gap-y-4 w-full px-2 md:px-0'>
                    <div>
                        <h1 className='title-main text-4xl inline-flex font-semibold'>
                            Our Member Meetings
                            <span>
                                <Image src='/assets/bits/kits/kitty_astro.png' height={32} width={32} className='ml-3 mt-1' alt='' />
                            </span>
                        </h1>
                        <h2 className='text-neutral-400'>In-person festivities, fun events, and student member meet-ups!</h2>
                        <div className='w-full h-[1px] bg-neutral-400 my-3' />
                    </div>

                    <div>
                        <h2 className='title-main text-neutral-400 font-semibold'>⏰ WHEN</h2>
                        <h2 className='title-main text-3xl font-semibold pr-0 md:pr-16'>
                            Weekly, <span className='text-[#FCD690] font-bold'>{nextMeetingDay}s</span> at <span className='text-blue-200 font-bold'>{meetingTimeFormattedHour}.</span>
                        </h2>
                        <div className='text-neutral-300'>
                            Next meeting will be on <span className='underline underline-offset-2'>{nextMeetingDate}</span> which is in:
                        </div>
                        <Countdown timestamp={new Date(`${nextMeetingDate} ${INFOHUB_MEETING_HOUR}`).getTime()} className='my-4'/>
                    </div>

                    <div>
                        <h2 className='title-main text-neutral-400 font-semibold'>📍 WHERE</h2>
                        <div className='title-main text-neutral-300 text-xl'>
                            <Link className='font-semibold text-white hover:text-pink-300 duration-150' href={INFOHUB_MEETING_LOCATION_LINK}>
                                {INFOHUB_MEETING_LOCATION}
                            </Link>
                        </div>
                        <div className='text-neutral-300'>
                            You can also tune-in remotely on our{' '}
                            <Link href='https://discord.com/channels/939701223144185867/1147046718710485034' target='_blank' className='text-purple-400 font-semibold'>Discord</Link> Stage.
                        </div>
                        <Link href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmJmNnBsb2M0N2Q2amhmaWU5YnBndHFhNDdfMjAyNTAyMDdUMjA1NTAwWiBza3lsaW5lY29tcHNjaWNsdWJAbQ&tmsrc=skylinecompsciclub%40gmail.com&scp=ALL' target='_blank'>
                            <p className='w-52 hover:w-56 transition-all p-2 my-2 text-sm text-center font-semibold hover:animate-pulse bg-yellow-900 rounded-lg'>🔔 Sign up for reminders!</p>
                        </Link>
                    </div>
                </div>

                <div className='hidden md:block w-[1px] h-[500px] bg-neutral-500' />

                <div className='flex flex-col gap-7 w-full px-2 md:px-0 text-right'>
                    <div>
                        <h1 className='title-main text-4xl inline-flex font-semibold'>
                            <span>
                                <Image src='/assets/bits/kits/kitty_write.png' height={32} width={32} className='mr-3 mt-1' alt='' />
                            </span>
                            Site Announcement
                        </h1>
                        <h2 className='text-neutral-400'>Words for our student members~! and visitors too!</h2>
                        <div className='w-full h-[1px] bg-neutral-400 my-3' />
                        <div className='flex flex-col italic gap-y-4'>
                            {INFOHUB_ANNOUNCEMENT}
                        </div>
                    </div>

                    <div>
                        <h1 className='title-main text-4xl inline-flex font-semibold'>
                            <span>
                                <Image src='/assets/bits/kits/kitty_read.png' height={32} width={32} className='mr-3 mt-1' alt='' />
                            </span>
                            Member Information Hub
                        </h1>
                        <h2 className='text-neutral-400'>Good-to-know information for current and future student members~!</h2>
                        <div className='w-full h-[1px] bg-neutral-400 my-3' />
                        <div className='flex flex-row flex-wrap justify-end font-semibold gap-x-2 gap-y-2'>
                            <Link 
                                href='https://docs.google.com/document/d/1zQNKe-yL5rwGuMRI5siLUNC_SKyXT70c4yooRSxzPZ8/edit?usp=sharing' 
                                target='_blank' 
                                className='flex flex-row items-center group px-3 sm:hover:px-5 py-2 bg-pink-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                                <PiToiletPaperDuotone className='group-hover:text-lg'/>Past Meeting Archives
                            </Link>
                            <Link
                                href='/projects' 
                                target='_blank' 
                                className='flex flex-row items-center group px-3 sm:hover:px-5 py-2 bg-green-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                                <BiBriefcase className='group-hover:text-lg'/>View Our Software Projects
                            </Link>
                            <Link 
                                href='https://docs.google.com/forms/d/e/1FAIpQLSc_rpt_CnEXA7beq_UKktr415J97dPa3-xntnE4OCJ1zbpSqg/viewform?usp=sf_link' 
                                target='_blank' 
                                className='flex flex-row items-center group px-3 sm:hover:px-5 py-2 bg-yellow-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                                <SiGithub className='group-hover:text-lg'/>Join our GitHub Organization
                            </Link>
                        </div>
                    </div>

                </div>

            </div>



            <div className='border-t-[1px] py-8 px-4 text-center border-neutral-600'>
                <p className='text-lg'>🤝</p>
                <p className='title-main font-semibold text-xl'>Let&apos;s connect.</p>
                <p className='title-main text-neutral-500 font-semibold'>Expand your professional network with us.</p>

                <Socials />
            </div>
            
        </div>
    )
}