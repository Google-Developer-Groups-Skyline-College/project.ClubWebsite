import React from 'react'

import { IntroFade } from 'shared/_modules'

export default function Promotion(): React.ReactNode {
    return (
        <>
            <IntroFade />
            <div className='flex justify-center items-center w-full h-screen'>
                <p className='font-semibold text-white'>Promotional</p>
            </div>
        </>
    )
}
