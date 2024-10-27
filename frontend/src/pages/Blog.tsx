
import { Author } from "../Compoents/Author";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
	const { id } = useParams();
	const { loading, blog } = useBlog(id + "");

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!blog) {
		return <div>Error: Blog not found.</div>; // Handle case where blog data is unavailable
	}
	console.log(blog)
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-8 p-10 ">
				<h1 className="font-bold text-6xl">{blog.title}</h1>
				<h2 className="font-medium text-lg text-gray-500 mt-3 ml-2 mb-4">
					Posted on August 24, 2024
				</h2>
				<p className="ml-2">{blog.content}</p>
			</div>
			<div className="pt-10 ml-10 w-screen cols-span-4">
				<Author name={blog.author?.name || "Unknown"} desc="Master of mirth" />
			</div>
		</div>
	);
};
