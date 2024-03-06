import React from 'react';



const TableData = ({ data, type }) => {
    const prop = {
			Status: 'flex items-center  text-[#1A181E]',
			OrderAmount: 'text-right text-[#1A181E]',
			OrderId: 'text-[#146EB4]',
			TransactionId: 'text-[#4D4D4D]',
			RefundDate: 'text-[#4D4D4D]',
		};
	return (
		<td
			className={`px-3 py-[10px] whitespace-nowrap gap-[6px]  ${prop[type]}`}
		>
			{data}
		</td>
	);
};

export default TableData;
