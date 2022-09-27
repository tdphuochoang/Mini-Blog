import React from "react";
import BlogLogo from "../img/BlogLogo.png";

const Footer = () => {
	return (
		<footer>
			<img src={BlogLogo} alt="" />
			<span>
				Copyright owned by <b>Hoang</b>
			</span>
		</footer>
	);
};

export default Footer;
