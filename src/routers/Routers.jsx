import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../pages/MainLayout";
import { Home } from "../components/Home";
import { Shopping } from "../components/Shopping";
import { Cart } from "../components/Cart";

export const routers = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/shop",
				element: <Shopping />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
]);
