import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import RevenueCard from './components/RevenueCard';
import Header from './components/Header';
import Navbar from './components/Navbar';
function App() {

	return (
		<>
			<div className='flex '>
				<Navbar></Navbar>
				<div className='w-full'>
					<Header></Header>
					{/* <div className='grid grid-cols-5'>
						<RevenueCard
							text={'Amount Pending'}
							amount={'92,312.20'}
							orders={13}
						></RevenueCard>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default App;
