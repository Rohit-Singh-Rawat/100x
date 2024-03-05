import React from 'react';
import photo from '../assets/Img/photo.jpg'

const Navbar = () => {
	return (
		<aside
			id='default-sidebar'
			className='fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto'
			aria-label='Sidebar'
		>
			<div className='relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between -translate-x-full lg:translate-x-0'>
				<div>
					<div className='flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto'>
						<div>
							<img
								src={photo}
								alt='photo'
								className='h-10 border-x-[6px] rounded border-[#F8F8F8]'
							/>
						</div>
						<div className='class="flex flex-col gap-1 w-[108px] justify-center"'>
							<h3 className='leading-[22px] font-medium text-[15px]'>Suguru</h3>
							<a
								href='/'
								className='underline font-extralight leading-[16px] text-[13px] text-[#D2D4D9] w-fit'
							>
								Visit Store
							</a>
						</div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							stroke='currentColor'
							className='w-6 h-6 font-bold'
						>
							<path
								fillRule='evenodd'
								d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
					<div>
                        
                    </div>
				</div>
			</div>
		</aside>
	);
};

export default Navbar;
