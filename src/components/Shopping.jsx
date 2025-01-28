import { useLoaderData, useOutletContext } from "react-router-dom";
import { Button } from "./Button";
export const Shopping = () => {
	const { setCartItemsList } = useOutletContext();
	const products = useLoaderData();

	const handleAddToCart = (id) => {
		const newProduct = products.find((product) => product.id === id);
		if (!newProduct) return;
		setCartItemsList((prev) => {
			const productExists = prev.find(
				(product) => product.id === newProduct.id
			);
			if (productExists) {
				return prev.map((product) =>
					product.id === newProduct.id
						? {
								...product,
								quantity: product.quantity + 1,
								totalPrice:
									((product.quantity + 1) * product.price * 100) / 100,
						  }
						: product
				);
			}
			return [
				...prev,
				{ ...newProduct, quantity: 1, totalPrice: newProduct.price },
			];
		});
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
				Shop
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{products.map((product) => (
					<div
						key={product.id}
						className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col"
					>
						<img
							src={product.image}
							alt={product.title}
							className="h-48 w-full object-contain mb-4 rounded-lg"
						/>
						<h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
							{product.title}
						</h2>
						<p className="text-gray-600 mb-2">{product.category}</p>
						<p className="text-gray-800 font-bold text-xl mb-2">
							${product.price}
						</p>
						<div className="flex items-center justify-between text-sm text-gray-600 mb-4">
							<span>Rating: {product.rating.rate} ⭐</span>
							<span>({product.rating.count} reviews)</span>
						</div>

						<Button
							text="Add to Cart"
							classes="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
							onClick={() => {
								handleAddToCart(product.id);
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export const getAllProductsLoader = async () => {
	const products = await fetch("https://fakestoreapi.com/products");
	return products.json();
};
