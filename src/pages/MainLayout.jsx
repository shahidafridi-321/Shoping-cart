import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
	const [cartItemsList, setCartItemsList] = useState([]);
	const [items, setItems] = useState([]);
	useEffect(() => {
		const getItems = async () => {
			const response = await fetch("https://fakestoreapi.com/products?limit=8");
			const items = await response.json();
			setItems(items);
		};
		getItems();
	}, []);
	return (
		<div className="flex flex-col">
			<header>
				<Navbar numberOfItemsInCart={cartItemsList.length} />
			</header>
			<main className="w-full bg-indigo-300">
				<Outlet context={{ items, cartItemsList, setCartItemsList }} />
			</main>
			<footer className="w-full bg-dark py-5">
				<Footer />
			</footer>
		</div>
	);
};
