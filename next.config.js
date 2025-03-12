/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.itch.zone',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
            {
                source: '/promotion',
                destination: '/recruitment',
                permanent: false,
            },
            {
                source: '/recruitment',
                destination: '/home',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig