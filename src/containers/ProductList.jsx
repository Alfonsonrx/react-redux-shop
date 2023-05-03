import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductItem from '../components/ProductItem';
import ProductDetail from '../containers/ProductDetail';

import { useSelector } from 'react-redux';

import '../styles/ProductList.scss';

const ProductList = () => {
    const { detailShowed } = useSelector(state=>state.prodDetail)
	const products = useGetProducts();

    return (
        <section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
			{detailShowed && <ProductDetail />}
		</section>
    );
}

export default ProductList;