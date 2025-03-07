'use client'

import Image from 'next/image'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function IntroFade(): React.ReactNode {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 1 }}
            animate={isInView ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
            className='z-30 w-full h-screen fixed flex flex-col items-center justify-center pointer-events-none bg-black'
        >
            <Image
                src={'/assets/bits/mascot.gif'}
                className='opacity-90 animate-pulse'
                alt=''
                width={100}
                height={100}
                unoptimized
            />
            <Image
                src={'/assets/bits/loader.gif'}
                className='opacity-70'
                alt=''
                width={100}
                height={100}
                unoptimized
            />

            {/* <p className="text-neutral-500">Loading...</p> */}
        </motion.div>
    )
}
