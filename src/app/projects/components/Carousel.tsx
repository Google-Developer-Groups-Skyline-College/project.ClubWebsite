'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import Image from 'next/image'
import useSound from 'use-sound'

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiLua,
    SiPython,
    SiRust,
    SiNodedotjs,
    SiReact,
    SiBlender,
} from 'react-icons/si'

import {
    FaAngleDoubleUp
} from 'react-icons/fa'

import { FaGithub, FaTrello } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'

import { projects, ProjectDetails } from '@/dispositions/projects'

const TAG_CLASSES = 'inline mr-1 self-center'

interface TagDetails {
    color: string
    icon: JSX.Element
}

const Tags: { [key: string]: TagDetails } = {
    HTML: { color: 'bg-orange-700', icon: <SiHtml5 className={TAG_CLASSES} /> },
    CSS: { color: 'bg-blue-700', icon: <SiCss3 className={TAG_CLASSES} /> },
    JavaScript: {
        color: 'bg-[#e1790d]',
        icon: <SiJavascript className={TAG_CLASSES} />,
    },
    TypeScript: {
        color: 'bg-[#3178C6)]',
        icon: <BiLogoTypescript className={TAG_CLASSES} />,
    },
    Lua: { color: 'bg-[#0e7490]', icon: <SiLua className={TAG_CLASSES} /> },
    Python: {
        color: 'bg-[#0369a1]',
        icon: <SiPython className={TAG_CLASSES} />,
    },
    Rust: { color: 'bg-[#A16A03]', icon: <SiRust className={TAG_CLASSES} /> },

    'Node.js': {
        color: 'bg-[#41722b]',
        icon: <SiNodedotjs className={TAG_CLASSES} />,
    },
    React: { color: 'bg-[#3a7b8c]', icon: <SiReact className={TAG_CLASSES} /> },

    Blender: {
        color: 'bg-[#e1790d]',
        icon: <SiBlender className={TAG_CLASSES} />,
    },
}

export function Carousel() {
    const [playSfx_click] = useSound('/assets/audio/click.mp3')
    const [playSfx_click2] = useSound('/assets/audio/click2.mp3')

    const [currentProject, setCurrentProject] = useState(
        Object.keys(projects)[0]
    )
    const projectDetails: ProjectDetails = projects[currentProject]

    return (
        <div className='w-full translate-y-20 h-[calc(100vh-80px)] overflow-y-hidden bg-[#0a192f] text-gray-300'>
            {/* Vignette overlay */}
            <div>
                {/* top    */}
                <div
                    className='bg-gradient-to-b from-black to-transparent'
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '10%',
                    }}
                ></div>
                {/* bottom */}
                <div
                    className='bg-gradient-to-t from-black to-transparent'
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: '25%',
                    }}
                ></div>
                {/* left   */}
                <div
                    className='bg-gradient-to-r from-black to-transparent'
                    style={{
                        position: 'absolute',
                        left: 0,
                        width: '33%',
                        height: '100%',
                    }}
                ></div>
            </div>

            {/* The main backdrop preview video clip */}
            <video
                className='w-full h-full object-cover'
                src={projectDetails.backdrop || '/assets/projects/backdrops/mw2.mp4'}
                preload='auto'
                autoPlay
                disablePictureInPicture
                muted
                loop
            />

            {/* Project Info */}
            <div
                className='p-4 z-0'
                style={{
                    position: 'absolute',
                    top: '27.5%',
                    width: '100%',
                    height: '100%',
                }}
            >
                <p className='text-4xl font-bold max-w-lg text-gray-100 text-shadow shadow-gray-700'>
                    {currentProject}
                </p>
                {/* <ReactTyped className="text-4xl font-bold" strings={[currentProject]} typeSpeed={120} backSpeed={120} backDelay={3000} loop></ReactTyped> */}
                <p className='py-2 font-xl max-w-md text-shadow-lg text-gray-200 shadow-gray-900 whitespace-break-spaces'>
                    {projectDetails.description}
                </p>

                {/* Project Badges */}
                <div>
                    {projectDetails.tags.map((tag: string) => (
                        <div
                            className={`text-sm ${Tags[tag].color} shadow-sm text-gray-100 bg-opacity-75 mr-1 font-semibold px-2 py-1 rounded-md inline-block`}
                            key={tag}
                        >
                            {Tags[tag].icon}
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Project Links */}
                <div className='py-4'>
                    <Link
                        href={projectDetails.github}
                        target='_blank'
                    >
                        <FaGithub className='inline mx-1' size={30} />
                    </Link>
                    <Link
                        href={projectDetails.trello}
                        target='_blank'
                    >
                        <FaTrello className='inline mx-1' size={30} />
                    </Link>
                </div>
            </div>

            {/* Bottom projects drawer selector, along with left-side project details */}
            <div
                className='px-2 w-full'
                style={{ position: 'absolute', bottom: 0 }}
            >
                <div className='translate-y-20 hover:translate-y-0 transition duration-700 group'>
                    <FaAngleDoubleUp className='group-hover:mb-2 mx-auto opacity-50 transition-all' size={30}/>
                    <div className='h-48 flex flex-row justify-center group'>
                        {Object.entries(projects).map(([projectName]) => (
                            <button
                                onMouseDown={() => playSfx_click2()}
                                onMouseUp={() => {
                                    playSfx_click2()
                                    setCurrentProject(projectName)
                                }}
                                onMouseEnter={() => {
                                    playSfx_click()
                                }}
                                key={projectName}
                            >
                                <div
                                    key={projectName}
                                    className='w-80 hover:w-96 active:w-[420px] h-40 hover:h-48 m-1 relative rounded-xl opacity-25 hover:!opacity-100 hover:border-double group-hover:opacity-70 active:-translate-y-3 hover:-translate-y-2 border-b-2 border-b-black hover:border-b-white transition-all duration-300'
                                >
                                    <Image
                                        width={1280}
                                        height={720}
                                        className='object-cover w-full h-full rounded-xl'
                                        src={
                                            projects[projectName].thumbnail
                                        }
                                        alt=''
                                    />
                                    <p className='absolute bottom-0 z-10 p-2 font-bold text-gray-200'>
                                        {projectName}
                                    </p>
                                    <div className='z-0 absolute top-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}