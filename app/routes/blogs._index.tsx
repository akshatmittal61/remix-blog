import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Link, useFetcher, useLoaderData, useLocation } from "@remix-run/react";
import React from "react";
import blogs from "~/data/blogs";
import { IBlog } from "~/types/blogs";

export const loader: LoaderFunction = () => {
	return blogs;
};

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	const slug = form.get("slug") || "";
	if (!slug) {
		return new Response("Please provide a slug", {
			status: 400,
		});
	}
	const blog = blogs.find((blog) => blog.slug === slug);
	if (!blog) {
		return new Response("Blog not found", {
			status: 404,
		});
	}
	blog.likes++;
	return new Response(JSON.stringify(blog), {
		headers: {
			"Content-Type": "application/json",
		},
	});
}

const Blogs: React.FC = () => {
	const blogs = useLoaderData<typeof loader>();
	const location = useLocation();
	const fetcher = useFetcher();

	const handleLike = (slug: string) => {
		const formData = new FormData();
		formData.append("slug", slug);
		fetcher.submit("/blogs", {
			method: "POST",
			body: formData,
		});
	};

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
							to={`/blogs/${blog.slug}`}
						>
							{blog.title}
						</Link>
						<span className="blog-card-author">{blog.author}</span>
						<span className="blog-card-date">{blog.date}</span>
						<span className="blog-card-date">{blog.likes} Likes</span>
						<button
							className="btn btn-fill"
							onClick={() => handleLike(blog.slug)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
							</svg>
						</button>
					</div>
				))}
			</div>
		</main>
	);
};

export default Blogs;
