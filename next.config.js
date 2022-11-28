/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['encrypted-tbn0.gstatic.com', 'i.ibb.co'],
	},
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false };

		return config;
	},
};

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	register: true,
	scope: '/',
	// sw: 'service-worker.js',
	skipWaiting: true,
});

module.exports = withPWA(nextConfig);
