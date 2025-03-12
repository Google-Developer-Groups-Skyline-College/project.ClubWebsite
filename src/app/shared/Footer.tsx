import Link from 'next/link'
import Image from 'next/image'
import Socials from './Socials'

export function Footer() {
    return (
        <footer className='w-full bg-gradient-to-b from-neutral-800 dark:from-neutral-950 to-neutral-950 dark:to-black text-lg font-semibold pt-4 text-center'>

            <p className='text-lg'>🤝</p>
            <p className='title-main font-semibold text-xl'>Let&apos;s connect.</p>
            <p className='title-main text-neutral-500 font-semibold'>Expand your professional network with us.</p>

            <Socials/ >

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
                    Copyright ©️ Skyline Computer Science Club 2022-2024
                </p>
            </div>
        </footer>
    )
}