import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const NewBlog = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();
	return (
		<div className="min-h-screen bg-white text-gray-800">
			<div className="text-right m-5 mr-10">
				<button
					className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-1 text-sm"
					onClick={()=>{
						axios.post(`${BACKEND_URL}/blog`,{
							title,content
						},
							{
								headers : {
									Authorization : "Bearer "+localStorage.getItem("jwt")
								}
							}
						)
							.then((response) => {
								console.log(response.data)
							})
						navigate("/blogs");
					}}
				>
					Publish
				</button>
			</div>
			<main className="container mx-auto mt-8 px-4 max-w-3xl">
				<div className="relative mb-4">
					<input
						type="text"
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full text-4xl font-normal placeholder-gray-300 border-none outline-none"
					/>
				</div>
				<div className="relative">
					<textarea
						placeholder="Tell your story..."
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="w-full text-xl placeholder-gray-400 border-none outline-none resize-none"
						rows={20}
					/>
				</div>
			</main>
		</div>
	);
};
