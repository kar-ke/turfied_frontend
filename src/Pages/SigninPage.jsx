import React, { useState } from "react";
import "./SigninPage.css";
import signinImg from "../Assets/signin_img.jpg";

const SigninPage = () => {
	const [isuser, setIsuser] = useState(false);

	const handleUser = function () {
		setIsuser(!isuser);
	};
	return (
		<section className=" ">
			<div
				className="h-screen bg-cover bg-center flex items-center lg:pl-56"
				style={{ backgroundImage: `url(${signinImg})` }}>
				{isuser ? (
					<div className=" flex flex-col text-[#fff] w-[27rem] py-6 rounded-xl transparent-background">
						<div className="mb-6">
							<h1 className=" text-2xl font-bold text-left mb-2 px-16">
								Sign in
							</h1>
						</div>

						<div className="flex flex-col justify-center items-center gap-4 px-16 mb-2">
							<input
								type="text"
								className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm"
								placeholder="Email or Username"
							/>
							<input
								type="password"
								className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm"
								placeholder="password"
							/>
						</div>

						<div className="px-16">
							<button
								type="submit"
								className="bg-[#8ba889] hover:bg-white hover:text-black duration-200 w-full py-3 mt-7 text-black font-semibold rounded-sm">
								Sign in
							</button>
						</div>

						<div className="flex justify-between text-sm text-gray-400 mt-3 px-16">
							<span className="flex flex-row space-x-1 mb-6">
								<input
									type="checkbox"
									className="cursor-pointer"
								/>
								<p>Remember me</p>
							</span>
							<a href="#" className="hover:underline">
								Need help?
							</a>
						</div>

						<div className="flex flex-col px-16 mb-4">
							<p className="text-[1rem] text-gray-400">
								New to Turfied?{" "}
								<span
									onClick={handleUser}
									className="text-[1rem] text-white hover:underline cursor-pointer">
									Sign up now
								</span>
							</p>
						</div>
					</div>
				) : (
					<div className=" flex flex-col text-[#fff] w-[27rem] py-6 pb-12 rounded-xl transparent-background">
						<div className="mb-6">
							<h1 className=" text-2xl font-bold text-left mb-2 px-16">
								Sign up
							</h1>
						</div>

						<div className="flex flex-col justify-center items-center gap-4 px-16 mb-2">
							<input
								type="text"
								className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm"
								placeholder="Email or Phone"
							/>
							<input
								type="text"
								className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm"
								placeholder="Username"
							/>
							<input
								type="password"
								className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm"
								placeholder="password"
							/>
							<input
								type="password"
								className="py-3.5 w-full rounded-sm pl-3 bg-gray-800 text-sm"
								placeholder="Confirm password"
							/>
						</div>
						<div className="px-16">
							<button
								type="submit"
								className="bg-[#8ba889] hover:bg-white hover:text-black duration-200 w-full py-3 mt-7 text-black font-semibold rounded-sm">
								Sign up
							</button>
						</div>
						<div className="flex justify-between text-sm text-gray-400 mt-3 px-16">
							<p
								className="mb-6 hover:underline cursor-pointer"
								onClick={handleUser}>
								Already have an account !
							</p>

							<a href="#" className="hover:underline">
								Need help?
							</a>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default SigninPage;
