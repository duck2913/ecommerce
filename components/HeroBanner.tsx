import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({ bannerData }) => {
	return (
		<div className="w-[90vw] bg-gray-200 p-10 py-28 relative mx-auto mt-5 rounded-xl">
			<p>{bannerData.smallText}</p>
			<p className="text-3xl font-bold">{bannerData.midText}</p>
			<span className="inline-block text-5xl font-extrabold text-[80px] mr-4 text-white">
				{bannerData.largeText1}
			</span>
			<span className="inline-block text-5xl font-extrabold text-[80px] text-red-500">
				{bannerData.largeText2}
			</span>
			<button className="block mt-10 text-white bg-red-400 rounded-[1.25rem] py-2 px-10">
				{bannerData.buttonText}
			</button>
			<img
				src={urlFor(bannerData.image).url()}
				alt=""
				className="absolute top-0 left-[50%]  transform translate-x-[-50%] w-[25rem]"
			/>
			<div className="absolute right-[5rem] bottom-0 py-10 text-right">
				<p className="description text-slate-700 font-bold">Description</p>
				<p>{bannerData.desc}</p>
			</div>
		</div>
	);
};

export default HeroBanner;
