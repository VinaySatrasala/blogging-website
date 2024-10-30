import { useState } from "react";
import { Button } from "../Compoents/Button";
import { Heading } from "../Compoents/Heading";
import { InputTitle } from "../Compoents/InputTitle";
import { Quote } from "../Compoents/Quote";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export const Signin = () => {
	const [postInputs,setPostInputs] = useState({
		email : "",
		password : ""
	})
	const navigate = useNavigate();
	async function sendRequest() {
		try {
			const res = await axios.post(`${BACKEND_URL}/user/signin`,postInputs)
			const jwt = res.data.token;
			localStorage.setItem("jwt",jwt)
			navigate("/blogs")
		} catch (e : any) {
			alert(e.response.data.msg);
		}
	}
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
			<div className="flex-1 flex items-center justify-center">
				<div className="p-4 bg-red-10 w-3/5">
					<Heading
						heading="Signin to your account"
						desc="Don't have..? create one"
						button="Signup"
					></Heading>
					<InputTitle	
						title="Email"
						placeholder="Enter your email"
						onchange={(e) => {
							setPostInputs({
								...postInputs,
								email : e.target.value
							})
						}}
					></InputTitle>
					<InputTitle
						title="Password"
						placeholder="password"
						onchange={(e) => {
							setPostInputs({
								...postInputs,
								password : e.target.value
							})
						}}
						type="password"
					></InputTitle>
					<Button text="Signin" onclick={sendRequest}></Button>
				</div>
			</div>
			<Quote></Quote>
		</div>
	);
};
