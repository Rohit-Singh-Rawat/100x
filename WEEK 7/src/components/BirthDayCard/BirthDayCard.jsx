import React, { useState } from 'react';
import img1 from '../../assets/BaackgroundImgs/1.jpg';
import img2 from '../../assets/BaackgroundImgs/2.jpg';
import img3 from '../../assets/BaackgroundImgs/3.jpg';
import img4 from '../../assets/BaackgroundImgs/4.jpg';
import { Link } from 'react-router-dom';

const BirthDayCard = () => {
	const [name, setName] = useState('');
    const [showCards,setShowCards] = useState(false)
	const birthdayQuotes = [
		`On your special day, ${name}, may your heart be light, your smile bright, and your dreams take flight. Happy Birthday!`,
		`Wishing you, ${name}, a day filled with laughter, love, and all the wonderful things you deserve. Happy Birthday!`,
		`Another adventure-filled year awaits you, ${name}. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!`,
		`May your birthday be as bright as your smile and as lovely as your spirit, ${name}. Happy Birthday!`,
		`A birthday is a time for joy, celebration, and reflection. May you, ${name}, enjoy all three to the fullest today. Happy Birthday!`,
		`Count your blessings, not your years, ${name}. May your birthday be filled with joy and your year ahead with blessings. Happy Birthday!`,
		`Birthdays are nature's way of telling us to eat more cake! Enjoy every delicious moment of your special day, ${name}. Happy Birthday!`,
		`As you, ${name}, blow out the candles and make a wish, remember that you've already been granted the greatest gift of all—another year of life. Happy Birthday!`,
		`Today is the perfect day to celebrate you, ${name}! Wishing you all the happiness and success in the world. Happy Birthday!`,
		`Here's to another year of laughing until it hurts, dealing with silly mishaps, and making unforgettable memories, ${name}. Happy Birthday!`,
	];
	const cards = [
		{
			imgRef: img1,
			quote: birthdayQuotes[Math.floor(Math.random() * 10)],
		},
		{
			imgRef: img2,
			quote: birthdayQuotes[Math.floor(Math.random() * 10)],
		},
		{
			imgRef: img3,
			quote: birthdayQuotes[Math.floor(Math.random() * 10)],
		},
		{
			imgRef: img4,
			quote: birthdayQuotes[Math.floor(Math.random() * 10)],
		},
	];
	return (
		<div className='flex flex-col justify-center overflow-x-hidden  bg-black  min-h-[100vh] items-center'>
			<Link
				to={'/'}
				class='absolute top-10 left-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
			>
				<span class='relative text-2xl text-center font-semibold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
					⇚ Back
				</span>
			</Link>
			<div className='mt-[30vh] mb-[20vh] flex gap-10'>
				<input
					type='text'
					placeholder='Enter Your Name'
					onChange={(e) => {
						setShowCards(false);
						setName(e.target.value);
					}}
					className='border-white border-2 bg-transparent p-2 px-4 rounded-lg text-blue-500 outline-none focus:border-blue-500'
				/>
				<button
					onClick={() => {
						if (name.trim() != '') {
							setShowCards(true);
						}
					}}
					className='bg-transparent border-2 active:bg-blue-500 active:text-white active:border-white hover:border-blue-500 hover:text-blue-500 border-white text-white p-2 px-4 rounded-lg'
				>
					Generate
				</button>
			</div>
			{showCards ? (
				<div className='flex flex-col m-10 gap-32'>
					{cards.map((card, index) => {
						return (
							<Card
								key={index}
								imgRef={card.imgRef}
								quote={card.quote}
							></Card>
						);
					})}
				</div>
			) : null}
		</div>
	);
};

const Card = ({ imgRef, quote }) => {
	return (
		<div className='relative w-[720px] hover:drop-shadow-[1px_1px_10px_rgba(0,55,255,0.9)] drop-shadow-[1px_1px_20px_rgba(0,0,255,0.5)]  h-[405px]'>
			<img
				src={imgRef}
				alt='img'
				className='w-full h-full rounded-xl'
			/>
			<h1 className='absolute  shadow-blue-500 text-shadow-sm drop-shadow-md w-[full] px-8 z-40 top-[0%] font-semibold items-center h-full justify-center flex text-center text-white text-3xl '>
				{quote}
			</h1>
		</div>
	);
};

export default BirthDayCard;
