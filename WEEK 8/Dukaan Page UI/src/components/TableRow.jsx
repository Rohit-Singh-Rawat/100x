import React from 'react';
import TableData from './TableData';
const TableRow = ({ transaction }) => {
	const { orderId, status, transactionId, refundDate, orderAmount } =
		transaction;
	return (
		<tr className='relative text-sm '>
			<TableData
				data={orderId}
				type={'OrderId'}
			></TableData>
			<TableData
				data={
					<>
						<span
							className={`h-[10px] w-[10px] rounded-full ${
								status == 'Successful' ? 'bg-green-500' : 'bg-[#999999]'
							}`}
						></span>
						{status}
					</>
				}
				type={'Status'}
			></TableData>
			<TableData
				data={transactionId}
				type={'TransactionId'}
			></TableData>
			<TableData
				data={refundDate}
				type={'RefundDate'}
			></TableData>
			<TableData
				data={orderAmount}
				type={'OrderAmount'}
			></TableData>
			<span className='absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[2px] bottom-0 left-[10px]'></span>
		</tr>
	);
};

export default TableRow;
