import React from 'react'

const NavbarItem = ({img, text}) => {
  return (
		<a
			className={`flex px-4 py-2 gap-3 items-center  cursor-pointer text-[#D2D4D9] rounded-[4px] ${
				text == 'Payouts' ? 'bg-[#FFFFFF]/10' : ' '
			} hover:bg-[#FFFFFF]/10 `}
		>
			<div className=' relative w-[18px] h-[18px]'>
				<img
					src={img}
					alt={text}
					className='class="object-contain object-center"'
				/>
			</div>
			<p className='text-[14px] font-medium'>{text}</p>
		</a>
	);
}

export default NavbarItem