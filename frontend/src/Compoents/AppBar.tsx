export const AppBar = () => {
	return (
		<header className="flex items-center justify-between p-4 border-b border-gray-200">
			<div className="flex items-center space-x-2">
				<span className="text-md font-medium">Write your Blog...!</span>
			</div>
			<div className="flex items-center space-x-4">
				<button>
					<div className="bg-gray-100 w-9 h-9 rounded-full text-center">
						<h1 className="text-2xl font-bold">J</h1>
					</div>
				</button>
			</div>
		</header>
	);
};
