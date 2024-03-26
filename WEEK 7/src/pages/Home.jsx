import React from 'react'
import { Link } from 'react-router-dom';

const home = () => {

  return (
		<div className='min-h-[100vh] flex flex-col gap-28 justify-center items-center py-5 bg-black '>
			<h1 className='text-white  text-5xl font-semibold  text-center font-sans'>
				React Components
			</h1>
			<div className='grid  grid-cols-3 gap-28   text-white  p-10 '>
				<Link
					className='text-white text-2xl duration-200 transition-all  ease-in hover:-translate-y-4 hover:-translate-x-4 translate-y-0 font-semibold bg-gradient-to-r hover:shadow-[16px_16px_rgba(255,255,255,0.75)] from-[#FF5AC4] via-[#FF7E88] to-[#FFA23A] p-7 px-10   '
					to={'/BackgroundColorChanger'}
				>
					Background Color Changer
				</Link>

				<Link
					className='text-white text-2xl duration-200 transition-all  ease-in hover:-translate-y-4 hover:-translate-x-4 translate-y-0 font-semibold bg-gradient-to-r hover:shadow-[16px_16px_rgba(255,255,255,0.75)] from-[#FF5AC4] via-[#FF7E88] to-[#FFA23A] p-7 px-10   '
					to={'/BirthDayCard'}
				>
					BirthDay Card
				</Link>

				<Link
					className='text-white text-2xl duration-200 transition-all  ease-in hover:-translate-y-4 hover:-translate-x-4 translate-y-0 font-semibold bg-gradient-to-r hover:shadow-[16px_16px_rgba(255,255,255,0.75)] from-[#FF5AC4] via-[#FF7E88] to-[#FFA23A] p-7 px-10   '
					to={'/GithubPage'}
				>
					Github-Page
				</Link>

				<Link
					className='text-white text-2xl duration-200 transition-all  ease-in hover:-translate-y-4 hover:-translate-x-4 translate-y-0 font-semibold bg-gradient-to-r hover:shadow-[16px_16px_rgba(255,255,255,0.75)] from-[#FF5AC4] via-[#FF7E88] to-[#FFA23A] p-7 px-10   '
					to={'/OTPLogin'}
				>
					OTP Login
				</Link>

				<Link
					className='text-white text-2xl duration-200 transition-all  ease-in hover:-translate-y-4 hover:-translate-x-4 translate-y-0 font-semibold bg-gradient-to-r hover:shadow-[16px_16px_rgba(255,255,255,0.75)] from-[#FF5AC4] via-[#FF7E88] to-[#FFA23A] p-7 px-10   '
					to={'/ParaGenerator'}
				>
					Para Generator
				</Link>

				<Link
					className='text-white text-2xl duration-200 transition-all  ease-in hover:-translate-y-4 hover:-translate-x-4 translate-y-0 font-semibold bg-gradient-to-r hover:shadow-[16px_16px_rgba(255,255,255,0.75)] from-[#FF5AC4] via-[#FF7E88] to-[#FFA23A] p-7 px-10   '
					to={'/Profile'}
				>
					Profile
				</Link>
			</div>
			<a target='_blank' href='https://github.com/Rohit-Singh-Rawat/100x/tree/main/WEEK%207' className='text-white gap-5 flex justify-center items-center text-2xl font-semibold'>
                Source Code :
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					id='github'
					className='w-10 h-10'
				>
					<path
						fill='#303c42'
						d='M22.171 7.326c.148-.988.048-3.528-.864-5.999a.503.503 0 0 0-.528-.323c-.096.011-2.349.302-5.733 2.751-.735-.177-1.825-.276-3.046-.276s-2.31.1-3.047.276c-3.385-2.45-5.638-2.74-5.734-2.751a.506.506 0 0 0-.528.323c-.912 2.471-1.011 5.011-.863 5.999C.599 8.846 0 10.597 0 12.669c0 6.661 3.492 10.329 9.833 10.329L12 23l2.166-.002c6.341 0 9.834-3.668 9.834-10.329 0-2.072-.599-3.823-1.829-5.343z'
					></path>
					<path
						fill='#5c6671'
						d='M14.166 21.998 12 22l-2.167-.002C5.804 21.998 1 20.379 1 12.669c0-1.938.555-3.491 1.748-4.886a.516.516 0 0 0 .088-.5c-.116-.333-.161-2.742.652-5.205.765.193 2.608.808 5.065 2.624.127.093.29.123.44.077.63-.188 1.754-.3 3.007-.3 1.254 0 2.378.112 3.006.299a.502.502 0 0 0 .44-.077c2.456-1.815 4.299-2.43 5.064-2.623.813 2.463.769 4.872.653 5.205a.499.499 0 0 0 .088.501C22.444 9.179 23 10.731 23 12.669c0 7.71-4.804 9.329-8.834 9.329z'
					></path>
					<path
						fill='#fff'
						d='M1.75 13.419c0-1.938.555-3.491 1.748-4.886a.516.516 0 0 0 .088-.5c-.116-.333-.161-2.742.652-5.205.765.193 2.608.808 5.065 2.624.127.093.29.123.44.077.629-.188 1.753-.299 3.007-.299 1.254 0 2.378.112 3.006.299a.502.502 0 0 0 .44-.077c2.039-1.507 3.646-2.181 4.574-2.479a13.35 13.35 0 0 0-.26-.894c-.765.193-2.608.808-5.064 2.623a.503.503 0 0 1-.44.077c-.628-.188-1.752-.3-3.006-.3-1.253 0-2.377.112-3.007.299a.499.499 0 0 1-.44-.077c-2.457-1.815-4.3-2.43-5.065-2.624-.813 2.464-.768 4.873-.652 5.207a.518.518 0 0 1-.088.5C1.555 9.179 1 10.731 1 12.669c0 3.762 1.148 6.067 2.787 7.448-1.226-1.421-2.037-3.544-2.037-6.698z'
						opacity='.2'
					></path>
					<path
						fill='#303c42'
						d='M14.318 10.103c-.736.058-1.498.117-2.282.117h-.071c-.785 0-1.546-.06-2.282-.117-2.019-.157-3.925-.306-5.22 1.006C3.492 12.095 3 13.325 3 14.762 3 20.518 7.429 21 12.036 21 16.571 21 21 20.518 21 14.762c0-1.438-.492-2.667-1.463-3.654-1.294-1.311-3.201-1.163-5.219-1.005z'
					></path>
					<path
						fill='#d9cfcc'
						d='M11.964 20C6.799 20 4 19.165 4 14.762c0-1.166.396-2.159 1.175-2.952.631-.64 1.501-.812 2.566-.812.567 0 1.191.049 1.863.101.755.06 1.534.115 2.375.119.875.019 1.655-.06 2.417-.119 1.935-.149 3.461-.27 4.428.71.78.794 1.176 1.787 1.176 2.953C20 19.165 17.201 20 11.964 20z'
					></path>
					<path
						d='M5.175 12.56c.631-.64 1.501-.812 2.566-.812.567 0 1.191.049 1.863.101.755.06 1.534.115 2.375.119.875.019 1.655-.06 2.417-.119 1.935-.149 3.461-.27 4.428.71.724.736 1.102 1.652 1.155 2.711.009-.166.021-.329.021-.508 0-1.166-.396-2.159-1.176-2.952-.967-.979-2.493-.859-4.428-.71-.762.059-1.541.138-2.417.119a30.774 30.774 0 0 1-2.375-.119c-.672-.052-1.295-.101-1.863-.101-1.065 0-1.935.171-2.566.812C4.396 12.603 4 13.596 4 14.762c0 .178.012.342.021.509.053-1.06.43-1.975 1.154-2.711z'
						opacity='.1'
					></path>
					<path
						fill='#303c42'
						d='M8 12c-1.14 0-2 1.505-2 3.5S6.86 19 8 19s2-1.505 2-3.5S9.14 12 8 12z'
					></path>
					<path
						fill='#6d4c41'
						d='M8 18c-.408 0-1-.974-1-2.5S7.592 13 8 13s1 .974 1 2.5S8.408 18 8 18z'
					></path>
					<path
						fill='#303c42'
						d='M16 12c-1.14 0-2 1.505-2 3.5s.86 3.5 2 3.5 2-1.505 2-3.5-.86-3.5-2-3.5z'
					></path>
					<path
						fill='#6d4c41'
						d='M16 18c-.408 0-1-.974-1-2.5s.592-2.5 1-2.5 1 .974 1 2.5-.592 2.5-1 2.5z'
					></path>
					<circle
						cx='7.909'
						cy='14.482'
						r='.446'
						fill='#a1887f'
					></circle>
					<circle
						cx='15.909'
						cy='14.482'
						r='.446'
						fill='#a1887f'
					></circle>
					<linearGradient
						id='a'
						x1='10.768'
						x2='18.633'
						y1='13.86'
						y2='21.724'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0'
							stop-opacity='.1'
						></stop>
						<stop
							offset='1'
							stop-opacity='0'
						></stop>
					</linearGradient>
					<path
						fill='url(#a)'
						d='m20 11.65-.017.007c.663.884 1.017 1.919 1.017 3.105C21 20.518 16.571 21 12.036 21c-2.666 0-5.266-.169-6.989-1.42l2.142 2.142c.881.193 1.779.275 2.644.275L12 22l2.166-.002c3.679 0 7.991-1.365 8.716-7.466L20 11.65z'
					></path>
					<linearGradient
						id='b'
						x1='4.004'
						x2='4.047'
						y1='18.529'
						y2='18.573'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0'
							stop-opacity='.1'
						></stop>
						<stop
							offset='1'
							stop-opacity='0'
						></stop>
					</linearGradient>
					<path
						fill='url(#b)'
						d='M4.011 18.528 4 18.533l.043.043-.032-.048z'
					></path>
					<linearGradient
						id='c'
						x1='.617'
						x2='23.69'
						y1='5.771'
						y2='16.53'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0'
							stop-color='#fff'
							stop-opacity='.2'
						></stop>
						<stop
							offset='1'
							stop-color='#fff'
							stop-opacity='0'
						></stop>
					</linearGradient>
					<path
						fill='url(#c)'
						d='M22.171 7.326c.148-.988.048-3.528-.864-5.999a.503.503 0 0 0-.528-.323c-.096.011-2.349.302-5.733 2.751-.735-.177-1.825-.276-3.046-.276s-2.31.1-3.047.276c-3.385-2.45-5.638-2.74-5.734-2.751a.506.506 0 0 0-.528.323c-.912 2.471-1.011 5.011-.863 5.999C.599 8.846 0 10.597 0 12.669c0 6.661 3.492 10.329 9.833 10.329L12 23l2.166-.002c6.341 0 9.834-3.668 9.834-10.329 0-2.072-.599-3.823-1.829-5.343z'
					></path>
				</svg>
			</a>
		</div>
	);
}

export default home
