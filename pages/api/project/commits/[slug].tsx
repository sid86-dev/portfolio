import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const octokit = new Octokit({
		auth: process.env.GITHUB_PERSONAL_TOKEN,
	});

	const slug = req.query.slug as string;

	// console.log(`Fetching commit data for ${slug}`);

	const { data } = await octokit.request(
		`GET /repos/sid86-dev/${slug}/commits?per_page=100&page=1`,
		{
			owner: 'OWNER',
			repo: 'REPO',
			headers: {
				'X-GitHub-Api-Version': '2022-11-28',
			},
		}
	);
	res.status(200).json({ commits: data });
}
