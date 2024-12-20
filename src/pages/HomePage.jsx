import React from "react";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";

export const HomePage = () => {
	return (
		<div className="flex flex-col">
			<header>
				<Navbar />
			</header>
			<main>
				<Home />
			</main>
		</div>
	);
};