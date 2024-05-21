import { secondsToDhms, HackathonTimes } from './timer'
import { useEffect, useState } from 'react'

export interface HackathonTimerProps
    extends HackathonTimes,
        React.HTMLAttributes<HTMLDivElement> {}

/**
 * A timer component that counts down to the start or end of a hackathon.
 * Below are the props that can be passed to this component:
 * @param startTime - The start time of the hackathon.
 * @param endTime - The end time of the hackathon.
 * @param divProps - Other props that modifies the returned div element.
 * @returns
 */
export const HackathonTimer: React.FC<HackathonTimerProps> = ({
    startTime,
    endTime,
    ...divProps
}) => {
    const [altFormat, setAltFormat] = useState(false)
    const [countdown, setCountDown] = useState(0)
    const intervalDelayMs = 500

    useEffect(() => {
        const interval = setInterval(() => {
            startTime - Date.now() > 0
                ? setCountDown(startTime - Date.now())
                : setCountDown(endTime - Date.now())
        }, intervalDelayMs)

        return () => clearInterval(interval)
    }, [countdown])

    return (
        <div
            onMouseEnter={() => {
                setAltFormat(true)
            }}
            onMouseLeave={() => {
                setAltFormat(false)
            }}
            {...divProps}
        >
            {`${secondsToDhms(countdown, altFormat)}`}
        </div>
    )
}
