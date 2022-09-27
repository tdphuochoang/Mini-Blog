import React from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "../img/DeleteBtn.png";
import EditBtn from "../img/EditBtn.png";
import Menu from "../components/Menu";

const Single = () => {
	return (
		<div className="single">
			<div className="content">
				<img
					src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
					alt=""
				/>
				<div className="user">
					<img
						src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
						alt=""
					/>
					<div className="info">
						<span>Hoang</span>
						<span>Posted 2 days ago</span>
					</div>
					<div className="edit">
						<Link to={`/write/edit=2`}>
							<img src={EditBtn} alt="" />
						</Link>
						<Link>
							<img src={DeleteBtn} alt="" />
						</Link>
					</div>
				</div>
				<h1>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
					corporis atque in praesentium sint expedita animi consequatur deleniti
					odio sunt, reiciendis quis eveniet.
				</h1>
				<p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
						aliquam optio nemo expedita reprehenderit maiores dignissimos ipsam
						at, asperiores consequuntur reiciendis magnam vel deleniti
						repudiandae veritatis totam voluptas maxime laborum exercitationem
						sequi quae! Illo, blanditiis! Sed non quisquam id voluptatem quae
						asperiores? Autem laudantium repudiandae fugiat repellat
						necessitatibus. Ad, libero ipsa cum voluptate deserunt animi cumque
						vero dicta sunt maxime delectus alias facere enim blanditiis atque
						quos soluta accusamus! Obcaecati perferendis alias sapiente. Error
						recusandae, atque itaque ab saepe dignissimos odio nulla ipsa
						excepturi nobis vero omnis explicabo quia, ut praesentium
						consequuntur numquam dolore nihil! Laudantium laborum enim non iusto
						exercitationem nulla porro eos, eligendi esse quae ut. Sint
						praesentium vel dolore officia doloremque laboriosam, laudantium
						dolores distinctio corrupti labore vero eum consequatur non quia a
						natus error ipsum velit quo iusto explicabo quibusdam cum optio
						fuga. Quaerat, dolore. Voluptate, reprehenderit. Nobis, illo sit!
						Reiciendis minus expedita, provident deleniti dolorem odit sint!
						Officiis, atque possimus aliquid neque porro eum repellat explicabo
						laboriosam iusto. A, ipsam necessitatibus libero laboriosam
						consequuntur aperiam explicabo fugiat dolore dolorum porro aliquid
						ratione unde temporibus delectus ducimus exercitationem! Nobis porro
						veniam pariatur, est animi suscipit explicabo nam, ad facere sequi
						accusantium adipisci architecto voluptatum assumenda consequatur
						doloribus dicta itaque expedita cumque et beatae! Nam voluptates
						ducimus beatae corrupti, fuga quidem quos placeat, modi animi,
						repellat voluptatum? Rem asperiores perferendis amet consectetur
						fugiat corporis? Sed velit distinctio blanditiis quos repudiandae
						voluptatibus nesciunt dolores veritatis! Omnis labore consequuntur
						veritatis facere provident in quos enim placeat necessitatibus
						numquam, saepe porro laborum asperiores quidem maiores, deserunt
						debitis exercitationem dolorem iste blanditiis adipisci! Ipsum nobis
						quo assumenda vero, porro est illum pariatur optio officia nisi
						suscipit modi reiciendis quae, quaerat aut perferendis ea?
						Cupiditate dicta esse repudiandae similique, laudantium, dolore
						totam rem pariatur veritatis corrupti possimus mollitia cum.
						Adipisci, rerum aut?
					</p>
				</p>
			</div>
			<Menu />
		</div>
	);
};

export default Single;
