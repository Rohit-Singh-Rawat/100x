import React, { useEffect, useState } from 'react';
import './github.css';
import ReactCardFlip from 'react-card-flip';
import axios from 'axios';
const Github = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [githubInfo, setGithubInfo] = useState({});
	const [warningErr, setWarningErr] = useState('');
	const [username, setUsername] = useState('');
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	const buildCard = () => {
		(async () => {
			setWarningErr('')
			
			try {
				const response = await axios({
					method: 'get',
					url: `https://api.github.com/users/${username}`,
				});
				setGithubInfo(response.data);
				(async () => {
					const res = await axios({
						method: 'get',
						url: response.data.repos_url,
					});
	
					setGithubInfo((obj) => {
						return {
							...obj,
							repos: res.data
								.sort((a, b) => b.stargazers_count - a.stargazers_count)
								.slice(0, 5),
						};
					});
				})();
			} catch (error) {
				setWarningErr('Invalid UserName')
			}
		})();
	};
	return (
		<div className='flex flex-col items-center overflow-hidden'>
			<div className='flex gap-10 my-10'>
				<input className='px-5 outline-none min-w-[250px] border-dashed border-4 border-slate-900' 
					type='text'
					onChange={(e) => setUsername(e.target.value)}
					placeholder='Enter your github Username'
				/>
				<button className='px-5 py-3 bg-slate-900 text-white font-bold rounded-xl' onClick={buildCard}>show</button>
			</div>
			{warningErr ? (
				<div className='text-red-500 text-xl'>{warningErr}</div>
			) : Object.keys(githubInfo).length ? (
				<ReactCardFlip isFlipped={isFlipped}>
					<div
						className='front card'
						onClick={() => handleClick()}
					>
						<div className='overflow-hidden'>
							<div className='flex flex-col justify-center rounded-t-[18px] py-5  items-center bg-gradient-to-br from-[#484848] to-[#282828] gap-5'>
								<img
									src={githubInfo.avatar_url}
									className='imgz'
								></img>

								<div className='text-white text-center font-semibold'>
									<div className='text-white'>{githubInfo.name}</div>
									<div className='text-xs text-[#929292]'>
										{githubInfo.login}
									</div>
								</div>
							</div>
						</div>
						<div className='flex justify-center mt-14 items-center gap-5'>
							<div className='text-center'>
								<div className='text-[#605f5f] text-sm'>Followers</div>
								<div className='font-bold '>{githubInfo.followers}</div>
							</div>
							<div className='text-center'>
								<div className='text-[#605f5f] text-sm'>Following</div>
								<div className='font-bold'>{githubInfo.following}</div>
							</div>
							<div className='text-center'>
								<div className='text-[#605f5f] text-sm'>Repositories</div>
								<div className='font-bold'>{githubInfo.public_repos}</div>
							</div>
						</div>
					</div>

					<div
						className='back card'
						onClick={() => handleClick()}
					>
						<div className='flex flex-col justify-center rounded-t-[18px] py-5  items-center bg-gradient-to-br from-[#484848]  to-[#282828] gap-5'>
							<div className='text-white text-center font-semibold'>
								<div className='text-white'>{githubInfo.name}</div>
								<div className='text-xs text-[#929292]'>{githubInfo.login}</div>
							</div>
						</div>
						<div className='p-2'>
							{githubInfo.repos?.map((repo) => {
								return (
									<div
										key={repo.id}
										className='border-b-[3px] flex flex-col pt-2 pb-1	 gap-2 justify-center min-h-[60px] border-blue-200 last-of-type:border-b-0'
									>
										<a
											className='text-blue-700 font-bold text-xl'
											href={repo.html_url}
											target='_blank'
										>
											{repo.name}
										</a>
										<div className='line-clamp-2 text-sm text-[#524f4f]'>
											{repo.description ? repo.description : '--'}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</ReactCardFlip>
			) : null}
		</div>
	);
};

export default Github;
