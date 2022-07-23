import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "../components/index";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen overflow-hidden relative">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
