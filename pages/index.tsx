import type { NextPage, GetServerSideProps } from "next";
import { client } from "../lib/client";
import { FooterBanner, Product, HeroBanner } from "../components";

const Home: NextPage = ({ products, bannerData }: any) => {
	return (
		<>
			<HeroBanner bannerData={bannerData[0]} />
			<div className="heading text-center pt-10">
				<h2 className="text-4xl font-bold">Best Selling Products</h2>
				<p className="text-gray-400 mt-2">We have the best thing that you want</p>
			</div>
			<div className="container max-w-6xl mx-auto pb-10 grid grid-cols-4 cursor-pointer gap-5 mt-6 place-items-center">
				{products?.map((product: any) => (
					<Product product={product} key={product._id} />
				))}
			</div>
			<FooterBanner bannerData={bannerData[0]} />
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const query = '*[_type == "products"]';
	const productsRes = await client.fetch(query);
	const products = productsRes.filter((product: any) => product.details);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: {
			products,
			bannerData,
		},
	};
};
