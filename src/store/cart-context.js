import React, { useReducer } from "react";
import DUMMY_LIST from "../DUMMY_LIST";

const CartContext = React.createContext({
	cartState: {
		items: [],
		cart: [],
		showModal: false,
	},
	cartDispatch: undefined,
});

const cartInitialState = {
	items: [...DUMMY_LIST],
	cart: [],
	showModal: false,
};

const categoryFilters = {
	ALL: () => true, // Показать все товары
	GARDEN: (item) =>
		[
			"Тачка",
			"Лопатка",
			"Электрическая дрель",
			"Беспроводной молоток",
			"Угловая шлифмашина",
			"Лобзик",
			"Стационарная пила",
			"Шлифовальная машина",
		].includes(item.title), // Садовые товары
	HOUSEHOLD: (item) =>
		[
			"Дрель",
			"Угловая шлифовальная машина",
			"Электрическая дрель",
			"Шлифовальная машина",
			"Набор гаечных ключей",
			"Покрасочный аппарат",
			"Сварочный аппарат",
		].includes(item.title), // Бытовые товары
	TOOLS: (item) =>
		[
			"Пилка",
			"Отвертки",
			"Электрическая дрель",
			"Беспроводной молоток",
			"Циркулярная пила",
			"Угловая шлифмашина",
			"Лобзик",
			"Стационарная пила",
		].includes(item.title), // Инструменты
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE_CART":
			return { ...state, showModal: !state.showModal };

		case "UPDATE_ITEMS":
			const updatedItem = state.items.map((e) =>
				e.id === action.payload.id ? action.payload : e
			);
			return { ...state, items: updatedItem };

		case "UPDATE_CART":
			return { ...state, cart: action.payload ? action.payload : [] };

		case "ADD_CART":
			const existCart = state.cart.find((e) => e.id === action.payload.id);
			let newCart = [];
			if (existCart) {
				newCart = state.cart.map((e) =>
					e.id !== action.payload.id
						? e
						: { ...e, quantity: e.quantity + action.payload.quantity }
				);
			} else {
				newCart = [...state.cart, action.payload];
			}
			return { ...state, cart: newCart };

		case "UPDATE_ITEM_CART":
			const updatedItemCart = state.cart.map((e) =>
				e.id !== action.payload.id
					? e
					: { ...e, quantity: action.payload.quantity }
			);
			return { ...state, cart: updatedItemCart };

		case "DELETE_ITEM_CART":
			const deletedItemCart = state.cart.filter((e) => e.id !== action.payload);
			return { ...state, cart: deletedItemCart ? deletedItemCart : [] };

		case "CLEAR_CART":
			return { ...state, cart: [] };
		case "FILTER_ITEMS":
			const category = action.payload;
			const filterFunction = categoryFilters[category] || categoryFilters.ALL;
			return {
				...state,
				items: DUMMY_LIST.filter(filterFunction),
			};

		default:
			return state;
	}
};

export const CartContextProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

	return (
		<CartContext.Provider value={{ cartState, cartDispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
