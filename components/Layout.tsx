import React, { useContext } from "react";
import Head from "next/head";
import { Navbar, Footer } from "../components/index";
import { CartContext } from "../context/CartContext";
import { Modal } from "../components/index";

const Layout = ({ children }) => {
	const { openModal } = useContext(CartContext);
	return (
		<div className="min-h-screen overflow-hidden relative">
			{openModal && <Modal />}
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
