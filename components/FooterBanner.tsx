import React from "react";

import { urlFor } from "../lib/client";

const FooterBanner = ({ bannerData }) => {
	console.log("🚀 -> bannerData", bannerData);
	return (
		<div className="w-[85vw] bg-red-500 p-10 py-28 relative mx-auto mb-5 rounded-xl grid grid-cols-2 text-white">
			<div className="left">
				<p className="text-sm text-gray-200">{bannerData.discount}</p>
				<p className="text-[60px] font-bold mb-0 leading-none">{bannerData.largeText1}</p>
				<p className="text-[60px] font-bold mt-0 leading-none">{bannerData.largeText2}</p>
				<p className="text-sm text-gray-200 mt-3">{bannerData.saleTime}</p>
			</div>
			<div className="right text-right">
				<p>{bannerData.smallText}</p>
				<p className="text-[40px] font-bold mt-0 leading-none my-8">{bannerData.midText}</p>
				<p>{bannerData.desc}</p>
				<button className="mt-10 bg-white text-red-500 rounded-lg font-bold px-8 py-2 border-none">
					Shop now
				</button>
			</div>

			<img
				src={urlFor(bannerData.image).url()}
				alt=""
				className="absolute top-0 left-[50%]  transform translate-x-[-50%] translate-y-[-4rem] w-[30rem]"
			/>
		</div>
	);
};

export default FooterBanner;
