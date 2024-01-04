import { useParams } from "@remix-run/react";
import React from "react";

const DynamicBlogPage: React.FC = () => {
	const { id: blogId } = useParams();
	return (
		<div>
			<h1>DynamicBlogPage {blogId}</h1>
			<p>Welcome to the dynamic blog page!</p>
		</div>
	);
};

export default DynamicBlogPage;
