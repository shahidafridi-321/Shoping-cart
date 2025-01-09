import { BestSellerSection } from "./BestSellerSection";
import { Hero } from "./Hero";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
	const { items, setCartItemsList } = useOutletContext();

	return (
		<div className="w-full mx-auto">
			<Hero />
			<BestSellerSection setCartItemsList={setCartItemsList} data={items} />
		</div>
	);
};
