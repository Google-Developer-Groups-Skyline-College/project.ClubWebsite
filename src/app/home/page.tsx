'use client'

import React from 'react'

// import { Element } from 'react-scroll'
import { ReactTyped } from 'react-typed'

import { HomeAlbum } from '@/dispositions/gallery'

// components
import { IntroFade, Gallery, Footer, InfoHub } from '../shared/_modules'
import { Hero, Techstack, About, Leadership, Recruitment } from './components/_modules'

const GALLERY_TYPED_WORDS = [
    'Social Events',
    'Networking Mixers',
    'Company Tours',
    'Hackathons',
    'Technology Workshops',
    'Field Trips',
    'Club Projects',
    'Hosting Workshops',
    'Community Collaborations',
]

export default function App() {
    return (
        <>
            <IntroFade />

            <Hero />
            <InfoHub />
            
            <Leadership />

            <Techstack />

            <About />

            <div className='w-full bg-gradient-to-b from-neutral-900 via-black to-black py-14'>
                <h1 className='title-main mx-auto text-3xl text-center sm:text-4xl font-extrabold text-white'>
                    <span className='text-shadow shadow-gray-700'>
                        Heyo! Journey with us in&nbsp;
                    </span>
                    <ReactTyped
                        strings={GALLERY_TYPED_WORDS}
                        typeSpeed={50}
                        backSpeed={75}
                        backDelay={3000}
                        loop
                        className='bg-gradient-to-t from-yellow-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(225,200,150,0.3)]'
                    ></ReactTyped>
                </h1>

                {/* <Element name='gallery' /> */}
                <Gallery album={HomeAlbum} />
            </div>

            <div className='w-full h-30' />

            {/* <History /> */}
            <Recruitment />
            {/* <Socials/> */}

            <Footer />
        </>
    )
}