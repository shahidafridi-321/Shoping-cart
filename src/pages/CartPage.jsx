import React from "react";
import { Navbar } from "../components/Navbar";
import { Cart } from "../components/Cart";

export const CartPage = () => {
	return (
		<div className="flex flex-col">
			<header>
				<Navbar />
			</header>
			<main>
				<Cart />
			</main>
		</div>
	);
};
