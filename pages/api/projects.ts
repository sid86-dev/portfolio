import { NextApiRequest, NextApiResponse } from 'next';
import { getAllProjects } from '../../utils/helpers';
import { IProjectApiResponse } from '../../types';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IProjectApiResponse>
) {
	const projects = (await getAllProjects()).map((post) => post.meta);
	res.status(200).json({ projects });
}
