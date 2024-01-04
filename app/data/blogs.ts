import { IBlog } from "../types/blogs";

const blogs: IBlog[] = [
	{
		id: 1,
		title: "How to use Next.js with Tailwind CSS",
		content:
			"Next.js is a React framework that allows you to build static and dynamic websites and web applications. Tailwind CSS is a utility-first CSS framework that allows you to build responsive websites and web applications quickly.",
		slug: "how-to-use-nextjs-with-tailwindcss",
		date: "2021-08-24",
		author: "Akshat Mittal",
		coverImage: "https://akshatmittal61.vercel.app/banner.png",
	},
	{
		id: 2,
		title: "React Hooks: useState",
		content:
			"Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.",
		slug: "react-hooks-usestate",
		date: "2022-04-24",
		author: "Akshat Mittal",
		coverImage: "https://akshatmittal61.vercel.app/banner.png",
	},
];

export default blogs;
