import { useState, useEffect } from 'react';
import './bar.css';

const Bars = ({ index, length, color, changeArray }) => {

	const colors = ['#3d5af1', '#ff304f', '#83e85a'];

	let barStyle = {
		background: colors[color],
		height: length,
		marginTop: 200 - length,
	};

	let textStyle = {
		position: 'relative',
		top: Math.floor(length / 2) - 10,
		width: length,
		left: -Math.floor(length / 2) + 11,
		background: 'transparent',
		border: 'none',
	};

	return (
		<div className='bar' style={barStyle}>
			<input
				type='number'
				style={textStyle}
				value={length}
				className='text'
			/>
		</div>
	);
};

export default Bars;
