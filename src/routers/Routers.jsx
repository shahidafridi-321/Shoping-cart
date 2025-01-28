import { createBrowserRouter } from "react-router-dom";
import { getItemsLoader, MainLayout } from "../pages/MainLayout";
import { Home } from "../components/Home";
import { getAllProductsLoader, Shopping } from "../components/Shopping";
import { Cart } from "../components/Cart";
import { CartItem, getCartItemLoader } from "../components/CartItem";

export const routers = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		loader: getItemsLoader,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/shop",
				element: <Shopping />,
				loader: getAllProductsLoader,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/shop/:id",
				element: <CartItem />,
				loader: getCartItemLoader,
			},
		],
	},
]);
