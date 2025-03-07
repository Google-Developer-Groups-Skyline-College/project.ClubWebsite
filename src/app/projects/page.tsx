import React from 'react'

import { IntroFade } from 'shared/_modules'

import { Carousel } from './components/_modules'

export default function Projects(): React.ReactNode {
    return (
        <>
            <IntroFade />
            <Carousel />
        </>
    )
}
