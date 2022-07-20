import React from "react";
import { useRouter } from "next/router";

const ProductDetail = () => {
	const router = useRouter();
	const { slug } = router.query;

	return <div>Slug: {slug}</div>;
};

export default ProductDetail;
