import React, { useEffect, useState } from "react";
import { BestSellerItems } from "./BestSellerItems";

export const BestSellerSection = ({
	data,
	cartItemsList,
	setCartItemsList,
}) => {
	return (
		<div className="bg-gray-300 mx-auto py-10 text-center">
			<h2 className="text-2xl font-semibold">Bestsellers</h2>
			<BestSellerItems
				items={data}
				cartItemsList={cartItemsList}
				setCartItemsList={setCartItemsList}
			/>
		</div>
	);
};
