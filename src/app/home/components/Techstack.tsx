'use client'

import React from 'react'
import { ReactTyped } from 'react-typed'
// import { Element } from 'react-scroll'

import Image from 'next/image'

import useSound from 'use-sound'

import { motion } from 'framer-motion'

import {
    SiRobloxstudio,
    SiJavascript,
    SiTailwindcss,
    SiCurseforge,
    SiMysql,
    SiPostgresql,
    SiRust,
} from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'

const DIR_TECHSTACK = '/assets/home/techstack/'

const SECTION_TYPED_KEYWORDS = [
    'Software Design',
    'Open Source Libraries',
    '3D-Modeling Software',
    'Development Suites',
    'Software Frameworks',
    'Markdown Languages',
    'User Interface Design',
    'Collaborative Projects',
    'Unit Testing Software',
    'Version Control Systems',
    'Serverless Platforms',
    'Linux Distributions',
    'Database Design',
    'Programming Languages',
    'User Experience Design',
]

const TECH_TEXT_CLASSES = 'title-main font-semibold text-xl md:text-2xl'
const TECH_ICON_CLASSES = 'relative w-[60px] h-[60px] md:w-[72px] md:h-[72px]'
const TECH_ICON_SHADOW = { filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))' }

/*

    TODO: Add these to dedicated disposition

    TODO: Add the following technologies:
        - Arduino
        - Figma
        - Visual Studio Code
        - GitHub
        - Git
        - Spline
        - Swift
        - C#
        - Make/Integromat
        - Tailwind CSS

*/

const TECHNOLOGIES: { [key: string]: JSX.Element } = {
    JavaScript: (
        <SiJavascript
            color='rgb(255, 220, 50)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    Rust: (
        <SiRust
            color='rgb(255, 80, 50)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    PostgreSQL: (
        <SiPostgresql
            color='#008bb9'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    HTML: (
        <Image
            src={DIR_TECHSTACK + 'html.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),
    Tailwind: (
        <SiTailwindcss
            color='rgb(100, 140, 255)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    TypeScript: (
        <Image
            src={DIR_TECHSTACK + 'typescript.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),
    'Minecraft Forge': (
        <SiCurseforge
            color='rgb(255, 120, 77)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    
    'Lua+u': (
        <Image
            src={DIR_TECHSTACK + 'luau.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),
    Kotlin: (
        <Image
            src={DIR_TECHSTACK + 'kotlin.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),
    MySQL: (
        <SiMysql
            color='rgb(242, 145, 17)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    'Node.js': (
        <Image
            src={DIR_TECHSTACK + 'nodejs.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),
    Studio: (
        <SiRobloxstudio
            color='rgb(0, 203, 255)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    'C++': (
        <Image
            src={DIR_TECHSTACK + 'cpp.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),
    CSS: (
        <Image
            src={DIR_TECHSTACK + 'css.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),
    Java: (
        <Image
            src={DIR_TECHSTACK + 'java.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),
    'React.js': (
        <GrReactjs
            color='rgb(88, 210, 243)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    Blender: (
        <Image
            src={DIR_TECHSTACK + 'blender.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),

    Python: (
        <Image
            src={DIR_TECHSTACK + 'python.png'}
            style={TECH_ICON_SHADOW}
            fill
            alt=''
        />
    ),
}

export function Techstack(): React.ReactNode {
    const [playSfx_Click] = useSound('/assets/audio/click.mp3')

    return (
        <div className='w-full h-full mt-60 text-gray-300 overflow-hidden'>
            {/* <Element name='tech' /> */}

            <motion.img
                width={100}
                height={100}
                src={'/assets/bits/kits/kitty_astro.png'}
                className='mx-auto my-4 md:my-10 hover:!scale-105 transition duration-300 ease-out'
                initial={{ transform: 'translateY(-10%)' }}
                animate={{ transform: 'translateY(10%)' }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'mirror',
                    type: 'tween',
                    ease: 'linear',
                    duration: 2,
                }}
            />

            {/* optional shadow for title (looks fine): drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] */}
            <h1 className='title-main mx-auto py-4 px-12 text-center text-3xl md:text-[40px] font-extrabold text-[#e7e9ef]'>
                <span className='text-shadow shadow-gray-700'>
                    Join us in Exploring{' '}
                </span>
                <ReactTyped
                    strings={SECTION_TYPED_KEYWORDS}
                    typeSpeed={50}
                    backSpeed={75}
                    backDelay={4000}
                    loop
                    className='bg-gradient-to-t from-yellow-300 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(50,255,100,0.7)]'
                ></ReactTyped>
            </h1>

            <div className='relative'>
                {/* left   */}{' '}
                <div className='z-10 absolute bg-gradient-to-r from-black to-transparent left-0 h-full w-[28vw] pointer-events-none'></div>
                {/* right  */}{' '}
                <div className='z-10 absolute bg-gradient-to-l from-black to-transparent right-0 h-full w-[28vw] pointer-events-none'></div>
                {/* <div className="z-10 flex my-10 h-[10vw] bg-contain bg-center" style={{backgroundImage: `url(${conveyorTreading})`}}> */}
                <div
                    className='flex my-10 h-[140px] md:h-[160px] bg-repeat-x bg-bottom'
                    style={{ backgroundImage: `url('/assets/home/conveyor_front.png')` }}
                >
                    <motion.div
                        className='flex flex-row h-full gap-x-8'
                        initial={{ transform: 'translateX(-100%)' }}
                        animate={{ transform: 'translateX(100vw)' }}
                        transition={{
                            repeat: Infinity,
                            type: 'tween',
                            ease: 'linear',
                            duration: 48,
                        }}
                    >
                        {Object.entries(TECHNOLOGIES).map(
                            ([techName]) => {
                                return (
                                    <div
                                        onMouseEnter={() => playSfx_Click()}
                                        key={techName}
                                        className='flex flex-row justify-center items-center gap-x-7 px-7 sm:hover:px-12 h-[90px] md:h-[112px] md:mt-0 duration-300 bg-[#000000bb] outline outline-1 outline-white text-white rounded-xl'
                                    >
                                        <div className={TECH_ICON_CLASSES}>
                                            {TECHNOLOGIES[techName]}
                                        </div>
                                        <ReactTyped
                                            strings={[techName]}
                                            className={TECH_TEXT_CLASSES}
                                        ></ReactTyped>
                                    </div>
                                )
                            }
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
