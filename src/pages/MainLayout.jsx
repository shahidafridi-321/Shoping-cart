import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";

export const MainLayout = () => {
	const [cartItemsList, setCartItemsList] = useState([]);
	const items = useLoaderData();

	return (
		<div className="flex flex-col min-h-screen">
			<header className="sticky top-0 left-0 z-10">
				<Navbar numberOfItemsInCart={cartItemsList.length} />
			</header>
			<main className="flex-grow bg-indigo-300">
				<Outlet context={{ items, cartItemsList, setCartItemsList }} />
			</main>
			<footer className="w-full bg-dark py-5">
				<Footer />
			</footer>
		</div>
	);
};

export const getItemsLoader = async () => {
	const items = await fetch("https://fakestoreapi.com/products?limit=8");
	return items.json();
};
