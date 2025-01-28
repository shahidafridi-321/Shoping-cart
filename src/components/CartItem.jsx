import React from "react";
import { useLoaderData } from "react-router-dom";

export const CartItem = () => {
	const product = useLoaderData();

	return (
		<div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col items-center max-w-md mx-auto mt-10">
			<img
				src={product.image}
				alt={product.title}
				className="h-60 w-auto object-contain mb-6 rounded-lg"
			/>

			<h2 className="text-xl font-bold text-gray-900 mb-2 text-center truncate">
				{product.title}
			</h2>

			<p className="text-sm text-gray-500 italic mb-4">{product.category}</p>

			<p className="text-gray-800 font-extrabold text-2xl mb-4">
				${product.price.toFixed(2)}
			</p>

			<div className="flex items-center justify-between text-sm text-gray-600 w-full mb-4">
				<span className="flex items-center gap-1">
					Rating:{" "}
					<span className="text-yellow-500">⭐ {product.rating.rate}</span>
				</span>
				<span>({product.rating.count} reviews)</span>
			</div>

			<button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all">
				Add to Cart
			</button>
		</div>
	);
};

export const getCartItemLoader = async ({ params }) => {
	const { id } = params;
	const item = await fetch(`https://fakestoreapi.com/products/${id}`);
	return item.json();
};
