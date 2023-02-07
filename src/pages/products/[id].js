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

		// buyProducts();
		console.log(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
	}, [props]);

	function buyProducts() {
		MintNFT(product);
	}

	return (
		<div>
			<div className="flex py-6 px-3 flex-col gap-8 justify-center items-center w-full md:w-3/4 mx-auto">
				{product?.image && (
					<Image className="w-11/12 object-cover sm:w-8/12 h-max rounded-lg shadow-sm" src={product.image} height={300} width={300} alt=""></Image>
				)}

				<div className="text-primary flex flex-col sm:flex-row gap-2 justify-between md:justify-evenly w-full">
					<span className=" text-center text-xl font-bold">{product?.name}</span>

					<span className="text-center text-lg  font-bold">{product && `₹${product?.price}`}</span>
				</div>

				<p className="text-sm subtext-primary">Seller: {product?.seller}</p>

				<p className="w-full subtext-primary text-sm font-semibold">{product?.description}</p>

				<div className="flex gap-16 justify-center items-center w-full overflow-x-scroll scroll-m-0 scroll-p-0">
					{product?.images?.length > 0 &&
						product.images.map((image, index) => (
							<Image key={index} className="w-full h-max rounded-lg shadow-sm" src={image} height={400} width={400} alt=""></Image>
						))}
				</div>

				<button className="fixed bottom-6 btn-primary px-10 animate-bounce" onClick={buyProducts}>
					Buy
				</button>
			</div>

			{/* {product && <p className="break-words">{JSON.stringify(product)}</p>} */}
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
