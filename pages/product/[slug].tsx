import React, { useState, useContext } from "react";
import { client, urlFor } from "../../lib/client";
import { AiFillStar } from "react-icons/ai";
import { Modal, Product } from "../../components";
import { CartContext } from "../../context/CartContext";

const ProductDetail = ({ product, products }) => {
	const [currentImg, setCurrentImg] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const { cart, setCart, openModal, setTotalQuantities } = useContext(CartContext);

	function increaseQuantity() {
		setQuantity((q) => q + 1);
	}

	function decreaseQuantity() {
		``;
		if (quantity === 1) return;
		setQuantity((q) => q - 1);
	}

	function handleAddToCart() {
		const currentProduct = {
			name: product.name,
			imgUrl: product.image[currentImg],
			price: product.price,
			quantity,
		};
		setTotalQuantities((prevTotal) => (prevTotal += quantity));
		// if the current product is already in the cart
		if (cart.some((product) => product.name === currentProduct.name)) {
			const idxInCart = cart.findIndex((product) => product.name === currentProduct.name);
			let updatedCart = cart;
			updatedCart[idxInCart].quantity += currentProduct.quantity;
			setCart(updatedCart);
		} else {
			setCart((currentCart) => [...currentCart, currentProduct]);
		}
		setQuantity(1);
	}

	function handleBuyNow() {}

	return (
		<>
			{openModal && <Modal />}
			<div className="wrapper max-w-[85vw] mx-auto p-[3rem]">
				<div className="grid grid-cols-2">
					<div className="imgs_container flex flex-col justify-center items-center">
						<img
							src={urlFor(product.image[currentImg]).url()}
							alt="product"
							className="w-[65%] h-[400px] object-cover bg-slate-300 rounded-lg"
						/>
						<div className="small-imgs flex items-center justify-center gap-5 mt-8">
							{product.image.map((image: any, idx: number) => (
								<img
									src={urlFor(image).url()}
									alt=""
									width={70}
									className="bg-slate-300 rounded-lg hover:bg-slate-500 transition-all"
									onMouseEnter={() => setCurrentImg(idx)}
									key={idx}
								/>
							))}
						</div>
					</div>
					<div className="description p-5">
						<h3 className="font-bold text-2xl mb-4">{product.name}</h3>
						<h3 className="flex text-red-400 items-center mb-2">
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<p className="ml-1">(30)</p>
						</h3>
						<p className="font-semibold">Details:</p>
						<p className="text-gray-500 mb-4">{product.details}</p>
						<p className="font-bold text-3xl text-red-500 mb-4">{product.price} $</p>
						<div className="quantity flex w-[7rem] border mb-5">
							<button
								className="flex-1 text-red-500 rounded-sm active:bg-red-300"
								onClick={decreaseQuantity}
							>
								-
							</button>
							<span className="flex-1 text-center ">{quantity}</span>
							<button
								className="flex-1 text-green-500 rounded-sm active:bg-green-300"
								onClick={increaseQuantity}
							>
								+
							</button>
						</div>
						<div className="buttons mt-10">
							<button
								className="w-[10rem] py-2 px-5 mr-5 rounded-sm border border-red-400 text-red-400 font-bold active:translate-y-[-5px] transition-all"
								onClick={handleAddToCart}
							>
								Add to Cart
							</button>
							<button
								className="w-[10rem] py-2 px-4 rounded-sm bg-red-400 text-white font-bold active:translate-y-[-5px] transition-all"
								onClick={handleBuyNow}
							>
								Buy now
							</button>
						</div>
					</div>
				</div>
				<h1 className="text-center mt-20 font-bold text-3xl">You may also like</h1>
				<div className="marquee-container max-w-[85vw] mx-auto overflow-hidden mt-10 ">
					<div className="track flex gap-10 p-3 w-[100vw]">
						{products.map((product: any) => (
							<Product product={product} key={product._id} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;

export const getStaticPaths = async () => {
	const query = `*[_type == "products"] {
    slug {
      current
    }
  }
  `;

	const products = await client.fetch(query);
	const paths = products.map((product: any) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const detailQuery = `*[_type == "products" && slug.current == '${slug}'][0]`;
	const product = await client.fetch(detailQuery);
	const productsQuery = `*[_type == "products"]`;
	const products = await client.fetch(productsQuery);

	return {
		props: {
			product,
			products,
		},
	};
};
