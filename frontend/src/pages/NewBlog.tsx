import { useState } from "react";
import { MoreHorizontal, Plus } from "lucide-react";

export const NewBlog = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<div className="min-h-screen bg-white text-gray-800">
			<header className="flex items-center justify-between p-4 border-b border-gray-200">
				<div className="flex items-center space-x-2">
					<span className="text-md font-medium">
						Write your Blog...!
					</span>
				</div>
				<div className="flex items-center space-x-4">
					<button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-1 text-sm">
						Publish
					</button>
					<button>
						<div className="bg-gray-100 w-9 h-9 rounded-full text-center">
							<h1 className="text-2xl font-bold">J</h1>
						</div>
					</button>
				</div>
			</header>
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
