/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tailwindui.com',
				port: '',
				pathname: '/img/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com/',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/dtaakwnul/image/upload/**',
			},
		],
	},
};

module.exports = nextConfig;
