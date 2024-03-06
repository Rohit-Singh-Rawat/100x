import React from 'react';
import speaker from '../assets/Img/speaker.png';

import { NavbarContext } from '../App';
import { useContext } from 'react';


const Header = () => {
	
	const { navbarOn, setNavbarOn } = useContext(NavbarContext);
	return (
		<div className=' flex justify-between items-center sm:gap-4  gap-2 sm:px-8 px-4 py-3 border-b border-[#D9D9D9] sticky top-0 bg-[#FFFFFF] '>
			<div className='flex gap-2 sm:gap-4 items-center sm:flex-grow '>
				<div className='flex items-center'>
					<button
						className='lg:hidden '
						onClick={() => {
							setNavbarOn((e) => !e);
						}}
					>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 512 512'
							class='text-2xl'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z'></path>
						</svg>
					</button>
				</div>
				<h5 className='text-lg font-[500]'>Payouts</h5>
				<div className='flex items-center gap-[6px]'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-4 h-4  '
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
						/>
					</svg>
					<p className='hidden sm:block text-xs'>How it works </p>
				</div>
			</div>
			<div className='flex items-center gap-2 px-4 py-1.5 sm:py-[9px] w-[140px] bg-[#F2F2F2] text-[#808080] rounded sm:flex-grow'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={2.5}
					stroke='currentColor'
					height='1rem'
					width='1rem'
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

			<div className='flex gap-2 justify-end sm:flex-grow'>
				<button className='bg-[#E6E6E6] flex justify-center items-center text-[#4D4D4D] rounded-full p-1  h-8 w-8 sm:w-10 sm:h-10 sm:flex sm:pw-3 '>
					<img
						src={speaker}
						className='object-cover w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] max-w-none'
						alt='speaker'
					/>
				</button>
				<button className='bg-[#E6E6E6] flex justify-center items-center text-[#4D4D4D] rounded-full  p-1  h-8 w-8 sm:w-10 sm:h-10 sm:flex sm:pw-3 '>
					<svg
						stroke='currentColor'
						fill='currentColor'
						strokeWidth='0'
						viewBox='0 0 320 512'
						className='text-2xl w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] '
					>
						<path d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z'></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Header;
