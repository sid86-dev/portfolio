import { NextApiRequest, NextApiResponse } from 'next';
import { getAllProjects } from '../../utils/helpers';
import { IProjectApiResponse } from '../../types';
import Cors from 'cors';

const cors = Cors({
	methods: ['POST', 'GET', 'HEAD'],
});

function runMiddleware(
	req: NextApiRequest,
	res: NextApiResponse,
	fn: Function
) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result: any) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IProjectApiResponse>
) {
	const projects = (await getAllProjects()).map((post) => post.meta);

	// Run the middleware
	await runMiddleware(req, res, cors);

	res.status(200).json({ projects });
}
