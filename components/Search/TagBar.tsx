import React, { FC, useRef } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { tagColors } from '../../lib/constants';

interface ITagBarProps {
	handleResetData: () => void;
	handleSearchByTag: (tag: string) => void;
}

export const TagBar: FC<ITagBarProps> = ({
	handleResetData,
	handleSearchByTag,
}) => {
	const tagBarRef = useRef<HTMLDivElement>(null);

	function leftScroll() {
		tagBarRef.current?.scrollBy({
			left: -200,
			behavior: 'auto',
		});
	}
	function rightScroll() {
		tagBarRef.current?.scrollBy({
			left: 200,
			behavior: 'smooth',
		});
	}
	return (
		<div className='my-3 row'>
			<div className='col-1 text-end d-none d-md-block'>
				<span className='pointer ' onClick={leftScroll}>
					<KeyboardArrowLeftIcon fontSize='large' />
				</span>
			</div>

			<div className='tagsBar col-10' ref={tagBarRef}>
				<span
					className='mx-2 pointer badge pb-2 py-1 my-2 fs-6 text-dark border-dark border-0 bg-white'
					onClick={() => handleResetData()}
				>
					All
				</span>
				{/* Render Tags  */}
				{tagColors.map((tag, index) => (
					<span
						key={index}
						className={`mx-2 pointer badge py-1 my-2 fs-6 text-dark border-0 pb-2 ${tag.class}`}
						onClick={() => handleSearchByTag(tag.tag)}
					>
						{tag.tag}
					</span>
				))}
			</div>
			<div className='col-1 d-none d-md-block'>
				<span className='pointer' onClick={rightScroll}>
					<KeyboardArrowRightIcon fontSize='large' />
				</span>
			</div>
		</div>
	);
};
