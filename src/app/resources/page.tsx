import React from 'react'

import { IntroFade } from 'shared/_modules'

export default function Resources(): React.ReactNode {
    return (
        <>
            <IntroFade />
            <div className='flex justify-center items-center w-full h-screen'>
                <p className='font-semibold text-white'>Resources</p>
            </div>
        </>
    )
}
