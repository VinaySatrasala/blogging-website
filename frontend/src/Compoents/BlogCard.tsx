import { Link } from "react-router-dom";

interface types {
	authorName: string;
	date: string;
	title: string;
	content: string;
	time: string;
  id : string
}

export const BlogCard = ({ authorName, date, title, content, time,id }: types) => {
	return (
		<Link to={`/blog/${id}`}>
			<div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-2">
				<div className="p-6">
					<div className="flex items-center mb-4">
						<div className="w-10 h-10 rounded-full mr-4 text-2xl font-bold bg-slate-200 flex justify-center items-center">
							{authorName.charAt(0).toUpperCase()}
						</div>
						<div className="">
							<p className="text-gray-900 font-semibold">
								{authorName}
							</p>
							<p className="text-gray-600 text-sm">{date}</p>
						</div>
						{/* <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Member-only
            </span> */}
					</div>
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						{title}
					</h2>
					<p className="text-gray-700 mb-4">
						{content.slice(0, 400)}...
					</p>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<span className="text-gray-600 text-sm">
								{time}read
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<button className="text-gray-400 hover:text-gray-500">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
