import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import heroImage from "../../public/hero-img.jpg";
export const Hero = () => {
	return (
		<div id="hero">
			<div className="flex bg-stone-800 flex-col space-y-3  px-16 pt-10 pb-10  md:flex-row md:space-x-6 items-center  justify-between">
				<div className="flex flex-col space-y-3 text-gray-200">
					<h1 className="text-2xl md:text-5xl  font-serif font-thin">
						Master Your Look, Own Your Style.
					</h1>
					<h2 className="text-xl font-sans md:text-2xl text-wrap">
						Premium beard care products and grooming essentials designed for the
						modern man. Stay sharp, stay confident.
					</h2>
					<div className="flex space-x-3">
						<Link to="/shop">
							<Button
								text="Shop Now "
								classes="border border-pink-700 hover:text-white hover:bg-pink-700"
							/>
						</Link>
						<Link to="/">
							<Button
								text="Learn More"
								classes="hidden md:block border border-pink-700 hover:text-white hover:bg-pink-700"
							/>
						</Link>
					</div>
				</div>
				<div className="w-3/2  flex justify-start">
					<img
						src={heroImage}
						alt="Hero Image"
						className="w-full max-w-sm lg:max-w-md  object-contain rounded-lg shadow-lg"
					/>
				</div>
			</div>
			<div className="flex justify-center bg-neutral-900 text-center pt-10 pb-10">
				<div className="flex flex-col space-y-3 max-w-2xl">
					<h2 className="text-gray-200 text-3xl font-semibold">
						Tame the Beast in Your Beard
					</h2>
					<h3 className="text-orange-700 text-xl font-semibold">
						WITH ALPHA MOON ORGANICS
					</h3>
					<p className="text-gray-300">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Perferendis dolorem at ea quasi veritatis assumenda modi nesciunt
						dolor! Exercitationem, eos autem amet itaque praesentium dignissimos
						saepe pariatur quaerat velit ex officia, repellendus non est qui
						iste dolor impedit eum voluptatem laboriosam vitae sit. Quidem atque
						quasi dignissimos. Veritatis, perspiciatis inventore.
					</p>
				</div>
			</div>
		</div>
	);
};
