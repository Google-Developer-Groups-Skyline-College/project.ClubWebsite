import React from 'react'

function formatMsToTime(seconds: number): string {
    seconds *= 0.001
    const negative = seconds < 0
    seconds = Math.abs(seconds)
    const d = Math.floor(seconds / (3600 * 24))
    const h = Math.floor((seconds % (3600 * 24)) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor(seconds % 60)

    // if (altFormat) {
    //     return (
    //         (d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '') +
    //         (m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '') +
    //         (h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '') +
    //         (s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '0 seconds') +
    //         (negative ? ' ago' : '')
    //     )
    // }

    return (
        (negative ? '-' : '') +
        d.toString().padStart(2, '0') +
        ':' +
        h.toString().padStart(2, '0') +
        ':' +
        m.toString().padStart(2, '0') +
        ':' +
        s.toString().padStart(2, '0')
    )
}

export default function Countdown({ timestamp }: { timestamp: number }): React.ReactNode {
    return (
        <span>{`${formatMsToTime(timestamp)}`}</span>
    )
}