'use client'

import { useRef, useState } from 'react'
import useSound from 'use-sound'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const sfx_clunk = '/assets/sound_fx/clunk.mp3'

const imageClasses =
    'relative h-full w-full object-cover duration-500 hover:!opacity-100 hover:!scale-110 hover:outline-[6px] active:duration-0 active:outline-[0px] outline-0 outline-white outline rounded-xl group-hover:opacity-100 group-active:opacity-50 active:object-contain hover:drop-shadow-[0_15px_35px_rgba(255,255,255,0.5)] '
const listItemClasses =
    'flex-grow p-1 min-h-[120px] h-[46vw] sm:h-[36vw] md:h-[27vw] lg:h-[20.5vw] wide:h-[16vw] uwide:h-[12vw] hover:z-10 group/inner duration-500 hover:!z-10 active:!scale-[125%] xl:active:!scale-[150%] uwide:active:!scale-[170%]'

interface GalleryPiece {
    remark: string
    imgSrc: string
}

function GalleryPiece({
    pieceDetails,
    index,
}: {
    pieceDetails: GalleryPiece
    index: number
}): React.ReactNode {
    const [playSfx_clunk] = useSound(sfx_clunk)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [isAnimating, setIsAnimating] = useState(true)

    return (
        <motion.div
            ref={ref}
            onMouseEnter={() => {
                playSfx_clunk()
            }}
            onAnimationComplete={() => {
                setIsAnimating(false)
            }}
            initial={{ opacity: 0, transform: 'scale(1.05) translateY(10%)' }}
            animate={
                isInView
                    ? { opacity: 1, transform: 'scale(1) translateY(0%)' }
                    : {}
            }
            transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: 'easeInOut',
            }}
            className={
                listItemClasses + (isAnimating ? ' pointer-events-none' : '')
            }
        >
            <Image
                key={index}
                className={imageClasses}
                width={800}
                height={800}
                draggable={false}
                alt=''
                src={pieceDetails.imgSrc}
            />
            <p className='z-20 absolute w-full text-sm sm:text-lg group-hover/inner:opacity-100 opacity-0 rounded-2xl bottom-0 text-center duration-300 font-semibold text-shadow-lg leading-5 shadow-black bg-[#00000090] whitespace-pre-line pointer-events-none'>
                {pieceDetails.remark}
            </p>
        </motion.div>
    )
}

export default function Gallery({
    album,
}: {
    album: Array<GalleryPiece>
}): React.ReactNode {
    return (
        <div className='z-50 flex flex-wrap w-full group pt-28 pb-[400px] overflow-hidden'>
            {album.map((pieceDetails, index) => (
                <GalleryPiece
                    key={pieceDetails.toString()}
                    pieceDetails={pieceDetails}
                    index={index}
                />
            ))}
        </div>
    )
}
