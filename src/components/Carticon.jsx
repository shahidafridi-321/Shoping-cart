import React from "react";
import { BsCart } from "react-icons/bs";

export const Carticon = ({ value = 0 }) => {
	return (
		<div className="relative">
			<BsCart className="text-2xl " />
			<p className="text-[14px] absolute top-[-8px] right-[-15px] py-0 px-1 rounded-2xl font-bold  bg-red-600 text-white ">
				{value}
			</p>
		</div>
	);
};
