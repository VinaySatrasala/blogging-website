export const Author = ({name,desc}:{name:string,desc:string}) => {
	return (
		<div>
			<h2 className="text-lg font-medium mb-2 ">Author</h2>
			<div className="flex">
				<div className="bg-gray-100 w-9 h-9 rounded-full mt-3 mr-4 text-center">
					<h1 className="text-2xl font-bold">{name.charAt(0)}</h1>
				</div>
				<div>
					<h1 className="text-3xl font-bold">{name}</h1>
					<h2 className="text-gray-500">{desc}</h2>
				</div>
			</div>
		</div>
	);
};
