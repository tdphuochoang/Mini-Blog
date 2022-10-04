import express from "express";
import {
	addPost,
	deletePost,
	getPost,
	getPosts,
	updatePost,
} from "../controllers/post.js";

const router = express.Router();

//GET ALL POSTS
router.get("/", getPosts);

//GET SINGLE POST
router.get("/:id", getPost);

//CREATE POST
router.post("/", addPost);

//DELETE POST
router.delete("/:id", deletePost);

//UPDATE POST
router.put("/:id", updatePost);

export default router;
