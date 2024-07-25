import Image from 'next/image'

const RADIAL_GRADIENT_CLASS = 'absolute w-full h-full bg-[radial-gradient(80%_110%_at_50%_66%,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_100%)]'

export function Podiums() {
    return (
        <div className='w-full h-[1000px] flex items-center justify-center bg-black'>
            <div className='w-full max-w-[1260px] h-full flex flex-row justify-center items-center gap-x-12 bg-black'>
                <div className='relative w-[400px] h-[600px] flex flex-col justify-end items-center bg-neutral-500 rounded-[32px]'>
                    <Image
                        src={'/assets/hackathon/podium.png'}
                        alt=''
                        width={400}
                        height={400}
                        className='w-80 h-[144px] opacity-80'
                    />
                    <div className={RADIAL_GRADIENT_CLASS} />
                </div>
                <div className='relative w-[500px] h-[680px] flex flex-col justify-end items-center bg-yellow-600 rounded-[32px]'>
                    <p className='flex flex-col justify-center items-center h-[500px]'>Test</p>

                    <div className='relative flex flex-col justify-center items-center w-96 h-[180px]'>
                        <Image
                            src={'/assets/hackathon/podium.png'}
                            alt=''
                            width={400}
                            height={400}
                            className='w-full h-full opacity-80'
                        />
                        <p className='absolute w-full text-center text-[56px] title-main font-extrabold mb-28'>{'MetalDug'}</p>
                    </div>
                    <div className={RADIAL_GRADIENT_CLASS} />
                </div>
                <div className='relative w-[400px] h-[600px] flex flex-col justify-end items-center bg-amber-900 rounded-[32px]'>
                    <Image
                        src={'/assets/hackathon/podium.png'}
                        alt=''
                        width={400}
                        height={400}
                        className='w-80 h-[144px] opacity-80'
                    />
                    <div className={RADIAL_GRADIENT_CLASS} />
                </div>
            </div>
        </div>
    )
}