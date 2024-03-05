import React from 'react';

import RevenueCard from './RevenueCard';

const Overview = () => {
	return (
		<section className='flex flex-col gap-6'>
			<div className='flex w-full justify-between items-center'>
				<h5 className='font-medium text-xl'>Overview</h5>
				<button className='flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]'>
					This Month{' '}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						stroke='currentColor'
						stroke-width='0'
						className='w-5 h-5 font-bold'
					>
						<path
							fillRule='evenodd'
							d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
			</div>

			<div className='flex flex-wrap gap-5'>
				<RevenueCard
					text={'Next Payout'}
					amount={'2,312.23'}
					orders={23}
					nextPaymentDate={'Today, 4:00PM'}
				></RevenueCard>
				<RevenueCard
					text={'Amount Pending'}
					amount={'92,312.20'}
					orders={13}
				></RevenueCard>
				<RevenueCard
					text={'Amount Processed'}
					amount={'23,92,312.19'}
				></RevenueCard>
			</div>
		</section>
	);
};

export default Overview;
