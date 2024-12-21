import { BestSellerSection } from "./BestSellerSection";
import { Hero } from "./Hero";

export const Home = () => {
	return (
		<div className="w-full mx-auto">
			<Hero />
			<BestSellerSection />
		</div>
	);
};
