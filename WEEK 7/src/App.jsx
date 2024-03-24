import { useState } from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import BackgroundColorChanger from './components/BackgroundColorChanger/BackgroundColorChanger';
import ParaGenerator from './components/ParaGenerator/ParaGenerator';
import Github from './components/github-page/Github';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Github></Github>
		</>
	);
}

export default App;
