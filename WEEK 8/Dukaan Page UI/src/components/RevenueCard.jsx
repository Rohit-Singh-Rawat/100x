import React from 'react';
const RevenueCard = ({ text, amount, orders, nextPaymentDate }) => {
	return (
		<div
			className={`flex-grow rounded-[8px] ${
				nextPaymentDate
					? 'bg-[#146EB4] text-white shadow-sm'
					: 'bg-white p-5  rounded-[8px] gap-4 flex flex-col shadow-sm h-fit min-w-[300px] '
			} `}
		>
			<div
				className={`${
					nextPaymentDate
						? 'p-5  rounded-[8px] gap-4 flex flex-col shadow-sm h-fit min-w-[300px]'
						: 'flex flex-col  gap-4'
				}`}
			>
				<div
					className={`flex items-center gap-3 ${
						nextPaymentDate ? 'text-white' : 'text-[#4D4D4D] '
					}`}
				>
					<h5>{text}</h5>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-5 h-5'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
						/>
					</svg>
				</div>

				<div className='flex justify-between items-center'>
					<p className='text-3xl font-medium'>₹ {amount}</p>
					{orders ? (
						<p
							className={`text-base font-medium underline flex items-center ${
								nextPaymentDate ? 'text-white' : 'text-[#146EB4]'
							}`}
						>
							{orders} Orders{' '}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'
								strokeWidth={2.8}
								stroke='currentColor'
								className='w-[18px] h-[18px]'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m8.25 4.5 7.5 7.5-7.5 7.5'
								/>
							</svg>
						</p>
					) : null}
				</div>
			</div>
			{nextPaymentDate ? (
				<div className='bg-[#0E4F82] w-full rounded-lg	 flex text-white items-center justify-between px-6 py-2'>
					<p>Next Payment Date: </p>
					<p>{nextPaymentDate}</p>
				</div>
			) : null}
		</div>
	);
};

export default RevenueCard;
