import React, { createContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
	openModal: boolean;
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	cart: any[];
	setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export const CartContext = createContext<ContextProps>(null);

export const ContextProvider = function ({ children }) {
	const [openModal, setOpenModal] = useState(false);
	const [cart, setCart] = useState<any[]>([]);

	const ctx = {
		openModal,
		setOpenModal,
		cart,
		setCart,
	};

	return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
};
