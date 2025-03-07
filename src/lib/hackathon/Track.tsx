import Image from 'next/image'

export const Track: React.FC<HackathonTrackProps> = ({
    trackName,
    trackDescription,
    iconSrc,
    classNames
}) => {
    if (typeof classNames === 'undefined') {
        return (
            <TrackContainer>
                {iconSrc && <TrackIcon src={iconSrc} />}
                <TrackContent>
                    <TrackHeader>{trackName}</TrackHeader>
                    <TrackDescription>{trackDescription}</TrackDescription>
                </TrackContent>
            </TrackContainer>
        )
    }

    return (
        <TrackContainer className={classNames.container}>
            {iconSrc && <TrackIcon src={iconSrc} />}
            <TrackContent className={classNames.content}>
                <TrackHeader className={classNames.header}>
                    {trackName}
                </TrackHeader>
                <TrackDescription className={classNames.description}>
                    {trackDescription}
                </TrackDescription>
            </TrackContent>
        </TrackContainer>
    )
}

export const TrackContainer = ({ ...props }: any) => {
    return <div {...props} />
}

export const TrackContent = ({ ...props }: any) => {
    return <div {...props} />
}

export const TrackHeader = ({ ...props }: any) => {
    return <h1 {...props} />
}

export const TrackDescription = ({ ...props }: any) => {
    return <div {...props} />
}

export const TrackIcon = ({ src }: any) => {
    return <Image src={src} alt='Track Icon' />
}

/**
 * Defines the props for a hackathon track
 */
export interface HackathonTrack {
    trackName: string
    trackDescription?: string
    iconSrc?: string
    classNames?: HackathonTrackClassNames
}

export interface HackathonTrackProps
    extends HackathonTrack,
        React.HTMLAttributes<HTMLDivElement> {}

export interface HackathonTrackClassNames {
    container?: string
    content?: string
    header?: string
    description?: string
    icon?: string
}

const test = ({}) => {
    return <Track trackName='' trackDescription='' iconSrc='' classNames={{}} />
}
