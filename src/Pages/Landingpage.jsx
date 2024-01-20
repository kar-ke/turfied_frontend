import React from "react";
import img1 from "../Assets/Cricket-bro.svg";
import CursorBlinkComponent from "../Components/Styledcomponents/Cursorblinker";
import Button from '../Components/Styledcomponents/Button'
import teamImg from "../Assets/team.jpg";
import team2 from "../Assets/team2.jpg";


const Landingpage = () => {
	return (
		<div className="bg-black">
			<section className="bg-white flex flex-row justify-between items-center px-40 h-screen rounded-b-[7rem] ">
				<div className="flex flex-col w-[50%] mb-36 mx-10 gap-5">
					<h1 className="text-6xl font-bold font-mono mb-3 ">
						Now Turf booking at your fingertips.
						<CursorBlinkComponent />
					</h1>
					<p className="text-xl font-mono">
						Welcome to our turf booking website, your gateway to a
						wold of sports and recreation made easy. Our platform is
						designed with one goal in mind: to make your turf
						booking experiance seamless and enjoyable.
					</p>
					<Button
						text={"Book"}
						customStyles={
							"bg-black px-6 text-white font-semibold hover:bg-[#8ba889] hover:text-black hover:outline outline-1 duration-300"
						}
					/>
				</div>
				<div className="w-[50%] mb-36">
					<img
						className="h-[90%]  w-[90%]"
						src={img1}
						alt="cricket guy svg"
					/>
				</div>
			</section>

			<section className="bg-black flex justify-between items-center mx-36 h-[78rem]  ">
				<div className="flex gap-8 w-[50%]">
					<img
						src={teamImg}
						alt="teamImg"
						className="h-[30rem] rounded-2xl ml-16 mb-32 -rotate-[10deg]"
					/>
					<img
						src={team2}
						alt="team2"
						className="absolute h-[30rem] rounded-2xl translate-x-[290px] translate-y-[180px] rotate-[25deg]"
					/>
				</div>
				<div className="text-[#fff] w-[50%]">
					<h1 className="text-6xl font-bold font-mono mb-8">
						About us;
					</h1>
					<p className="text-2xl font-mono  opacity-80 ">
						Welcome to{" "}
						<span className="text-[#8ba889] font-bold">
							Turfied
						</span>
						, where your passion for sports and the great outdoors
						meets its digital home! We're more than just a website;
						we're a community of enthusiasts, adventurers, and
						athletes who share a common love for all things active
						and adventurous.
					</p>
				</div>
			</section>
			<section className="bg-[#253528] h-screen rounded-t-[5rem] "></section>
		</div>
	);
};

export default Landingpage;
