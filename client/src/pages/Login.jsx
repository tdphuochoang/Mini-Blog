import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});
	const [err, setErr] = useState(null);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log("Start");
			await axios.post("/auth/login", inputs);
			console.log("Success");
			navigate("/");
		} catch (err) {
			console.log("no success");
			setErr(err.response.data);
		}
	};
	return (
		<div className="auth">
			<h1>Login</h1>
			<form>
				<input
					type="text"
					placeholder="username"
					onChange={handleChange}
					name="username"
				/>
				<input
					type="password"
					placeholder="password"
					onChange={handleChange}
					name="password"
				/>
				<button onClick={handleSubmit}>LOGIN</button>
				{err && <p>{err}</p>}
				<span>
					Don't you have an account? <Link to="/register">Register</Link>{" "}
				</span>
			</form>
		</div>
	);
};

export default Login;
