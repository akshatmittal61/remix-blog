import { redirect } from "@remix-run/node";
import React from "react";
import { IBlog } from "~/types/blogs";
import { slugify } from "~/utils/functions";

export const action = async ({ request }: any) => {
	const form = await request.formData();
	const values: IBlog = {
		title: form.get("title") || "",
		content: form.get("content") || "",
		date: form.get("date") || "",
		author: form.get("author") || "",
		slug: slugify(form.get("title")) || "",
	};
	if (!values.title || !values.content || !values.date || !values.author) {
		return new Response("Please fill all the fields", {
			status: 400,
		});
	}
	console.log(values);
	return redirect("/blogs");
};

const NewBlogPage: React.FC = () => {
	return (
		<main className="new-blog-page">
			<h1>Write a blog</h1>
			<form method="POST">
				<div className="input-group">
					<label htmlFor="title">Title of the blog</label>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Introduction to CLI"
					/>
				</div>
				<div className="input-group">
					<label htmlFor="author">Author</label>
					<input
						type="text"
						name="author"
						id="author"
						placeholder="John Doe"
					/>
				</div>
				<div className="input-group">
					<label htmlFor="date">Date</label>
					<input type="date" name="date" id="date" />
				</div>
				<div className="input-group">
					<label htmlFor="content">Content</label>
					<textarea name="content" id="content" rows={10} />
				</div>
				<div className="input-group">
					<button className="btn btn-fill" type="submit">
						Submit
					</button>
				</div>
			</form>
		</main>
	);
};

export default NewBlogPage;
