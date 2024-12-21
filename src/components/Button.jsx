import React from "react";

export const Button = ({
	text = "Button",
	classes = "",
	onClick = () => {},
	id = "",
}) => {
	return (
		<button
			className={`${classes}  px-6 py-2 font-bold  rounded-lg transition-all duration-300`}
			onClick={onClick}
			id={id}
		>
			{text}
		</button>
	);
};
