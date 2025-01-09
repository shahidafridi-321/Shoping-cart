import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
	const [cartItemsList, setCartItemsList] = useState([]);
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
