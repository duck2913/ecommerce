import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { urlFor } from "../lib/client";

const Modal = () => {
	const { setOpenModal, cart, setCart } = useContext(CartContext);

	const totalPrice = cart.reduce(
		(sum, currProduct) => sum + currProduct.price * currProduct.quantity,
		0,
	);

	function increaseQuantity(product: any) {
		let updatedCart = cart;
		const idx = updatedCart.findIndex((p) => p.name === product.name);
		updatedCart[idx].quantity += 1;
		setCart(updatedCart);
		console.log("🚀 -> updatedCart", updatedCart);
	}

	function decreaseQuantity(product: any) {
		let updatedCart = cart;
		if (product.quantity > 1) {
			const idx = updatedCart.findIndex((p) => p.name === product.name);
			updatedCart[idx].quantity -= 1;
			setCart(updatedCart);
			console.log("🚀 -> updatedCart", updatedCart);
		} else {
			updatedCart = updatedCart.filter((p) => p.name !== product.name);
		}
		setCart(updatedCart);
	}

	return (
		<div className="h-full w-screen relative">
			<div className="overlay bg-black opacity-80 fixed inset-0 z-[1]"></div>
			<div className="modal w-[40vw] min-h-[10rem] mx-auto z-[2] text-black bg-white mt-[5rem] rounded-2xl absolute left-1/2 translate-x-[-50%] p-5">
				<div className="flex justify-between">
					<p className="text-red-800 font-bold text-xl">Your purchase: </p>
					<button
						className="p-1 rounded-full bg-slate-300 w-7 h-7 flex items-center justify-center"
						onClick={() => setOpenModal(false)}
					>
						X
					</button>
				</div>
				<div className="my-7">
					{cart.map((product) => (
						<div
							className="w-full mb-5 flex items-center border-b pb-3"
							key={product.name}
						>
							<div className="w-[14rem] flex items-center">
								<img
									src={urlFor(product.imgUrl).url()}
									alt=""
									width={40}
									height={40}
									className="inline-block mr-3"
								/>
								<p className="">{product.name}</p>
							</div>
							<div className="mx-auto flex gap-[1rem] w-[8rem] justify-between">
								<button
									className="px-3 border border-red-600 rounded-md active:translate-y-[-5px]"
									onClick={() => decreaseQuantity(product)}
								>
									-
								</button>
								<div>x{product.quantity}</div>
								<button
									className="px-3 border border-red-600 rounded-md active:translate-y-[-5px]"
									onClick={() => increaseQuantity(product)}
								>
									+
								</button>
							</div>
							<div className="prices mr-[1rem] font-bold text-2xl text-slate-500 w-[4rem] text-right">
								{product.quantity * product.price}$
							</div>
						</div>
					))}
				</div>
				<div className="flex items-center text-xl px-8">
					Total price:{" "}
					<span className="font-bold text-5xl ml-7 text-red-600">{totalPrice}$</span>
					<button
						className="mt-4 px-8 py-2 text-red-800 font-semibold bg-red-300 rounded-lg mb-3 ml-auto"
						onClick={() => setOpenModal(false)}
					>
						Buy now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
