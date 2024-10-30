import { useNavigate } from "react-router-dom"

export const AppBar = () => {
	const navigate = useNavigate();
	return (
		<header className="flex items-center justify-between p-4 border-b border-gray-200">
			<div className="flex items-center space-x-2">
				<span className="text-md font-medium">Write your Blog...!</span>
			</div>
			<div className="flex items-center space-x-4">
				<button
					className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-1 text-sm mr-5"
					onClick={
						() => {
							localStorage.removeItem("jwt")
							navigate("/Signin")
						}
					}
				>
					Logout
				</button>
				<button>
					<div className="bg-gray-100 w-9 h-9 rounded-full text-center">
						<h1 className="text-2xl font-bold">J</h1>
					</div>
				</button>
			</div>
		</header>
	);
};
