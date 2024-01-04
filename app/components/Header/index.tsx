import React from "react";
import styles from "./styles.css";
import { Link } from "@remix-run/react";

export const links = () => [{ rel: "stylesheet", href: styles }];

const Header: React.FC = () => {
	return (
		<header className="header">
			<Link to="/" className="header-logo">
				REMIX
			</Link>
			<ul className="header-list">
				<li className="header-list-item">
					<Link to="/blogs">Blogs</Link>
				</li>
				<li className="header-list-item">
					<Link to="/about">About</Link>
				</li>
				<li className="header-list-item">
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
