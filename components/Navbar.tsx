import React, { useContext } from "react";
import { ShoppingCart, Aperture } from "tabler-icons-react";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
	const { setOpenModal, totalQuantities } = useContext(CartContext);

	function openCartModal() {
		console.log("open modal");
		setOpenModal(true);
	}

	return (
		<div className="w-[90vw] mx-auto flex justify-between items-center p-3 pt-5 ">
			<div className="logo font-bold flex items-center gap-2">
				<Aperture size={48} strokeWidth={2} color={"#d2797a"} />
				<p className="text-slate-600">Getgo</p>
			</div>
			<button className="shopping-cart relative" onClick={openCartModal}>
				<ShoppingCart size={25} />
				<div className="badge w-[1.5rem] h-[1.5rem] rounded-[100%] bg-red-500 text-white flex justify-center items-center text-sm absolute top-0 right-0 transform translate-x-[1rem] translate-y-[-10px]">
					{totalQuantities}
				</div>
			</button>
		</div>
	);
};

export default Navbar;
