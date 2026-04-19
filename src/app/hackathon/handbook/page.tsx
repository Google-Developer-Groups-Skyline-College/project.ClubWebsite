import Link from 'next/link'

export default function Handbook() {
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
                    Hacker Handbook
                </h1>
                <p className='text-base sm:text-xl text-neutral-300 font-Poppins mt-2'>
                    Everything you need to know before you arrive.
                </p>

                <div className='mt-12 space-y-8'>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <h2 className='text-2xl font-bold font-Poppins'>📍 Event Location</h2>
                        <div className='mt-4 font-Poppins text-neutral-200 space-y-1'>
                            <p><span className='text-neutral-400'>Venue:</span> Skyline College</p>
                            <p><span className='text-neutral-400'>Room:</span> <span className='text-white font-bold'>4-148</span></p>
                            <p><span className='text-neutral-400'>Address:</span> 3300 College Drive, San Bruno, CA 94066</p>
                        </div>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <h2 className='text-2xl font-bold font-Poppins'>🎒 What To Bring</h2>
                        <ul className='mt-4 space-y-2 font-Poppins text-neutral-200'>
                            <li>💻 Your laptop + charger</li>
                            <li>🖱️ Mouse, headphones, or any gear you prefer</li>
                            <li>💧 Water bottle (food will be provided)</li>
                            <li>🧑‍🚀 An open mind and your curiosity</li>
                        </ul>
                        <p className='text-sm text-neutral-500 italic mt-4'>Open to everyone — no experience required, bring your friends.</p>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <h2 className='text-2xl font-bold font-Poppins'>👥 Teams</h2>
                        <ul className='mt-4 space-y-2 font-Poppins text-neutral-200'>
                            <li>Teams of up to <span className='text-white font-bold'>3 members</span></li>
                            <li>You can form your team through the application</li>
                            <li>No team yet? We&apos;ll help you find one on check-in day or in Discord</li>
                            <li>Solo entries welcome</li>
                        </ul>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <h2 className='text-2xl font-bold font-Poppins'>🛤️ Tracks & Themes</h2>
                        <div className='mt-4 space-y-5 font-Poppins text-neutral-200'>
                            <div>
                                <p className='text-white font-bold text-lg'>🏫 Improving SMCCCD</p>
                                <p className='text-sm text-yellow-400 mt-1 tracking-wide uppercase'>Theme: Student Success</p>
                                <p className='text-sm text-neutral-400 mt-1'>Build something that helps students across our district succeed — tools for learning, study, campus life, advising, and beyond.</p>
                            </div>
                            <div>
                                <p className='text-white font-bold text-lg'>⚙️ Embedded Systems / Automation</p>
                                <p className='text-sm text-yellow-400 mt-1 tracking-wide uppercase'>Theme: Eco-Friendly <span className='text-neutral-500 normal-case'>or</span> Visualization</p>
                                <p className='text-sm text-neutral-400 mt-1'>Pick one. Automate a process that saves energy or resources, or build a visualization that reveals something new.</p>
                            </div>
                            <div>
                                <p className='text-white font-bold text-lg'>🕹️ Game Development / Data Science</p>
                                <p className='text-sm text-yellow-400 mt-1 tracking-wide uppercase'>Theme: Open-Ended</p>
                                <p className='text-sm text-neutral-400 mt-1'>You decide the theme. Beginner-friendly — build a small game, a data visualization, or an interactive demo.</p>
                            </div>
                        </div>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <h2 className='text-2xl font-bold font-Poppins'>📜 Rules</h2>
                        <ol className='mt-4 space-y-2 font-Poppins text-neutral-200 list-decimal list-inside'>
                            <li>Be respectful to all participants, mentors, and organizers</li>
                            <li>No harassment, discrimination, or hate speech</li>
                            <li>Original work only — you can use open-source libraries and AI tools, but core ideas should be yours</li>
                            <li>Teams of up to 3 people</li>
                            <li>Submissions must be made by the deadline</li>
                            <li>Stay in your lane — pick a track and commit to it</li>
                            <li>Have fun and help each other</li>
                        </ol>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <h2 className='text-2xl font-bold font-Poppins'>🧑‍🏫 Mentors + Help</h2>
                        <ul className='mt-4 space-y-2 font-Poppins text-neutral-200'>
                            <li>Mentors will be on-site during the opening and available in Discord during the week</li>
                            <li>Use <span className='font-mono text-white'>#ask-a-mentor</span> for project guidance</li>
                            <li>Use <span className='font-mono text-white'>#coding-support</span> for technical help</li>
                            <li>Check <span className='font-mono text-white'>#shared-resources</span> for tools and tutorials</li>
                        </ul>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <h2 className='text-2xl font-bold font-Poppins'>🏆 Judging</h2>
                        <p className='mt-4 font-Poppins text-neutral-200'>
                            Projects will be evaluated on creativity, technical execution, relevance to your chosen track theme, and presentation. Prizes and judging details will be announced closer to the closing ceremony.
                        </p>
                    </section>

                    <section className='bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neutral-800'>
                        <h2 className='text-2xl font-bold font-Poppins'>📫 Contact</h2>
                        <p className='mt-4 font-Poppins text-neutral-200'>
                            Questions? Email <a className='text-blue-400 hover:text-blue-300' href='mailto:skylinecompsciclub@gmail.com'>skylinecompsciclub@gmail.com</a> or ping us in Discord.
                        </p>
                    </section>

                    <div className='flex flex-col sm:flex-row gap-3 items-center pt-4'>
                        <Link href='/hackathon/timeline' className='bg-[#ffd035cc] text-black rounded-xl p-3 px-8 hover:px-10 text-lg font-Poppins font-bold transition-all duration-300 text-center hover:brightness-125'>
                            ← Mission Timeline
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
