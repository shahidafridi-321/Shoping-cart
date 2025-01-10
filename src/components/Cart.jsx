import React from "react";
import { useOutletContext } from "react-router-dom";

export const Cart = () => {
	const { cartItemsList, setCartItemsList } = useOutletContext();

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen p-6">
			<div className="md:col-span-2 flex flex-col gap-6">
				<h2 className="text-3xl font-semibold text-gray-800">Your Cart</h2>
				{cartItemsList.length > 0 ? (
					cartItemsList.map((item) => (
						<div
							key={item.id}
							className="flex items-center gap-6 p-4 bg-white border border-gray-200 shadow-lg rounded-lg"
						>
							<img
								src={item.image}
								alt={item.title}
								className="w-24 h-24 object-contain rounded-md"
							/>
							<div className="flex-grow">
								<p className="text-lg font-semibold text-gray-900">
									{item.title}
								</p>
								<p className="text-sm text-gray-500">Price: ${item.price}</p>
								<p className="text-sm text-gray-500">
									Quantity: {item.quantity}
								</p>
								<p className="text-sm font-semibold text-gray-700">
									Total: ${item.totalPrice}
								</p>
							</div>
							<button
								onClick={() =>
									setCartItemsList((prev) =>
										prev.filter((cartItem) => cartItem.id !== item.id)
									)
								}
								className="px-4 py-2 text-sm font-semibold text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition duration-200"
							>
								Remove
							</button>
						</div>
					))
				) : (
					<p className="text-lg text-gray-500">Your cart is currently empty.</p>
				)}
			</div>

			<div className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>
				<p className="text-lg text-gray-700 mb-2">
					Total Items:{" "}
					<span className="font-semibold">{cartItemsList.length}</span>
				</p>
				<p className="text-lg text-gray-700 mb-4">
					Grand Total:{" "}
					<span className="font-semibold">
						$
						{cartItemsList
							.reduce((acc, item) => acc + item.totalPrice, 0)
							.toFixed(2)}
					</span>
				</p>
				<button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200">
					Proceed to Checkout
				</button>
			</div>
		</div>
	);
};
