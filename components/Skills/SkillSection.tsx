import React from 'react';
import { SkillCard } from './SkillCard';
import { motion } from 'framer-motion';
import { cardVarient } from '../../lib/constants';

export default function App() {
	return (
		<div className='container text-center justify-content-center py-4'>
			{/* header */}
			<h2 className='text-center'>Tech Stack</h2>

			{/* display cards */}
			<div className='card-group my-1 my-md-5 py-5'>
				{cardVarient.map((card, index) => (
					<motion.div
						whileHover={{ scale: 1.05 }}
						key={index}
						className={`card border-5 ${
							index != 1 ? 'border-success' : 'border-danger'
						} mx-md-2 mx-xl-3 rounded`}
					>
						<div>
							<SkillCard display={card} />
						</div>{' '}
					</motion.div>
				))}
			</div>

			<span className='fw-bolder fs-5 py-5'>
				I love building tools that are user-friendly, simple user-friendly,
				simple and delightful.
			</span>
		</div>
	);
}
