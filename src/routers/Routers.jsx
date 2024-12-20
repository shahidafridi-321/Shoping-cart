import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ShoppingPage } from "../pages/ShoppingPage";
import { CartPage } from "../pages/CartPage";

export const routers = createBrowserRouter([
	{
		index: true,
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/shop",
		element: <ShoppingPage />,
	},
	{
		path: "/cart",
		element: <CartPage />,
	},
]);
