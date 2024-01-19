import React from "react";
import signinImg from "../Assets/signin_img.jpg";

const SigninPage = () => {
	return (
		<section className="top-0 ">
			<div
				className="h-screen bg-cover bg-center flex justify-start items-center lg:pl-56"
				style={{ backgroundImage: `url(${signinImg})` }}>
				<div className="flex flex-col justify-center items-center bg-black text-white  py-6 rounded-xl ">
					<div className="flex justify-start">
						<h1 className=" text-2xl font-bold">Sign in</h1>
					</div>
					<div className="flex flex-col justify-center items-center gap-4 p-4 w-[25rem]">
						<input
							type="text"
							className="w-full py-2 rounded-sm pl-3"
							placeholder="Email or Username"
						/>
						<input
							type="password"
							className="w-full py-2 rounded-sm pl-3"
							placeholder="password"
						/>
						<button
							type="submit"
							className="bg-[#8ba889] w-full py-2 text-black font-semibold rounded-sm">
							Sign in
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SigninPage;
