import { BestSellerSection } from "./BestSellerSection";
import { Hero } from "./Hero";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
	const { cartItemsList, setCartItemsList } = useOutletContext();

	return (
		<div className="w-full mx-auto">
			<Hero />
			<BestSellerSection
				cartItemsList={cartItemsList}
				setCartItemsList={setCartItemsList}
			/>
		</div>
	);
};
