import { useState } from "react";
import { Button } from "../Compoents/Button";
import { Heading } from "../Compoents/Heading";
import { InputTitle } from "../Compoents/InputTitle";
import { Quote } from "../Compoents/Quote";
import {  SignupType } from "@vinay-npm/common";
export const Signup = () => {
	const [postInputs,setPostInputs] = useState<SignupType>({
		name : "",
		email : "",
		password : ""
	})
	return (
		<div className="grid grid-cols-2 h-screen">
			<div className=" flex items-center justify-center">
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
			<Quote></Quote>
		</div>
	);
};
