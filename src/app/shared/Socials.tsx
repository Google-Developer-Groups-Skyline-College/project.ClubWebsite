import { SiDiscord, SiYoutube, SiLinkedin, SiInstagram, SiGithub, SiLinktree, SiSlideshare } from 'react-icons/si'
import { MdOutlineEmail } from 'react-icons/md'

import Link from 'next/link'

export default function Socials() {
    return (
        <div className='flex flex-row flex-wrap gap-3 justify-center py-4'>
            <Link
                href='https://discord.com/invite/z5P9kccwRh'
                target='_blank'
            >
                <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-blue-400/10 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-blue-800 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-600 active:outline-neutral-200 duration-200 active:duration-200'>
                    <SiDiscord className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                    Discord
                </button>
            </Link>

            <Link
                href='https://www.youtube.com/@skylinegdg'
                target='_blank'
            >
                <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-red-700/10 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-red-900 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-red-700 active:outline-neutral-200 duration-200 active:duration-200'>
                    <SiYoutube className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                    YouTube
                </button>
            </Link>

            <Link
                href='https://www.linkedin.com/company/computer-science-club-skyline/'
                target='_blank'
            >
                <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-blue-600/10 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-blue-600 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-400 active:outline-neutral-200 duration-200 active:duration-200'>
                    <SiLinkedin className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                    LinkedIn
                </button>
            </Link>

            <Link
                href='https://www.instagram.com/skylinecsc/'
                target='_blank'
            >
                <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-purple-900/10 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-purple-600 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-purple-400 active:outline-neutral-200 duration-200 active:duration-200'>
                    <SiInstagram className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                    Instagram
                </button>
            </Link>

            <Link
                href='https://github.com/Google-Developer-Groups-Skyline-College'
                target='_blank'
            >
                <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-yellow-900/10 bg-opacity-80 rounded-md gap-1 py-3 2 active:scale-95 hover:bg-yellow-700 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-yellow-700 active:outline-neutral-200 duration-200 active:duration-200'>
                    <SiGithub className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                    GitHub
                </button>
            </Link>

            <Link href='mailto:skylinecompsciclub+website@gmail.com' target='_blank'>
                <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-green-900/10 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-green-900 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-green-700 active:outline-neutral-200 duration-200 active:duration-200'>
                    <MdOutlineEmail className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                    Email
                </button>
            </Link>
        </div>
    )
}