export const Author = ({ name, desc }: { name: string; desc: string }) => {
	return (
		<div>
			<h2 className="text-lg font-medium mb-2 ">Author</h2>
			<div className="flex">
				<div className="w-10 h-10 rounded-full mr-4 text-2xl font-bold bg-slate-200 flex justify-center items-center">
					{name.charAt(0).toUpperCase()}
				</div>
				<div>
					<h1 className="text-3xl font-bold">{name}</h1>
					<h2 className="text-gray-500">{desc}</h2>
				</div>
			</div>
		</div>
	);
};
