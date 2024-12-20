import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { NavBarItem } from "./NavBarItem";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navBarItemsClassess =
		"text-gray-100 hover:border-b-2 border-gray-200 font-bold text-sm px-2 py-1  transition duration-300";

	const links = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Shop",
			link: "/shop",
		},
		{
			title: "Cart",
			link: "/cart",
		},
	];

	return (
		<nav className="bg-gray-700 text-white sticky top-0 left-0 w-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex flex-row w-full justify-between">
						<div className="text-xl font-bold">ShopShop</div>
						<div className="hidden md:block">
							<NavBarItem
								links={links}
								classes="flex gap-5 ml-10 items-baseline space-x-2"
								itemsStyles={navBarItemsClassess}
							/>
						</div>
						<div className="md:hidden">
							<button
								className="fill-gray-100"
								onClick={() => setIsOpen(!isOpen)}
							>
								<GiHamburgerMenu />
							</button>
						</div>
					</div>
				</div>
			</div>
			{isOpen && (
				<NavBarItem
					links={links}
					classes="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2 transition-all duration-500"
					itemsStyles={navBarItemsClassess}
				/>
			)}
		</nav>
	);
};
