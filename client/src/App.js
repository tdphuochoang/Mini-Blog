import "./App.scss";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/post/:id",
				element: <Single />,
			},
			{
				path: "/write",
				element: <Write />,
			},
		],
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/write",
		element: <Write />,
	},
	{
		path: "/single",
		element: <Single />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

function App() {
	return (
		<div className="App">
			<div className="container">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
