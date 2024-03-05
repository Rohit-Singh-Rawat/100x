import React from 'react';
import speaker from '../assets/Img/speaker.png';
const Header = () => {
	return (
		<div className='flex justify-between m-2 p-3 border-b-[1px] w-full'>
			<div className='flex items-center grow'>
				<h5 className='text-xl font-medium'>Payouts</h5>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-4 h-4 ml-3 mr-1'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
					/>
				</svg>
				<p className='text-xs'>How it works </p>
			</div>
			<div className='flex items-center bg-[#F2F2F2] text-[#808080] p-2 w-[140px] flex-grow rounded'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={2.5}
					stroke='currentColor'
					className='w-4 h-4 mr-2 ml-3 text-lg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
					/>
				</svg>

				<input
					className='bg-transparent outline-none w-full text-lg '
					type='text'
					placeholder='Search features, tutorials, etc.'
				/>
			</div>

			<div className='grow flex gap-2 justify-end mr-5'>
				<button className='bg-[#E6E6E6] flex justify-center items-center text-[#4D4D4D] rounded-full p-3 w-10 h-10'>
					<img
						src={speaker}
						className='object-cover w-[20px] h-[20px] max-w-none'
						alt='speaker'
					/>
				</button>
				<button className='bg-[#E6E6E6] flex justify-center items-center text-[#4D4D4D] rounded-full  w-10 h-10'>
					<svg
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						viewBox='0 0 320 512'
						class='text-2xl'
						height='1em'
						width='1em'
					>
						<path d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z'></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Header;
