import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios(`${process.env.REACT_APP_API_URL}/api/v1/products`);
			setProducts(response.data);
		}
		fetchData();
	}, []);

	return products;
};

export default useGetProducts;