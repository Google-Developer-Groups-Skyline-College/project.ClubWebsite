'use client'

import React, { useEffect, useState } from 'react'

interface formattedTime {
    'days': string,
    'hours': string,
    'minutes': string,
    'seconds': string
}

const blankTime: formattedTime = {'days': '-', 'hours': '-', 'minutes': '-', 'seconds': '-'}

function formatMsToTime(seconds: number): formattedTime {
    seconds = Math.abs(seconds * 0.001)
    const negative = seconds < 0
    const d = Math.floor(seconds / (3600 * 24))
    const h = Math.floor((seconds % (3600 * 24)) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor(seconds % 60)

    return ({
        'days': (negative ? '-' : '') + d.toString().padStart(2, '0'),
        'hours': (negative ? '-' : '') + h.toString().padStart(2, '0'),
        'minutes': (negative ? '-' : '') + m.toString().padStart(2, '0'),
        'seconds': (negative ? '-' : '') + s.toString().padStart(2, '0')
    })
}

export function Countdown({ timestamp, className }: { timestamp: number, className?: string }): React.ReactNode {

    const [currentTimeDelta, setTimeDelta] = useState(timestamp - Date.now())
    const [currentFormat, setFormat] = useState(blankTime)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDelta(timestamp - Date.now())
            setFormat(formatMsToTime(currentTimeDelta))
        }, 1000)

        return () => clearInterval(interval)
    }, [currentTimeDelta, timestamp])

    return (
        <div className={`flex flex-row gap-x-2 sm:gap-x-4 ${className}`}>
            <div className='p-4 sm:p-6 title-main text-center font-bold text-2xl bg-neutral-800 rounded-xl'>{currentFormat.days}<p className='text-xs sm:text-sm text-neutral-400'>days</p></div>
            <div className='p-4 sm:p-6 title-main text-center font-bold text-2xl bg-neutral-800 rounded-xl'>{currentFormat.hours}<p className='text-xs sm:text-sm text-neutral-400'>hours</p></div>
            <div className='p-4 sm:p-6 title-main text-center font-bold text-2xl bg-neutral-800 rounded-xl'>{currentFormat.minutes}<p className='text-xs sm:text-sm text-neutral-400'>mins</p></div>
            <div className='p-4 sm:p-6 title-main text-center font-bold text-2xl bg-neutral-800 rounded-xl'>{currentFormat.seconds}<p className='text-xs sm:text-sm text-neutral-400'>secs</p></div>
        </div>
    )
}