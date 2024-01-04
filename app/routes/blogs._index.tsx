import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import blogs from "~/data/blogs";
import { IBlog } from "~/types/blogs";

export const loader = () => {
	return blogs;
};

const Blogs: React.FC = () => {
	const blogs = useLoaderData<typeof loader>();

	return (
		<main className="blogs-page">
			<div className="blogs-header">
				<h2>Blogs</h2>
				<Link className="btn btn-fill" to="/blogs/new">
					Add Blog
				</Link>
			</div>
			<div className="blogs">
				{blogs?.map((blog: IBlog) => (
					<div key={blog.slug} className="blog-card">
						<Link
							className="blog-card-title"
							to={`/blogs/${blog.id}`}
						>
							{blog.title}
						</Link>
						<span className="blog-card-author">{blog.author}</span>
						<span className="blog-card-date">{blog.date}</span>
					</div>
				))}
			</div>
		</main>
	);
};

export default Blogs;
