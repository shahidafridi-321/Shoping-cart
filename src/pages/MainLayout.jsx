import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";

export const MainLayout = () => {
	const [cartItemsList, setCartItemsList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const items = useLoaderData();

	useEffect(() => {
		if (items) {
			const timer = setTimeout(() => setIsLoading(false), 500);
			return () => clearTimeout(timer);
		}
	}, [items]);

	if (isLoading) {
		return (
			<div className="flex flex-col min-h-screen">
				<header className="sticky top-0 left-0 z-10">
					<Navbar numberOfItemsInCart={cartItemsList.length} />
				</header>
				<main className="flex-grow bg-indigo-300">
					<div className="flex items-center justify-center h-screen">
						<div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
					</div>
				</main>
				<footer className="w-full bg-dark py-5">
					<Footer />
				</footer>
			</div>
		);
	}

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
