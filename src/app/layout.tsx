import './globals.css'

import type { Metadata } from 'next'

import { Inter, Poppins, Ubuntu, Rubik, Open_Sans } from 'next/font/google'

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'

import { Navbar } from 'shared/_modules'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const rubik = Rubik({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-rubik',
})

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['300', '500'],
})

const ubuntu = Ubuntu({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-ubuntu',
})

const open_sans = Open_Sans({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-open_sans',
})

export const metadata: Metadata = {
    title: 'GDG on Campus Skyline College',
    description: 'The official Google-affiliated Computer Science Organization at Skyline College. 🪁',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): React.ReactNode {
    return (
        <html className={`${inter.variable} ${poppins.variable} ${ubuntu.variable} ${rubik.variable} ${open_sans.variable}`}>
            <SpeedInsights />
            <Analytics />
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
