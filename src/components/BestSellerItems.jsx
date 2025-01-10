import React from "react";
import { Button } from "./Button";

export const BestSellerItems = ({ items, setCartItemsList }) => {
	const handleClick = (e) => {
		const newItem = items.find((item) => item.id == e.target.id);
		if (!newItem) return;

		setCartItemsList((prev) => {
			const itemExists = prev.find((item) => item.id === newItem.id);

			if (itemExists) {
				return prev.map((item) =>
					item.id === newItem.id
						? {
								...item,
								quantity: item.quantity + 1,
								totalPrice: ((item.quantity + 1) * item.price * 100) / 100,
						  }
						: item
				);
			}
			return [...prev, { ...newItem, quantity: 1, totalPrice: newItem.price }];
		});
	};

	return (
		<div className="flex flex-col items-center md:grid md:grid-cols-4 gap-6 py-10 px-6 bg-gray-100">
			{items.map((item) => (
				<div
					key={item.id}
					className="flex flex-col space-y-4 w-[90%] md:w-full justify-center items-start bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
				>
					<div className="w-full h-48">
						<img
							src={item.image}
							alt={item.title}
							className="w-full h-full object-cover rounded-md"
						/>
					</div>
					<h3
						className="text-lg font-bold text-gray-800 truncate w-full"
						title={item.title}
					>
						{item.title}
					</h3>
					<p className="text-sm text-gray-600 line-clamp-2">
						{item.description}
					</p>
					<p className="text-md font-semibold text-blue-700">
						Price: ${item.price}
					</p>
					<Button
						onClick={handleClick}
						text="Add to Cart"
						classes="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
						id={item.id}
					/>
				</div>
			))}
		</div>
	);
};
