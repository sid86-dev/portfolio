/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_SITE_URL;

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
};
