import React, { createContext, useContext, useState } from 'react';
import NavbarItem from './NavbarItem';
import homeImg from '../assets/Img/home.png';
import ordersImg from '../assets/Img/orders.png';
import productsImg from '../assets/Img/products.png';
import deliveryImg from '../assets/Img/delivery.png';
import marketingImg from '../assets/Img/marketing.png';
import analyticsImg from '../assets/Img/analytics.png';
import payoutsImg from '../assets/Img/payouts.png';
import discountsImg from '../assets/Img/discounts.png';
import audienceImg from '../assets/Img/audience.png';
import appearanceImg from '../assets/Img/appearance.png';
import pluginsImg from '../assets/Img/plugins.png';
import photo from "../assets/Img/photo.jpg"
import wallet from "../assets/Img/wallet.svg"
import { NavbarContext } from '../App';

const navbarItems = [
	{ img: homeImg , text: 'Home' },
	{ img: ordersImg , text: 'Orders' },
	{ img: productsImg , text: 'Products' },
	{ img: deliveryImg , text: 'Delivery' },
	{ img: marketingImg , text: 'Marketing' },
	{ img: analyticsImg , text: 'Analytics' },
	{ img: payoutsImg , text: 'Payouts' },
	{ img: discountsImg , text: 'Discounts' },
	{ img: audienceImg , text: 'Audience' },
	{ img: appearanceImg , text: 'Appearance' },
	{ img: pluginsImg , text: 'Plugins' },
];


const Navbar = () => {
	const {navbarOn, setNavbarOn} = useContext(NavbarContext);
	return (
		<aside
			id='default-sidebar'
			className={`fixed lg:sticky left-0 top-0 z-40 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] ${
				navbarOn ? ' ' : 'pointer-events-none opacity-0'
			}  lg:opacity-100 lg:pointer-events-auto`}
			aria-label='Sidebar'
		>
			<div
				class='absolute inset-0 cursor-pointer transition-opacity bg-gray-500 bg-opacity-75'
				onClick={() => {
					setNavbarOn((e) => !e);
				}}
			></div>
			<button
				class='fixed top-5 right-4 lg:hidden'
				onClick={() => {
					setNavbarOn((e) => !e);
				}}
			>
				<svg
					stroke='currentColor'
					fill='currentColor'
					stroke-width='0'
					viewBox='0 0 512 512'
					class='text-white text-3xl'
					height='1em'
					width='1em'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z'></path>
				</svg>
			</button>
			<div
				className={` relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between ${
					navbarOn ? 'translate-x-0 ' : '-translate-x-full'
				} lg:translate-x-0 `}
			>
				<div className=' w-full flex flex-col gap-6 items-center'>
					<div className='flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto'>
						<div>
							<img
								src={photo}
								alt='photo'
								className='h-10 border-x-[6px] rounded border-[#F8F8F8]'
							/>
						</div>
						<div className='flex flex-col gap-1 w-[108px] justify-center'>
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
					<div className='w-full flex flex-col'>
						{navbarItems.map((item) => (
							<NavbarItem
								img={item.img}
								text={item.text}
								key={item.text}
							></NavbarItem>
						))}
					</div>
				</div>
				<div className='rounded-[4px]  py-[6px] px-3 mx-2 bg-[#353C53]'>
					<div className='flex gap-3 items-center'>
						<div className='w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center'>
							<img
								src={wallet}
								alt=''
							/>
						</div>
						<div className='flex flex-col gap-[2px] text-[#FFFFFF]'>
							<h3 className='text-[14px] font-light'>Avaliable Credits</h3>
							<h6 className='text-base font-medium'>224.10</h6>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Navbar;
