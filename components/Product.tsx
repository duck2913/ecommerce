import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product }) => {
	return (
		<Link href={`product/${product.slug.current}`} passHref>
			<div className="hover:transform hover:scale-105 transition-all">
				<img
					className="bg-gray-400 rounded-lg"
					src={product.image && urlFor(product.image[0]).url()}
					alt="product"
					width={250}
					height={250}
				/>
				<div className="name">{product.name}</div>
				<div className="font-bold">{product.price}$</div>
			</div>
		</Link>
	);
};

export default Product;
