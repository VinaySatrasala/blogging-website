import { Link } from "react-router-dom";

export const Heading = ({
	heading,
	desc,
	button,
}: {
	heading: string;
	desc: string;
	button: string;
}) => {
	return (
		<div className="p-1">
			<h1 className="text-4xl font-bold text-center p-3">{heading}</h1>
			<div className="flex items-center justify-center gap-2 text-gray-700 text-md pb-3">
				<p>{desc}</p>
				<Link to={"/"+button} className="underline">{button}</Link>
			</div>
		</div>
	);
};
