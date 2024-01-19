import React from "react";

const HoverButton = ({ text, animate }) => {
	return (
		<>
			<div
				className={`${
					animate ? "flex" : "hidden"
				} absolute h-11 w-[100px] ml-1 bg-black rounded-sm -translate-x-1 `}></div>
			<button
				type="button"
				className="text-xl font-semibold outline outline-1 rounded-sm bg-[#8ba889] hover:shadow-lg shadow-black px-4 py-2 w-[100px] h-11 cursor-pointer transition-transform transform duration-300 hover:-translate-x-2 hover:-translate-y-2 ">
				{text}
			</button>
		</>
	);
};

export default HoverButton;
