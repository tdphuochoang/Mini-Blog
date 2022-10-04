import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DeleteBtn from "../img/DeleteBtn.png";
import EditBtn from "../img/EditBtn.png";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Single = () => {
	const [post, setPost] = useState({});

	const location = useLocation();
	const navigate = useNavigate();

	const postId = location.pathname.split("/")[2];

	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts/${postId}`);
				setPost(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [postId]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${postId}`);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="single">
			<div className="content">
				<img src={post?.img} alt="" />
				<div className="user">
					{post.userImg && <img src={post.userImg} alt="" />}
					<div className="info">
						<span>{post.username}</span>
						<span>Posted {moment(post.date).fromNow()}</span>
					</div>
					{currentUser.username === post.username && (
						<div className="edit">
							<Link to={`/write/edit=2`}>
								<img src={EditBtn} alt="" />
							</Link>
							<Link>
								<img onClick={handleDelete} src={DeleteBtn} alt="" />
							</Link>
						</div>
					)}
				</div>
				<h1>{post.title}</h1>

				{post.desc}
			</div>
			<Menu />
		</div>
	);
};

export default Single;
