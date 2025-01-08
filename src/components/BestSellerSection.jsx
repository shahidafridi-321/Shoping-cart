import React, { useEffect, useState } from "react";
import { BestSellerItems } from "./BestSellerItems";

export const BestSellerSection = ({ cartItemsList, setCartItemsList }) => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const getItems = async () => {
			const response = await fetch("https://fakestoreapi.com/products?limit=4");
			const items = await response.json();
			setItems([].concat(items));
		};
		getItems();
	}, []);

	return (
		<div className="bg-gray-300 mx-auto py-10 text-center">
			<h2 className="text-2xl font-semibold">Bestsellers</h2>
			<BestSellerItems
				items={items}
				cartItemsList={cartItemsList}
				setCartItemsList={setCartItemsList}
			/>
		</div>
	);
};
