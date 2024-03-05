import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Overview from './components/Overview';

function App() {
	return (
		<>
			<div className='flex __className_e66fe9'>
				<Navbar className='bg-white'></Navbar>
				<div className='w-full bg-[#FAFAFA]'>
					<Header></Header>
					<div className='p-3 sm:p-8 w-full gap-8 flex flex-col'>
						<Overview></Overview>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
