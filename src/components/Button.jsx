import React from "react";

export const Button = ({ text = "Button", classes = "" }) => {
	return (
		<button
			className={`${classes}  px-6 py-2 font-bold  rounded-lg transition-all duration-300`}
		>
			{text}
		</button>
	);
};