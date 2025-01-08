import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
const arr = [2, "shghahs", 3, 2, 1, 1, 3, 1, 3];

export const MainLayout = () => {
	const [cartItemsList, setCartItemsList] = useState(arr);
	return (
		<div className="flex flex-col">
			<header>
				<Navbar numberOfItemsInCart={cartItemsList.length} />
			</header>
			<main className="w-full bg-indigo-300">
				<Outlet context={{ cartItemsList, setCartItemsList }} />
			</main>
			<footer className="w-full bg-dark py-5">
				<Footer />
			</footer>
		</div>
	);
};
