import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MintNFT } from '@/data/contracts';
import Image from 'next/image';
import axios from 'axios';

export default function ProductPage(props) {
	const router = useRouter();
	const { id } = router.query;
	const [product, setProduct] = useState(null);
	console.log(props.product);

	useEffect(() => {
		if (!props?.product) {
			alert('Product not found');
			setTimeout(() => {
				router.push('/products');
			}, 3000);
		}
		setProduct(props.product);

		buyProducts();
		console.log(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
	}, [props]);

	function buyProducts() {
		MintNFT(product);
	}

	return (
		<div>
			<h1>Product Page {id}</h1>

			<div className="flex flex-col gap-4 justify-center items-center">
				{product?.image && <Image className="w-full sm:w-8/12 lg:w-3/5 h-max" src={product.image} height={300} width={300} alt=""></Image>}

				<h2 className="w-full text-center text-lg font-bold">{product?.name}</h2>

				<p className="w-full text-center text-sm font-bold">{product?.description}</p>

				<button className="btn-primary" onClick={buyProducts}>
					Buy
				</button>
			</div>

			{product && <p>{JSON.stringify(product)}</p>}
		</div>
	);
}

export async function getServerSideProps(context) {
	const { id } = context.params;
	// axios get req
	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
	const products = res.data;
	const product = products.find(item => item.id == id);

	return {
		props: {
			product,
		},
	};
}
