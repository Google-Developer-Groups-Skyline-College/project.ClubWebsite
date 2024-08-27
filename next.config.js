/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ]
    },
}

module.exports = nextConfig