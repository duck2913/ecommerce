import React, { useEffect, useContext } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";
import confetti from "canvas-confetti";
import { CartContext } from "../context/CartContext";
const success = () => {
	const { setCart, setTotalQuantities } = useContext(CartContext);

	useEffect(() => {
		var duration = 5 * 1000;
		var animationEnd = Date.now() + duration;
		var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

		var interval = setInterval(function () {
			var timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			var particleCount = 50 * (timeLeft / duration);
			// since particles fall down, start a bit higher than random
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
				}),
			);
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
				}),
			);
		}, 250);
	});

	return (
		<div className="w-screen h-[50vh] bg-slate-300 flex items-center justify-center flex-col">
			<BsFillBagCheckFill className="text-6xl mb-4 text-green-600" />
			<h1 className="font-bold text-2xl">Thank you for your order!</h1>
			<Link href={"/"} passHref>
				<button
					className="mt-5 px-4 py-1 rounded-md bg-green-300 text-green-700 font-bold"
					onClick={() => {
						setCart([]);
						setTotalQuantities(0);
					}}
				>
					Back to Shopping
				</button>
			</Link>
		</div>
	);
};

export default success;
