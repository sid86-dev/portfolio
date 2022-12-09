import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
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
}

const Insight: FC<IProps> = ({ project }) => {
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
	const [data, setData] = useState<number[]>([]);
	const [labels, setLabels] = useState<string[]>([]);

	const sortGithubData = (data: any[]) => {
		const month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		let dates: string[] = [];
		data.map((item: any) => {
			let date = new Date(item.commit.committer.date);
			dates.push(date.getDate() + ' ' + month[date.getMonth()]);
		});

		let dataLabels: string[] = [];

		const occurance = dates.reduce(function (acc, curr) {
			// @ts-ignore
			return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
		}, {});

		let commitData: number[] = [];

		for (const [key, value] of Object.entries(occurance)) {
			dataLabels.push(key);
			// @ts-ignore
			commitData.push(value);
		}

		return { commitData, dataLabels };
	};

	useEffect(() => {
		const getRepoData = async () => {
			const { data } = await axios.get(
				`https://api.github.com/repos/sid86-dev/${project.slug}/commits?per_page=100&page=1`
			);

			const { commitData, dataLabels } = sortGithubData(data);

			setData(commitData);
			setLabels(dataLabels);
		};
		if (!data?.length) {
			getRepoData();
		}
	}, [data, project.slug]);

	const GraphData = {
		labels: labels,
		datasets: [
			{
				label: 'Commits',
				data: data,
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
						{project.title} between {labels[0]} - {labels[labels.length - 1]}
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
