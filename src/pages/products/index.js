// import CategoryFilters from '@/components/layouts/CategoryFilters';
// import ProductList from '@/components/views/ProductList';
// import ProductQuickview from '@/components/views/ProductQuickview';
import { CategoryFilters, ProductList, ProductQuickview } from '@/components';
import { useState } from 'react';
import Data from '/db.json';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '@/redux/actions';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Products({ products }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const { products: productsRedux } = useSelector(state => state.appData.products);

	useEffect(() => {
		dispatch(setProducts(products));
		toast.info('More products coming soon!');
	}, []);

	return (
		<>
			{/* Box with all the filters */}
			<CategoryFilters>
				<ProductList products={products} />
			</CategoryFilters>

			{/* <ProductQuickview open={open} setOpen={setOpen} /> */}
			{/* <button onClick={() => setOpen(true)} className="w-80 mt-50 bg-red-600">
				Open
			</button> */}
		</>
	);
}

export async function getServerSideProps() {
	// * Api calls
	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
	const products = res.data;
	console.log(products);
	return {
		props: {
			products,
		},
	};
}
