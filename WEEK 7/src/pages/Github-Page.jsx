import React from 'react'
import Github from '../components/github-page/Github'
import { Link } from 'react-router-dom'
const GithubPage = () => {
  return (
		<div className='flex justify-center white min-h-[100vh] items-center'>
			<Link
				to={'/'}
				class='absolute top-10 left-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
			>
				<span class='relative text-2xl text-center font-semibold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
					⇚ Back
				</span>
			</Link>
			<Github></Github>
		</div>
	);
}

export default GithubPage
