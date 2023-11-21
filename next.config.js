/** @type {import('next').NextConfig} */
const nextConfig = {
   images : {
    remotePatterns : [
        {
            protocol: 'https',
            hostname: 'rb.gy',
            port: '',
        },
        {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',

        }
    ]
   }
}

module.exports = nextConfig
