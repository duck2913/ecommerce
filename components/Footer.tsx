import React from "react";
import { BrandFacebook, BrandTwitter } from "tabler-icons-react";
const Footer = () => {
	return (
		<div className="text-center">
			<p className="font-semibold mb-1">© Copyrights All rights reserved</p>
			<div className="flex mx-auto w-min gap-3">
				<BrandFacebook size={30} strokeWidth={2} />
				<BrandTwitter size={30} strokeWidth={2} />
			</div>
		</div>
	);
};

export default Footer;
