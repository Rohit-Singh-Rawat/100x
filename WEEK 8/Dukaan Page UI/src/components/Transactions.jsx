import React from 'react';
import { useState } from 'react';
import TableData from './TableData';
import TableRow from './TableRow';
import updown from "../assets/Img/updown.png"

const Transactions = () => {
  const [transactions, setTransactions] = useState(
		[
			{
				orderId: '#281209',
				status: 'Successful',
				transactionId: 'TRX123456',
				refundDate: 'Today, 8:45 PM',
				orderAmount: '₹1125.00',
			},
			{
				orderId: '#281210',
				status: 'Processing',
				transactionId: 'TRX789012',
				refundDate: 'Tomorrow, 10:00 AM',
				orderAmount: '₹950.50',
			},
			{
				orderId: '#281211',
				status: 'Successful',
				transactionId: 'TRX345678',
				refundDate: 'Yesterday, 3:30 PM',
				orderAmount: '₹750.00',
			},
			{
				orderId: '#281212',
				status: 'Successful',
				transactionId: 'TRX901234',
				refundDate: 'Today, 11:20 AM',
				orderAmount: '₹2000.00',
			},
			{
				orderId: '#281213',
				status: 'Processing',
				transactionId: 'TRX567890',
				refundDate: 'Tomorrow, 9:00 AM',
				orderAmount: '₹1800.00',
			},
			{
				orderId: '#281214',
				status: 'Processing',
				transactionId: 'TRX098765',
				refundDate: 'Yesterday, 2:00 PM',
				orderAmount: '₹500.00',
			},
			{
				orderId: '#281215',
				status: 'Successful',
				transactionId: 'TRX456789',
				refundDate: 'Today, 10:30 AM',
				orderAmount: '₹3000.00',
			},
			{
				orderId: '#281216',
				status: 'Processing',
				transactionId: 'TRX987654',
				refundDate: 'Tomorrow, 11:30 AM',
				orderAmount: '₹1200.00',
			},
			{
				orderId: '#281217',
				status: 'Processing',
				transactionId: 'TRX654321',
				refundDate: 'Yesterday, 4:00 PM',
				orderAmount: '₹900.00',
			},
			{
				orderId: '#281218',
				status: 'Successful',
				transactionId: 'TRX234567',
				refundDate: 'Today, 9:45 AM',
				orderAmount: '₹1500.00',
			},
		]
	);
	return (
		<section className='flex flex-col gap-6'>
			<div className='flex flex-col gap-6'>
				<h5 className='font-medium text-xl text-[#1A181E]'>
					Transactions | This Month
				</h5>
				<div className='flex gap-3'>
					<button className='bg-[#E6E6E6] px-4 py-1.5 flex items-center text-[#808080] rounded-full'>
						Payouts (22)
					</button>
					<button className='bg-[#146EB4] px-4 py-1.5 text-[#FFFFFF] rounded-full '>
						Refunds (6)
					</button>
				</div>
			</div>
			<div className='flex flex-col px-3 pt-3 pb-2 gap-3 rounded-[8px] bg-white'>
				<div className='flex justify-between items-center gap-3'>
					<div className='flex items-center gap-3 py-1.5 px-4 border border-[#D9D9D9] text-[#808080] w-full max-w-[300px]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2.5}
							stroke='currentColor'
							className='w-[18px] h-[20px]  text-lg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
							/>
						</svg>
						<input
							type='text'
							placeholder='Order ID or Transactions Id'
							className='w-full bg-transparent outline-none'
						/>
					</div>
					<div className='flex gap-3 items-center'>
						<button className='flex items-center  gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] text-[16px] rounded min-w-[75px]'>
							Sort
							<img
								src={updown}
								alt=''
							/>
						</button>
						<button className='flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='text-xl'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
								<polyline points='7 10 12 15 17 10'></polyline>
								<line
									x1='12'
									y1='15'
									x2='12'
									y2='3'
								></line>
							</svg>
						</button>
					</div>
				</div>
				<div className='overflow-x-auto'>
					<table className='min-w-full'>
						<colgroup>
							<col className='w-1/5' />
							<col className='w-1/5' />
							<col className='w-1/5' />
							<col className='w-1/5' />
							<col className='w-1/5' />
						</colgroup>
						<thead className='text-[#4D4D4D] '>
							<tr className='bg-[#F2F2F2]'>
								<td className='px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l'>
									Order Id
								</td>
								<td className='px-3 py-[10px] text-left text-sm font-medium tracking-wider'>
									Status
								</td>
								<td className='px-3 py-[10px] text-left text-sm font-medium tracking-wider '>
									Transaction ID
								</td>
								<td className='px-3 py-[10px] text-left text-sm font-medium tracking-wider '>
									Refund Date
								</td>
								<td className='px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r'>
									Order Amount
								</td>
							</tr>
						</thead>
						<tbody className='bg-white divide-[#E6E6E6]'>
							{transactions.map((transaction) => {
								return (
									<>
										<TableRow
											transaction={transaction}
											key={transaction.orderId}
										>
											{' '}
										</TableRow>
										
									</>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default Transactions;
