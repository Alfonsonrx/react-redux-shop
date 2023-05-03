import React from 'react';
import OrderItem from '../components/OrderItem';
import { useSelector } from 'react-redux';

import '../styles/MyOrder.scss';
import flechita from '../assets/icons/flechita.svg';

const MyOrder = () => {
	const { cart }=useSelector((state)=>state.cart);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0);
		return sum;
	}

    return (
        <aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{cart.map((product, index)=>(
					<OrderItem indexValue={index} key={index} product={product} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
    );
}

export default MyOrder;