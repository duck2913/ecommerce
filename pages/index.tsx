import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { client } from "../lib/client";
import { Footer, FooterBanner, Product, HeroBanner } from "../components";

const Home: NextPage = ({ products, bannerData }: any) => {
	console.log("🚀 -> products", products);
	return (
		<div className=" min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<HeroBanner bannerData={bannerData[0]} />
				<div className="heading text-center pt-10">
					<h2 className="text-4xl font-bold">Best Selling Products</h2>
					<p className="text-gray-400 mt-2">We have the best thing that you want</p>
				</div>
				<div className="container max-w-5xl mx-auto mt-10">
					{products?.map((product) => product.name)}
				</div>
				{/* <FooterBanner /> */}
			</main>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: {
			products,
			bannerData,
		},
	};
};
