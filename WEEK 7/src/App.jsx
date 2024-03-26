import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BackgroundColorChangerPage from './pages/BackgroundColorChangerPage';
import BirthDayCardPage from './pages/BirthDayCardPage';
import OTPLoginPage from './pages/OTPLoginPage';
import ParaGeneratorPage from './pages/ParaGeneratorPage';
import ProfilePage from './pages/ProfilePage';
import GithubPage from './pages/Github-Page';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home></Home>}
					></Route>
					<Route
						path='/BackgroundColorChanger'
						element={<BackgroundColorChangerPage></BackgroundColorChangerPage>}
					></Route>
					<Route
						path='/BirthDayCard'
						element={<BirthDayCardPage></BirthDayCardPage>}
					></Route>
					<Route
						path='/GithubPage'
						element={<GithubPage></GithubPage>}
					></Route>
					<Route
						path='/OTPLogin'
						element={<OTPLoginPage></OTPLoginPage>}
					></Route>
					<Route
						path='/ParaGenerator'
						element={<ParaGeneratorPage></ParaGeneratorPage>}
					></Route>
					<Route path='/Profile' element={<ProfilePage></ProfilePage>}>

					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
