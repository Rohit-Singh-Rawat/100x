import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [showLogin, setShowLogin] = useState(true);
	const [number, setNumber] = useState('');
	return (
		<div className='bg-[#020203] w-[100vw] h-[100vh] flex justify-center items-center'>
			<Link
				to={'/'}
				class='absolute top-10 left-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
			>
				<span class='relative text-2xl text-center font-semibold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
					⇚ Back
				</span>
			</Link>
			<div className='bg-[#16181F] w-[60%] h-[67%] rounded-2xl flex flex-col justify-start p-10 items-center'>
				<div>
					<div className='text-center flex flex-col gap-2'>
						<h1 className='text-4xl font-semibold text-teal-50'>
							Login to continue
						</h1>
						<h5 className='text-[#8f98b2] text-lg'>
							Enter your phone number to login
						</h5>
					</div>
				</div>
				{showLogin ? (
					<LoginComp
						number={number}
						setNumber={setNumber}
						onClick={() => setShowLogin(false)}
					></LoginComp>
				) : (
					<OtpDIVComp
						number={`+91${number}`}
						onClick={() => setShowLogin(true)}
					></OtpDIVComp>
				)}
			</div>
		</div>
	);
};
const LoginComp = ({ onClick, number, setNumber }) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div>
			<div className='flex m-32 justify-center  items-center gap-5'>
				<div className='border-[1px] p-3 px-3 text-[#4b5166] rounded-md border-[#4b5166]'>
					+91
				</div>
				<div className='relative '>
					<input
						type='number'
						className='relative text-white font-bold bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none border-2 rounded-md p-3 pl-3 focus:border-[#8f98b2] border-[#4b5166]'
						placeholder=''
						autoFocus
						id='number'
						max='9999999999'
						value={number}
						onChange={(e) => {
							if (e.target.value.length <= 10) {
								setNumber(e.target.value);
							}
						}}
						onFocus={() => setIsFocused(true)}
						onBlur={(e) => {
							if (e.target.value.length == 0) setIsFocused(false);
						}}
					/>
					<label
						htmlFor={'number'}
						className={` ${
							isFocused
								? 'text-sm -translate-y-[20px] text-[#8f98b2] font-semibold	'
								: 'text-lg  translate-y-[50%]'
						} text-[#4b5166] bottom-[50%]  left-[5%] absolute transition-all ease-in duration-200  px-1 bg-[#16181F]  leading-3 `}
					>
						Enter mobile number
					</label>
				</div>
			</div>
			<div className='flex justify-center  mt-10'>
				{number.length >= 10 ? (
					<button
						className='bg-gradient-to-r  hover:scale-105 transition duration-300 from-[#0959E4] to-[#062795] text-center py-2 px-16 rounded-md text-white font-semibold text-lg'
						onClick={onClick}
					>
						Get OTP {'>'}
					</button>
				) : null}
			</div>
		</div>
	);
};
const OtpDIVComp = ({ number, onClick }) => {
	const length = useRef(4);
	const [otp, setOtp] = useState([]);
	const [showMsg, setShowMsg] = useState('');
	return (
		<div className='flex flex-col m-14 gap-3'>
			<div
				className='cursor-pointer text-[#8f98b2]'
				onClick={onClick}
			>
				{'←'} Back
			</div>
			<div className='text-lg text-[#e1e6f0] font-semibold'>
				Enter OPT sent to {number}
			</div>
			<div className='flex flex-col justify-center items-center gap-16'>
				<div className='flex gap-2'>
					<OtpComp
						otp={otp}
						setOtp={setOtp}
						length={length.current}
					></OtpComp>
				</div>

				<div>
					{showMsg ? (
						<div className='text-center pb-3 text-green-700 text-lg'>{showMsg}</div>
					) : null}
					<button
						className={`bg-gradient-to-r  hover:scale-105 transition duration-300 from-[#0959E4] to-[#062795] text-center py-2 px-16 rounded-md text-white font-semibold text-lg ${
							otp.join('').length >= length.current
								? 'opacity-100'
								: 'opacity-30 pointer-events-none'
						}`}
						onClick={() => {
							if (otp.join('').length == length.current) {
								setShowMsg('You are logged in!!!');
							}
						}}
					>
						Continue {'>'}
					</button>
				</div>
			</div>
		</div>
	);
};

const OtpComp = ({ length, otp, setOtp }) => {
	const inputRef = useRef([]);
	useEffect(() => {
		setOtp(new Array(length).fill(''));
		if (inputRef.current[0]) inputRef.current[0].focus();
	}, []);
	const handleChange = (e, index) => {
		const value = e.target.value;
		if (isNaN(value)) return;
		const newOtp = [...otp];

		newOtp[index] = value.substring(value.length - 1);
		
		
		setOtp(newOtp);

		if (value.trim() == '' && index > 0 && inputRef.current[index - 1]) {
			inputRef.current[index - 1].focus();
		}

		if (
			!(value.trim() == '') &&
			index < length - 1 &&
			inputRef.current[index + 1]
		) {
			let i = index + 1;
			while (i != index) {
				

				console.log(i, index);
				if (inputRef.current[i].value.trim() == '') {
					
					inputRef.current[i].focus();
					break;
				} else {
					i++;
				}
				if (i > length - 1) {
					i = 0;
				}
				if (i == index){
					console.log('hi');
					inputRef.current[i+1].focus();
					break;
				}
			}
		}
	};
	const handleClick = (index) => {
		inputRef.current[index].setSelectionRange(1, 1);
	};
	return otp.map((value, index) => {
		return (
			<input
				value={value}
				key={index}
				ref={(input) => (inputRef.current[index] = input)}
				onChange={(e) => handleChange(e, index)}
				onClick={() => handleClick(index)}
				className='w-10 h-10 rounded-md  border-[0.8px] focus:border-[#8f98b2] text-white pl-4 border-[#4b5166] bg-transparent outline-none '
			></input>
		);
	});
};

export default Login;
