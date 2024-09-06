'use client'

import Image from 'next/image'
import Link from 'next/link'

import { IntroFade } from './shared/_modules'

export default function NotFound(): React.ReactNode {

    return (
        <>
            <IntroFade />
            <div className='absolute flex flex-col items-center justify-center gap-y-4 px-8 w-full h-screen bg-black'>
                <Image
                    src={'/assets/bits/kitty404.png'}
                    className='w-[600px]'
                    alt=''
                    width={1000}
                    height={1000}
                />
                <p className='font-semibold'>{'Hey! It\'s dark in here...'}</p>
                <Link
                    href='/'
                    className='z-20 mt-2 relative group w-[230px] active:scale-95 duration-150 hover:border-green-900 border-white rounded-xl hover:outline hover:outline-[4px] active:outline-4 text-white text-lg title-main drop-shadow-[0_16px_20px_rgba(0,0,0,0.7)] overflow-hidden'
                >
                    <button className='flex w-full justify-center p-2 font-semibold text-shadow-lg shadow-black hover:bg-green-600 bg-neutral-900 bg-opacity-50 duration-300 hover:border-green-300 overflow-hidden'>
                        <p className='text-center'>Return Home</p>
                    </button>
                </Link>
            </div>
        </>
    )
}
