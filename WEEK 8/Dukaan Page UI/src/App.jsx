import React, { createContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Transactions from './components/Transactions';
import githublogo from './assets/Img/github-mark.png';
export const NavbarContext = createContext();
function App() {
	const [navbarOn, setNavbarOn] = useState(false);
	return (
		<>
			<div className='flex __className_e66fe9'>
				<NavbarContext.Provider value={{ navbarOn, setNavbarOn }}>
					<Navbar className='bg-white'></Navbar>
				</NavbarContext.Provider>
				<div className='w-full bg-[#FAFAFA]'>
					<NavbarContext.Provider value={{ navbarOn, setNavbarOn }}>
						{' '}
						<Header></Header>
					</NavbarContext.Provider>

					<div className='p-3 sm:p-8 w-full gap-8 flex flex-col'>
						<Overview></Overview>
						<Transactions></Transactions>
						<div className='flex justify-center gap-2 items-center'>
							<h2 className='text-gray-500'>
								Made By{' '}
								<a
									href='https://twitter.com/Spacing_Whale'
									className='underline font-bold'
								></a>
								Rohit Singh
							</h2>
							<a
								href='https://github.com/Rohit-Singh-Rawat/100x/tree/main/WEEK%208/Dukaan%20Page%20UI
								'
							>
								<img
									src={githublogo}
									alt='img'
									className='w-[25px] h-[25px]'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
