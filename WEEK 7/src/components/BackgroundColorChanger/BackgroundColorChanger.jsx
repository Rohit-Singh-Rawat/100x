import React, { useState } from 'react';
import './BackgroundColorChanger.css';

const BackgroundColorChanger = () => {
	const [color, setColor] = useState('white');
	function ChangeColor(e) {
		var style = new Option().style;
		style.color = e.target.value;
		if (style.color == e.target.value.toLowerCase()) {
			setColor(e.target.value);
		} else {
			style = null;
		}
	}
	return (
		<div
			className='background'
			style={{ background: color }}
		>
			<div id='color-picker'>
				<button 
					onClick={() => setColor('Red')}
					style={{ background: 'Red' }}
				>
					Red
				</button>
				<button
					onClick={() => setColor('Yellow')}
					style={{ background: 'Yellow' }}
				>
					Yellow
				</button>
				<button
					onClick={() => setColor('Black')}
					style={{ background: 'Black', color : 'White' }}
				>
					Black
				</button>
				<button
					onClick={() => setColor('Purple')}
					style={{ background: 'Purple' }}
				>
					Purple
				</button>
				<button
					onClick={() => setColor('Green')}
					style={{ background: 'Green' }}
				>
					Green
				</button>
				<button
					onClick={() => setColor('Blue')}
					style={{ background: 'Blue' }}
				>
					Blue
				</button>
				<button
					onClick={() => setColor('White')}
					style={{ background: 'White' }}
				>
					White
				</button>
				<input
					type='text'
					placeholder='Enter Any Color'
					onChange={ChangeColor}
                    autoFocus
				/>
			</div>
		</div>
	);
};

export default BackgroundColorChanger;
