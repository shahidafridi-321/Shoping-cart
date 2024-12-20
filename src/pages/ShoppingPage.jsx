import React from "react";
import { Navbar } from "../components/Navbar";
import { Shopping } from "../components/Shopping";

export const ShoppingPage = () => {
	return (
		<div className="flex flex-col">
			<header>
				<Navbar />
			</header>
			<main>
				<Shopping />
			</main>
		</div>
	);
};
