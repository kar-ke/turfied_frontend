import React from 'react'

const Button = ({ text, customStyles }) => {
	return (
		<div>
			<button className={`${customStyles} px-4 py-2 rounded-[5px]`}>
				{text}
			</button>
		</div>
	);
};

export default Button