import Image from 'next/image'

export function Podiums() {
    return (
        <div className='w-full py-40 flex flex-col justify-center items-center bg-black overflow-hidden'>

            <Image
                src={'/assets/hackathon/galaxy.jpg'}
                alt=''
                width={2000}
                height={1100}
                className='absolute w-full h-full object-cover opacity-40 blur-[16px]'
            />

            <div className='max-w-[1280px] h-full py-20 flex flex-col justify-center items-center gap-y-2'>
                <p className='title-main text-2xl'>SMCCD Intercollegiate Hackathon</p>
                <p className='pb-2 title-main text-4xl sm:text-5xl text-transparent font-extrabold bg-gradient-to-t from-white to-[#ffbb00] bg-clip-text drop-shadow-[0_0_40px_rgba(50,250,255,1)]'>
                    Volume III
                </p>
                <p className='title-main text-lg text-neutral-300'>Winners will be announced after the hackathon!</p>
            </div>
        </div>
    )
}