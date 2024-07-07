'use client'

import { useRef, useState } from 'react'
import { Element } from 'react-scroll'

import { motion, useInView } from 'framer-motion'
import { useSound } from 'use-sound'

import Image from 'next/image'

import { FcCollaboration, FcElectronics, FcIdea } from 'react-icons/fc'

const cardBaseClasses = 'hover:z-10 z-0 w-[350px] hover:w-[420px] h-[430px] active:!scale-100 hover:outline-[8px] outline-[3px] outline hover:outline-double transition-all duration-300 ease-out bg-gradient-to-t rounded-3xl'

const sfxClunk = '/assets/sound_fx/clunk.mp3'
const kitty = '/assets/mascot.gif'

// import experimentAnimation from '../assets/home/experiment.gif'

// TODO: Make cards scroll to relevant sectors of home page

export default function About(): React.ReactNode {
    const [playSfx_clunk] = useSound(sfxClunk)

    const ref = useRef(null)
    const isInView = useInView(ref)

    const [card1Animating, setCard1Animating] = useState(false)
    const [card2Animating, setCard2Animating] = useState(false)
    const [card3Animating, setCard3Animating] = useState(false)

    return (
        <div ref={ref} className='w-full h-full bg-gradient-to-b from-black to-[#0a0a0a] text-gray-300 py-[24vh] mt-40'>
            <Element name='about' />

           

            <div className='w-full h-[600px] flex flex-row justify-center items-center gap-x-20 bg-[#020202]'>
            
                <div className='relative h-[500px]'>
                    <div className='absolute top-0 w-full h-[12%] bg-gradient-to-b from-[#020202] to-transparent'></div>
                    <div className='absolute bottom-[24px] w-full h-[12%] bg-gradient-to-t from-[#020202] to-transparent'></div>
                    {/* <div className='absolute left-0 w-[10%] h-full bg-gradient-to-r from-[#020202] to-transparent'></div>
                    <div className='absolute right-0 w-[10%] h-full bg-gradient-to-l from-[#020202] to-transparent'></div> */}
                    <div className='absolute w-full h-full bg-[radial-gradient(50%_90%_at_50%_50%,rgba(255,255,255,0)_40%,rgba(2,2,2,1)_100%)]'></div>

                    <div className='absolute bottom-0 w-full h-[24px] bg-[#020202]'></div>
                    <video
                        src='/assets/home/aboutCinematic.mp4'
                        className='w-full h-full'
                        preload='auto'
                        autoPlay
                        loop
                    > 
                    </video>
                </div>

                <div className='w-[33%]'>
                    <h1 className='title-main text-3xl font-bold'>Our Community at Skyline College</h1>
                    <h2>San Bruno, California</h2>
                    <div className='w-full h-[1px] bg-white my-3'></div>
                    <p className=''>
                        {`Our journey started out in the Fall of 2020, with over 250 members past and present.
                        We are a club made up entirely by students, led by other fellow students—people
                        from all experiences levels put together. Whether you are a beginner or are already
                        deeply-immersed into the industry with software and technology, our club and its community
                        .`}
                    </p>
                </div>

            </div>

            <div className='w-full h-[180px] bg-[#040404]'></div>

            <div className='flex flex-col'>
                <Image
                    src={kitty}
                    className='z-10 hover:!scale-110 transition duration-300 bounce ease-out mx-auto mb-6'
                    alt=''
                    width={100}
                    height={100}
                />

                <h1 className='title-main text-xl text-center sm:text-3xl font-extrabold text-white mb-10'>
                    <span>Join us in Exploring the </span>
                    <span className='text-yellow-300 animate-pulse drop-shadow-[0_0_10px_rgba(255,250,50,0.45)]'>
                        World of Computer Science
                    </span>
                </h1>

                <div className='flex flex-row overflow-x-scroll overflow-y-visible gap-10 py-[160px] px-[20px] my-[-160px] lg:justify-center no-scrollbar'>
                    {/* CARD: Discover Software */}
                    <motion.div
                        ref={ref}
                        onAnimationComplete={() => {
                            setCard1Animating(false)
                        }}
                        onAnimationStart={() => {
                            setCard1Animating(true)
                        }}
                        onMouseEnter={() => {
                            playSfx_clunk()
                        }}
                        initial={{ opacity: 0, transform: 'translateX(-30%)' }}
                        animate={
                            isInView
                                ? { opacity: 1, transform: 'translateX(0%)' }
                                : ''
                        }
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: 'easeOut',
                        }}
                        className={`${card1Animating && 'pointer-events-none'} ${cardBaseClasses} outline-green-400 from-black via-[#073f1c] to-green-600 hover:drop-shadow-[0_15px_35px_rgba(50,255,100,0.35)] drop-shadow-[0_25px_25px_rgba(50,255,100,0.15)]`}
                    >
                        <div className='flex flex-col justify-center items-center w-[350px] h-full mx-auto'>
                            <motion.div
                                className='relative'
                                initial={{ transform: 'translateY(-4%)' }}
                                animate={{ transform: 'translateY(4%)' }}
                                transition={{
                                    repeat: Infinity,
                                    delay: 0.5,
                                    repeatType: 'mirror',
                                    type: 'tween',
                                    ease: 'backInOut',
                                    duration: 2,
                                }}
                            >
                                <FcElectronics
                                    className='w-[145px] h-[145px] drop-shadow-[0_25px_25px_rgba(0,0,0,1)]'
                                />
                            </motion.div>
                            <h1 className='title-main font-bold text-2xl text-center mt-7'>
                                Discover{' '}
                                <span className='text-green-300 drop-shadow-[0_0_10px_rgba(100,250,100,0.25)]'>
                                    Technology
                                </span>
                            </h1>
                            <p className='text-sm text-center py-2 px-8'>
                                Expand your development toolkit by diving hands-on
                                through hundreds of diverse, specialized pieces of{' '}
                                <b>libraries, services, applications, frameworks</b>
                                , and other software. Also learn industry-leading
                                tools like <b>GitHub, Docker, Blender, Linux</b>,
                                and more!
                            </p>
                        </div>
                    </motion.div>

                    {/* CARD: Make Connections */}
                    <motion.div
                        ref={ref}
                        onAnimationComplete={() => {
                            setCard2Animating(false)
                        }}
                        onAnimationStart={() => {
                            setCard2Animating(true)
                        }}
                        onMouseEnter={() => {
                            playSfx_clunk()
                        }}
                        initial={{ opacity: 0, transform: 'translateY(30%)' }}
                        animate={
                            isInView
                                ? { opacity: 1, transform: 'translateY(0%)' }
                                : ''
                        }
                        transition={{
                            duration: 0.7,
                            delay: 0.6,
                            ease: 'easeOut',
                        }}
                        className={`${card2Animating && 'pointer-events-none'} ${cardBaseClasses} outline-blue-400 from-black via-blue-950 to-blue-600 hover:drop-shadow-[0_15px_35px_rgba(70,120,250,0.35)] drop-shadow-[0_25px_25px_rgba(70,120,250,0.15)]`}
                    >
                        <div className='flex flex-col justify-center items-center w-[350px] h-full mx-auto'>
                            <motion.div
                                className='relative'
                                initial={{ transform: 'translateY(-4%)' }}
                                animate={{ transform: 'translateY(4%)' }}
                                transition={{
                                    repeat: Infinity,
                                    delay: 1,
                                    repeatType: 'mirror',
                                    type: 'tween',
                                    ease: 'backInOut',
                                    duration: 2,
                                }}
                            >
                                <FcCollaboration
                                    className='w-[145px] h-[145px] drop-shadow-[0_25px_25px_rgba(0,0,0,1)]'
                                />
                            </motion.div>
                            <h1 className='title-main font-bold text-2xl text-center mt-7'>
                                Build{' '}
                                <span className='text-blue-300 drop-shadow-[0_0_10px_rgba(125,100,250,0.25)]'>
                                    Connections
                                </span>
                            </h1>
                            <p className='text-sm text-center py-2 px-8'>
                                In an always-evolving, inter-connected world,{' '}
                                <b>networking is as important as ever!</b> Meet with
                                other fellow students and share your{' '}
                                <b>interests and passions!</b> Meet your future{' '}
                                <b>industry colleagues</b> and explore all of computer
                                science together!
                            </p>
                        </div>
                    </motion.div>

                    {/* CARD: Gain Experience */}
                    <motion.div
                        ref={ref}
                        onAnimationComplete={() => {
                            setCard3Animating(false)
                        }}
                        onAnimationStart={() => {
                            setCard3Animating(true)
                        }}
                        onMouseEnter={() => {
                            playSfx_clunk()
                        }}
                        initial={{ opacity: 0, transform: 'translateX(30%)' }}
                        animate={
                            isInView
                                ? { opacity: 1, transform: 'translateX(0%)' }
                                : ''
                        }
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: 'easeOut',
                        }}
                        className={`${card3Animating && 'pointer-events-none'} ${cardBaseClasses} outline-yellow-600 from-black via-yellow-950 to-yellow-600 hover:drop-shadow-[0_15px_35px_rgba(237,144,10,0.35)] drop-shadow-[0_25px_25px_rgba(237,144,10,0.15)]`}
                    >
                        <div className='flex flex-col justify-center items-center w-[350px] h-full mx-auto'>
                            <motion.div
                                className='relative'
                                initial={{ transform: 'translateY(-4%)' }}
                                animate={{ transform: 'translateY(4%)' }}
                                transition={{
                                    repeat: Infinity,
                                    delay: 1.5,
                                    repeatType: 'mirror',
                                    type: 'tween',
                                    ease: 'backInOut',
                                    duration: 2,
                                }}
                            >
                                <FcIdea
                                    className='w-[145px] h-[145px] drop-shadow-[0_25px_25px_rgba(0,0,0,1)]'
                                />
                            </motion.div>
                            <h1 className='title-main font-bold text-2xl text-center mt-7'>
                                Gain{' '}
                                <span className='text-yellow-200 drop-shadow-[0_0_10px_rgba(255,250,100,0.25)]'>
                                    Experience
                                </span>
                            </h1>
                            <p className='text-sm text-center py-2 px-8'>
                                Get the opportunity to work across a diverse set of
                                projects in{' '}
                                <b>
                                    game development, web UI/UX design, and
                                    fullstack
                                </b>{' '}
                                development! Experience <b>real-world project</b>{' '}
                                workflows with fellow members! Or—even propose and{' '}
                                <b>lead your own project!</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
                <p className='m-4 lg:hidden font-semibold text-neutral-400 animate-pulse'>drag to view cards →</p>
            </div>
        </div>
    )
}
