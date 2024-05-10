import styled from "styled-components";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { useState } from "react";

const TitleDiv = styled.div`
	margin-top: 8rem;
	& h3 {
		margin: 0.5rem auto;
	}
	& p {
		margin: 0.9em auto;
		color: var(--grey);
	}
`;

const ProductItemDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3.7rem auto;
	gap: 2.5rem;

	@media (min-width: 580px) {
		grid-template-columns: repeat(2, 1fr);
		display: grid;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Button = styled.button`
	padding: 10px 20px;
	margin: 0 5px;
	background-color: ${({ active }) => (active ? "darkorange" : "white")};
	color: ${({ active }) => (active ? "white" : "black")};
	border: 1px solid gray;
	cursor: pointer;

	&:hover {
		background-color: ${({ active }) => (active ? "darkorange" : "darkorange")};
		color: white;
	}
`;

const Products = ({ DUMMY_LIST }) => {
	const { cartState, cartDispatch } = useContext(CartContext);
	const [activeCategory, setActiveCategory] = useState("ALL");

	const handleCategoryChange = (category) => {
		setActiveCategory(category);
		cartDispatch({ type: "FILTER_ITEMS", payload: category });
	};
	return (
		<section>
			<TitleDiv>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div>
						<h3>Все товары</h3>
						<p>
							Лучшие товары по лучшим ценам, если они вам нужны, они у нас есть.
						</p>
					</div>
					<div>
						<Button
							active={activeCategory === "ALL"}
							onClick={() => handleCategoryChange("ALL")}
						>
							Все
						</Button>
						<Button
							active={activeCategory === "GARDEN"}
							onClick={() => handleCategoryChange("GARDEN")}
						>
							Садовая
						</Button>
						<Button
							active={activeCategory === "HOUSEHOLD"}
							onClick={() => handleCategoryChange("HOUSEHOLD")}
						>
							Бытовая
						</Button>
					</div>
				</div>
			</TitleDiv>
			<ProductItemDiv>
				{cartState.items.map((e) => (
					<ProductItem key={e.id} item={e} />
				))}
			</ProductItemDiv>
		</section>
	);
};

export default Products;
