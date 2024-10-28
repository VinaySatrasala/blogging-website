import { useState } from "react";
import { Button } from "../Compoents/Button";
import { Heading } from "../Compoents/Heading";
import { InputTitle } from "../Compoents/InputTitle";
import { Quote } from "../Compoents/Quote";
import {  SignupType } from "@vinay-npm/common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
	const [postInputs,setPostInputs] = useState<SignupType>({
		name : "",
		email : "",
		password : ""
	})
	const navigate = useNavigate();
	async function sendRequest() {
		console.log("called");
		try{
			const res = await axios.post(`${BACKEND_URL}/user/signup`,postInputs)
			const jwt = res.data.token;
			localStorage.setItem("jwt",jwt);
			if(res.status != 200){
				alert(res.data.msg);
				return;
			}
			navigate("/blogs")
		}catch(e:any){
			alert(e.response.data.msg);
		}
	}
	return (
		<div className="grid grid-cols-1 h-screen lg:grid-cols-2">
			<div className=" flex items-center justify-center">
				<div className="p-4 bg-red-10 w-3/5">
					<Heading
						heading="Create an account"
						desc="Already have an account?"
						button="Signin"
					></Heading>
					<InputTitle
						title="Username"
						placeholder="Enter your username"
						onchange={(e) => {
							setPostInputs({
								...postInputs,
								name : e.target.value
							})
						}}
					></InputTitle>
					<InputTitle
						title="Email"
						placeholder="johndoe@example.com"
						onchange={(e) => {
							setPostInputs({
								...postInputs,
								email:e.target.value
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
					></InputTitle>
					<Button text="Signup" onclick={sendRequest}></Button>
				</div>
			</div>
			<Quote></Quote>
		</div>
	);
};
