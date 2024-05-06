import React from "react";
import whole from "../assets/Rectangle.png";
import { BsThreeDots } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { IoPersonAdd } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";

import { PiBookOpenTextBold, PiRectangle } from "react-icons/pi";
const Content = () => {
	return (
		<>
			<div className="Content text-size border-0 ">
				<List />
				<div className="grid-set py-0">
					<Post />
					<Sidebar />
				</div>
			</div>
		</>
	);
};
const Post = () => {
	return (
		<div className=" post">
			<PostItem />
			<PostItem />
			<PostItem />
			<PostItem />
		</div>
	);
};
const Sidebar = () => {
	return (
		<div className=" sidebar">
			<div className="side-input d-flex border-bottom fw-bold">
				<span className="px-3">
					<FaLocationDot />
				</span>
				<input
					type="text"
					placeholder="Noida"
					class="bg-transparent border-0"
				/>
				<span className="d-flex ">
					<FaPen />
				</span>
			</div>
			<p className="my-4 small">
				Your location will serve us better and help us personalized
				experience
			</p>
		</div>
	);
};

const List = () => {
	return (
		<div class="container list-container border-0 my-4  text-size border-bottom">
			<div class="list">
				<ul class="list-items text-nowrap">
					<li>All post</li>
					<li>Article</li>
					<li>Event</li>
					<li>Education</li>
					<li>Job</li>
				</ul>
			</div>
			<div class="buttons text-size">
				<button className="text-size btn p-3 list-item-dropdown">
					
					<GoTriangleDown />
					Write a Post
				</button>
				<button className="text-size btn p-3 btn-primary text-nowrap join-btn">
					<span className="">Join Group </span><IoPersonAdd />
					
				</button>
			</div>
		</div>
	);
};
const PostItem = () => {
	return (
		<div className="postItem border py-4">
			<img src={whole} alt="Hello" className="p-0" />

			<p className="fw-bold py-2 px-5 tag">
				<span className="display-6 px-3 text-danger">
					<PiBookOpenTextBold />
				</span>
				Article
			</p>

			<div className=" d-flex flex-row justify-content-between postItem-heading-container py-0 px-5 ">
				<p className="postItem-heading fw-bold">
					What if famous brands had regular fonts? Meet RegulaBrands
				</p>
				<span className="text-size btn">
					<BsThreeDots />
				</span>
			</div>
			<p className=" postItem-description py-2 text-mute  px-5">
				I've worked in UK for the better part of a decade. Fruin now on, I
				pianture
			</p>
			<div className="info  postItem-details d-flex justify-content-between align-items-center px-5 py-2">
				<div class="content text-size d-flex align-items-center">
					<img src={whole} alt="Profile Image" />
					<h4 className="display-6">Sarthak Kamra</h4>
				</div>
				<div className="left-item d-flex align-items-center">
					<p className="mx-5">1.4k Views</p>
					<button class="text-size btn ">
						<FaShareAlt />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Content;
