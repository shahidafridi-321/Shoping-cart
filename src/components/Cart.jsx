import React from "react";
import { useOutletContext } from "react-router-dom";

export const Cart = () => {
	const { cartItemsList, setCartItemsList } = useOutletContext();
	return (
		<div className="grid grid-cols-1 md:grid-cols-3  h-screen ">
			<div className="md:col-span-2 bg-green-600 order-1 md:order-[-1]">
				{cartItemsList.map((item) => (
					<div key={item.id}>
						<p>{item.title}</p>
						<p>{item.price}</p>
						<p>{item.quantity}</p>
						<p>{item.totalPrice}</p>
					</div>
				))}
			</div>
			<div className="bg-red-500 "></div>
		</div>
	);
};
