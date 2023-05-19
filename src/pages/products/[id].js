import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MintNFT } from '@/data/contracts';
import Image from 'next/image';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper';
import { ShoppingBagIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';

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
					<Image className="w-11/12 object-cover sm:w-8/12 h-max rounded-lg shadow-sm" src={product.image} height={600} width={600} alt=""></Image>
				)}

				<div className="text-primary flex flex-col sm:flex-row gap-2 justify-between md:justify-evenly w-full">
					<span className=" text-center text-xl font-bold">{product?.name}</span>

					<span className="text-center text-lg  font-bold">{product && `₹${product?.price}`}</span>
				</div>

				<p className="text-sm subtext-primary">Seller: {product?.seller}</p>

				<p className="w-full subtext-primary text-sm font-semibold">{product?.description}</p>

				<div className="relative w-full max-w-sm mx-auto mb-20">
					<Swiper
						modules={[EffectCards, Autoplay, Pagination]}
						effect={'cards'}
						grabCursor={true}
						loop={true}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						className="mySwiper mx-auto w-10/12 max-w-md p-12"
					>
						{product?.images?.length > 0 &&
							product.images.map((image, index) => (
								<SwiperSlide key={index} className="overflow-hidden hover:scale-105 transition-all">
									<Image
										className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all "
										src={image}
										height={400}
										width={400}
										alt=""
									></Image>
								</SwiperSlide>
							))}
					</Swiper>
				</div>

				{/* <button className="fixed z-10 bottom-6 btn-primary px-10 animate-bounce" onClick={buyProducts}>
					Buy
				</button> */}

				<div className="btm-nav z-10 bg-transparent backdrop-blur-sm text-primary w-screen">
					<button className="hover:active hover:bg-transparent hover:scale-x-105" onClick={buyProducts}>
						<ShoppingBagIcon />
						<span className="btm-nav-label text-primary">Buy</span>
					</button>
					<button className="hover:active hover:bg-transparent hover:scale-x-105" onClick={buyProducts}>
						<ShoppingCartIcon />
						<span className="btm-nav-label text-primary">Add to Cart</span>
					</button>
					<button className="hidden sm:flex hover:active hover:bg-transparent hover:scale-x-105">
						<HeartIcon />
						<span className="btm-nav-label text-primary">Add to Favourites</span>
					</button>
				</div>
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
