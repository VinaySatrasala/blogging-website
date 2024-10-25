import { Button } from "../Compoents/Button";
import { Heading } from "../Compoents/Heading";
import { InputTitle } from "../Compoents/InputTitle";
export const Signup = () => {
	return (
		<div className="flex h-screen">
			<div className="flex-1 flex items-center justify-center">
				<form className="p-4 bg-red-10 w-3/5">
					<Heading
						heading="Create an account"
						desc="Already have an account?"
						button="Signin"
					></Heading>
					<InputTitle
						title="Username"
						placeholder="Enter your username"
					></InputTitle>
					<InputTitle
						title="Email"
						placeholder="johndoe@example.com"
					></InputTitle>
					<InputTitle
						title="Password"
						placeholder="password"
					></InputTitle>
					<Button text="Signup"></Button>
				</form>
			</div>
			<div className="flex-1 bg-slate-100 flex items-center justify-center">
				<div className="w-3/5">
					<h1 className="text-2xl font-bold">
						"The blogosphere is a community of people, a new way of
						expressing ideas. It allows everyone to have a voice."
					</h1>
					<h2 className="text-lg font-medium text-right mt-5">— David Sifry</h2>
				</div>
			</div>
		</div>
	);
};
