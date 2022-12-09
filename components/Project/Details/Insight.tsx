import React, { FC } from 'react';
import { DiGithubFull } from 'react-icons/di';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ProjectMeta } from '../../../types';
import { SlGraph } from 'react-icons/sl';
import { VscGithubAction } from 'react-icons/vsc';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface IProps {
	project: ProjectMeta;
	graphData: {
		dataLabels: string[];
		commitData: number[];
	};
}

const Insight: FC<IProps> = ({ project, graphData }) => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: `${project.title} commits insight`,
			},
		},
	};

	const GraphData = {
		labels: graphData.dataLabels,
		datasets: [
			{
				label: 'Commits',
				data: graphData.commitData,
				borderColor: 'rgb(250, 126, 68)',
				backgroundColor: 'rgb(255, 255, 255, 0.8)',
			},
		],
	};

	return (
		<div className='m-lg-5 pt-5 pt-md-2 px-3 px-lg-5'>
			<div className='container-table'>
				<h2 className='pb-1'>
					<SlGraph color='pink' /> Insights
				</h2>
				<p className='fw-bold pt-4 pb-2'>
					Viewing commit history of{' '}
					<strong>
						{project.title} between {graphData.dataLabels[0]} -{' '}
						{graphData.dataLabels[graphData.dataLabels.length - 1]}
					</strong>
				</p>
				<a
					target='_blank'
					rel='noreferrer'
					href={`https://github.com/sid86-dev/${project.slug}`}
					className='btn btn-warning py-1'
				>
					View Github Repo
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href={`https://github.dev/sid86-dev/${project.slug}`}
					className='mx-4 btn btn-dark py-1'
				>
					<VscGithubAction size={25} /> Edit Project
				</a>
				<Line className='mt-5' options={options} data={GraphData} />
				<div className='text-end'>
					<DiGithubFull size={45} />
				</div>
			</div>
		</div>
	);
};

export default Insight;
