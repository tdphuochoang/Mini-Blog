import React from "react";
import { Link } from "react-router-dom";
import BlogLogo from "../img/BlogLogo.png";

const Footer = () => {
	return (
		<footer>
			<Link className="link" to="/">
				<img src={BlogLogo} alt="" />
			</Link>
			<span>
				Copyright owned by <b>Hoang</b>
			</span>
		</footer>
	);
};

export default Footer;
