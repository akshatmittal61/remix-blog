import { Outlet, LiveReload, Links } from "@remix-run/react";
import { Link } from "react-router-dom";
import globalStyles from "./styles/globals.css";

export const links = () => [{ rel: "stylesheet", href: globalStyles }];

export const meta = () => ({
	titleTemplate: "%s | Remix Starter",
	description: "A starter for Remix",
	viewport: "width=device-width, initial-scale=1.0",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<nav className="nav">
				<Link to="/" className="nav-logo">
					REMIX
				</Link>
				<ul className="nav-list">
					<li className="nav-list-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-list-item">
						<Link to="/blogs">Blogs</Link>
					</li>
					<li className="nav-list-item">
						<Link to="/about">About</Link>
					</li>
					<li className="nav-list-item">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<main>{children}</main>
		</>
	);
};

const Document = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<Links />
				<title>{title}</title>
			</head>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
};

const App = () => {
	return (
		<Document title="Lets see">
			<Outlet />
			{process.env.NODE_ENV === "development" ? <LiveReload /> : null}
		</Document>
	);
};

export default App;
