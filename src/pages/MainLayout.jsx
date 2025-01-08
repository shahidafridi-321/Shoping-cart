import React from "react";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
	return (
		<div className="flex flex-col">
			<header>
				<Navbar />
			</header>
			<main className="w-full bg-indigo-300">
				<Home />
			</main>
			<footer className="w-full bg-dark py-5">
				<Footer />
			</footer>
		</div>
	);
};
