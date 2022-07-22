import React, { useContext } from "react";
import Head from "next/head";
import { Navbar, Footer, Modal } from "../components/index";
import { CartContext } from "../context/CartContext";

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
