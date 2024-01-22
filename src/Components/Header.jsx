import React from "react";
import { NavMenu } from "../Utilities/Menuitemsdata";
import HoverButton from "./Styledcomponents/Hoverbutton";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className=" top-0 fixed w-full  z-50">
			<nav className="flex flex-row justify-between items-center px-24 bg-transparent py-5   ">
				<div>
					<h1 className="font-[poppins] font-bold text-3xl hover:opacity-70">
						Turfied
					</h1>
				</div>
				<div className="flex flex-row justify-center items-center gap-10">
					<ul className="flex flex-row gap-10">
						{NavMenu.map((data, index) => (
							<Link to={'/'}>
								<li
									className="text-xl hover:opacity-100  font-semibold opacity-70 text-[#253528] cursor-pointer"
									key={index}>
									{data.title}
								</li>
							</Link>
						))}
					</ul>
					<Link to={"/signin"}>
						<HoverButton text={"Signin"} animate={true} />
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Header;
