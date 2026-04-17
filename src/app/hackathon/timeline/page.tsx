import Link from 'next/link'

export default function Timeline() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white pt-24 pb-20 px-6'>
            <div className='max-w-4xl mx-auto'>

                <Link href='/hackathon' className='text-neutral-400 hover:text-white font-Poppins text-sm mb-4 inline-block'>
                    ← Back to Hackathon
                </Link>

                <p className='text-sm sm:text-base tracking-[0.3em] uppercase text-neutral-400 font-Poppins'>
                    The Third Annual Intercollegiate
                </p>
                <h1 className='text-4xl sm:text-6xl font-extrabold font-Poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 leading-tight'>
                    Mission Timeline
                </h1>
                <p className='text-base sm:text-xl text-neutral-300 font-Poppins mt-2'>
                    April 17 — 24, 2026 · Skyline College, Room 4-148
                </p>

                <div className='mt-12 space-y-10'>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <p className='text-xs tracking-[0.2em] uppercase text-yellow-400 font-Poppins'>Phase 1</p>
                        <h2 className='text-2xl sm:text-3xl font-bold font-Poppins mt-1'>Opening Ceremony</h2>
                        <p className='text-neutral-400 font-Poppins mt-1'>Friday, April 17, 2026 · Skyline College, Room 4-148</p>

                        <ul className='mt-5 space-y-3 font-Poppins'>
                            <li className='flex gap-4'>
                                <span className='text-yellow-400 font-bold w-24 shrink-0'>2:00 PM</span>
                                <span className='text-neutral-200'>Opening ceremony begins — welcome, intros, and theme reveal</span>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-yellow-400 font-bold w-24 shrink-0'>3:00 PM</span>
                                <span className='text-neutral-200'>Check-ins for registered explorers</span>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-yellow-400 font-bold w-24 shrink-0'>3:30 PM</span>
                                <span className='text-neutral-200'>Team formation + track introductions</span>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-yellow-400 font-bold w-24 shrink-0'>4:00 PM</span>
                                <span className='text-neutral-200'>Workshop sessions · mentor office hours open</span>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-yellow-400 font-bold w-24 shrink-0'>6:00 PM</span>
                                <span className='text-neutral-200'>Food served</span>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-yellow-400 font-bold w-24 shrink-0'>6:30 PM</span>
                                <span className='text-neutral-200'>Opening ceremony ends · hacking begins</span>
                            </li>
                        </ul>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <p className='text-xs tracking-[0.2em] uppercase text-blue-400 font-Poppins'>Phase 2</p>
                        <h2 className='text-2xl sm:text-3xl font-bold font-Poppins mt-1'>Building Week</h2>
                        <p className='text-neutral-400 font-Poppins mt-1'>April 17 — April 24, 2026</p>

                        <ul className='mt-5 space-y-3 font-Poppins text-neutral-200'>
                            <li>🛠️ Work on your project individually or with your team (max 3 per team)</li>
                            <li>🧑‍🏫 Mentors available throughout the week via Discord</li>
                            <li>📚 Workshop recordings and resources posted in the Discord server</li>
                            <li>🤔 Drop questions in #ask-a-mentor and #coding-support</li>
                        </ul>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <p className='text-xs tracking-[0.2em] uppercase text-purple-400 font-Poppins'>Phase 3</p>
                        <h2 className='text-2xl sm:text-3xl font-bold font-Poppins mt-1'>Submissions + Closing Ceremony</h2>
                        <p className='text-neutral-400 font-Poppins mt-1'>Friday, April 24, 2026</p>

                        <ul className='mt-5 space-y-3 font-Poppins text-neutral-200'>
                            <li>📝 Submit your project in the #submissions channel</li>
                            <li>🎤 Team presentations + demos</li>
                            <li>🧑‍⚖️ Judging by mentors and organizers</li>
                            <li>🏆 Winners announced — details to be confirmed</li>
                        </ul>
                        <p className='text-sm text-neutral-500 italic mt-4'>Closing ceremony details will be posted in #announcements once finalized.</p>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <h2 className='text-2xl font-bold font-Poppins'>🛤️ Tracks</h2>
                        <ul className='mt-4 space-y-2 font-Poppins text-neutral-200'>
                            <li><span className='font-bold text-white'>🕹️ Game Development / Data Science</span> — beginner-friendly</li>
                            <li><span className='font-bold text-white'>⚙️ Embedded System Design / Automation</span></li>
                            <li><span className='font-bold text-white'>🏫 Improving SMCCCD</span> — build something useful for our campuses</li>
                        </ul>
                    </section>

                    <div className='flex flex-col sm:flex-row gap-3 items-center pt-4'>
                        <Link href='/hackathon/handbook' className='bg-[#cc00ffcc] rounded-xl p-3 px-8 hover:px-10 text-lg font-Poppins font-bold transition-all duration-300 text-center hover:brightness-125'>
                            Hacker Handbook →
                        </Link>
                        <a href='https://tally.so/r/RG45LK' target='_blank' className='bg-[#bd1e1e] rounded-xl p-3 px-8 hover:px-10 text-lg font-Poppins font-bold transition-all duration-300 text-center hover:brightness-125'>
                            Apply
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
