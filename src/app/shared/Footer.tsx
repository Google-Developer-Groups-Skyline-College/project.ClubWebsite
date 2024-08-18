import Link from 'next/link'
import Image from 'next/image'

import { SiDiscord, SiYoutube, SiLinkedin, SiInstagram, SiGithub, SiLinktree, SiSlideshare } from 'react-icons/si'

export function Footer() {
    return (
        <div className='w-full h-full bg-gradient-to-b from-neutral-800 dark:from-neutral-950 to-neutral-950 dark:to-black text-lg font-semibold pt-4 text-center'>
            
            <p className='text-lg'>🤝</p>
            <p className='title-main font-semibold text-xl'>Let&apos;s connect.</p>
            <p className='title-main text-neutral-500 font-semibold'>Expand your network with us.</p>

            <div className='flex flex-row flex-wrap gap-3 justify-center py-4'>
                <Link
                    href='https://discord.com/invite/z5P9kccwRh'
                    target='_blank'
                >
                    <button className='flex group w-[120px] sm:w-[134px] sm:hover:w-[140px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 2 active:scale-95 hover:bg-blue-800 hover:outline-4 hover:text-white text-lg font-semibold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-600 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiDiscord className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                        Discord
                    </button>
                </Link>

                <Link
                    href='https://www.youtube.com/@skylinecsc'
                    target='_blank'
                >
                    <button className='flex group w-[120px] sm:w-[134px] sm:hover:w-[140px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 2 active:scale-95 hover:bg-red-900 hover:outline-4 hover:text-white text-lg font-semibold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-red-700 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiYoutube className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                        YouTube
                    </button>
                </Link>

                <Link
                    href='https://www.linkedin.com/company/computer-science-club-skyline/'
                    target='_blank'
                >
                    <button className='flex group w-[120px] sm:w-[134px] sm:hover:w-[140px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 2 active:scale-95 hover:bg-blue-600 hover:outline-4 hover:text-white text-lg font-semibold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-400 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiLinkedin className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                        LinkedIn
                    </button>
                </Link>

                <Link
                    href='https://www.instagram.com/skylinecsc/'
                    target='_blank'
                >
                    <button className='flex group w-[120px] sm:w-[134px] sm:hover:w-[140px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 2 active:scale-95 hover:bg-purple-600 hover:outline-4 hover:text-white text-lg font-semibold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-purple-400 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiInstagram className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                        Instagram
                    </button>
                </Link>

                <Link
                    href='https://github.com/Skyline-College-Computer-Science-Club/'
                    target='_blank'
                >
                    <button className='flex group w-[120px] sm:w-[134px] sm:hover:w-[140px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-1 py-2 2 active:scale-95 hover:bg-yellow-700 hover:outline-4 hover:text-white text-lg font-semibold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-yellow-700 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiGithub className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                        GitHub
                    </button>
                </Link>

                <Link href='https://linktr.ee/skylinecsc' target='_blank'>
                    <button className='flex group w-[120px] sm:w-[134px] sm:hover:w-[140px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 2 active:scale-95 hover:bg-green-900 hover:outline-4 hover:text-white text-lg font-semibold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-green-700 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiLinktree className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                        LinkTree
                    </button>
                </Link>
            </div>

            <div className='flex flex-row items-center justify-center gap-4 py-2 w-full'>
                <Link href='https://skylinecollege.edu/' target='_blank'>
                    <Image
                        src={'/assets/bits/skyline_brand.png'}
                        width={128}
                        height={128}
                        alt=''
                    />
                </Link>
                <Link href='https://smccd.edu/' target='_blank'>
                    <Image
                        src={'/assets/bits/smccd_brand.png'}
                        width={256}
                        height={128}
                        alt=''
                    />
                </Link>
            </div>

            <div className='pt-4 pb-10'>
                <Link href='https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite' target='_blank'>
                    <p className='text-red-500 text-sm sm:text-lg'>
                        Made with ☕ & 💞 by students, for students.
                    </p>
                </Link>
                <p className='text-neutral-500 text-sm sm:text-lg'>
                    Copyright ©️ Skyline Computer Science Club 2022-2025
                </p>
            </div>
        </div>
    )
}
