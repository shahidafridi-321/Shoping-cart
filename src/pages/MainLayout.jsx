import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
	const [cartItemsList, setCartItemsList] = useState([]);
	const [items, setItems] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			const response = await fetch("https://fakestoreapi.com/products?limit=8");
			const items = await response.json();
			setItems(items);
		};
		getItems();
	}, []);

	useEffect(() => {
		const getAllProducts = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const products = await response.json();
			setProducts(products);
		};
		getAllProducts();
	}, []);

	return (
		<div className="flex flex-col min-h-screen">
			<header className="sticky top-0 left-0 z-10">
				<Navbar numberOfItemsInCart={cartItemsList.length} />
			</header>
			<main className="flex-grow bg-indigo-300">
				<Outlet
					context={{ items, cartItemsList, setCartItemsList, products }}
				/>
			</main>
			<footer className="w-full bg-dark py-5">
				<Footer />
			</footer>
		</div>
	);
};
