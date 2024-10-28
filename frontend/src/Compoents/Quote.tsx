import "../App.css"; // Ensure you have the animate-blink CSS class here

export const Quote = () => {


	return (
		<div className="bg-slate-200 flex items-center justify-center h-screen">
			<div className="w-3/5">
				<h1 className="text-2xl font-bold typewriter line-1 anim-typewriter">
                    "The blogosphere is a community of people, a new way of expressing ideas. It allows everyone to have a voice."
				</h1>
                <h2 className="text-lg font-medium text-right mt-5"> David Sarif</h2>
			</div>
		</div>
	);
};
