import { Outlet, LiveReload } from "@remix-run/react";
import { Link } from "react-router-dom";

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
