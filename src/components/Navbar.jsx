import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const buttonClassess =
		"text-gray-100 font-bold text-sm px-2 py-1  hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300";

	const ul = (
		<>
			<li>
				<a className={buttonClassess} href="#">
					Home
				</a>
			</li>
			<li>
				<a className={buttonClassess} href="#">
					Shop
				</a>
			</li>
			<li>
				<a className={buttonClassess} href="#">
					Cart
				</a>
			</li>
		</>
	);

	return (
		<nav className="bg-gray-800 text-white fixed w-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex flex-row w-full justify-between">
						<div className="text-xl font-bold">ShopShop</div>
						<div className="hidden md:block">
							<ul className="flex ml-10 items-baseline space-x-2">{ul}</ul>
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
				<ul className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
					{ul}
				</ul>
			)}
		</nav>
	);
};
