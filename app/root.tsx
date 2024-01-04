import { Outlet, LiveReload, Links } from "@remix-run/react";
import Header, { links as headerLinks } from "./components/Header";
import globalStyles from "./styles/globals.css";

export const links = () => [
	...headerLinks(),
	{ rel: "stylesheet", href: globalStyles },
];

export const meta = () => ({
	titleTemplate: "%s | Remix Starter",
	description: "A starter for Remix",
	viewport: "width=device-width, initial-scale=1.0",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
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
