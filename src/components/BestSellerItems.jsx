import React, { useState } from "react";
import { Button } from "./Button";

export const BestSellerItems = ({ items }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const handleClick = (e) => {
		const item = items.find((item) => item.id == e.target.id);
		setTotalPrice((prev) => prev + item.price);
	};
	console.log(totalPrice);

	return (
		<div className="flex flex-col items-center  md:grid md:grid-cols-4  gap-4 py-10 px-4">
			{items.map((item) => (
				<div
					key={item.id}
					className="flex flex-col space-y-3 w-[80%] md:w-full justify-center items-start bg-white p-4 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
				>
					<div className="w-full h-48 md:w-[100%]">
						<img
							src={item.image}
							alt={item.title}
							className="w-full h-full object-cover rounded-sm shadow-2xl"
						/>
					</div>
					<p className="text-lg font-semibold text-gray-800">{item.title}</p>
					<p className="text-md text-gray-600">Price: ${item.price}</p>
					<Button
						onClick={handleClick}
						text="Add to cart"
						classes="bg-blue-500 text-white hover:bg-blue-600"
						id={item.id}
					/>
				</div>
			))}
		</div>
	);
};
