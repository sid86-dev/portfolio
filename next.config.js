/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: false,
	images: {
		domains: ['sid86-dashboard.s3-ap-south-1.amazonaws.com'],
	},
	webpack: (config) => {
		config.resolve.fallback = { fs: false };

		return config;
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
};

const express = require('express');
const server = express();

server.use(express.static(__dirname + '/public', { maxAge: '365d' }));
server.use(function (req, res, next) {
	if (req.url.match('.js|.css|.woff|.jpg|.png|.gif|.ttf')) {
		res.setHeader('Cache-Control', 'public,max-age=31536000'); // 365 days
	}
	next();
});

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	register: true,
	scope: '/',
	// sw: 'service-worker.js',
	skipWaiting: true,
});

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
// 	enabled: process.env.ANALYZE === 'true',
// 	openAnalyzer: false,
// });

// module.exports = withBundleAnalyzer(withPWA(nextConfig));
module.exports = withPWA(nextConfig);
