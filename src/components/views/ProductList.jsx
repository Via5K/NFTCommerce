import { useState } from 'react';
import ProductQuickview from './ProductQuickview';
// import Data from '/db.json';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductList({ products }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="backdrop-blur-md">
			{/* TODO use redux for this  */}
			{/* <ProductQuickview open={open} setOpen={setOpen} /> */}

			<div className="mx-auto max-w-2xl py-3 px-2 sm:px-6 lg:max-w-7xl lg:px-8 max-h-[82vh] overflow-y-scroll overflow-x-hidden">
				<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
					{products.map(product => (
						<div
							key={product.id + Math.random()}
							className="group min-w-[120px] relative hover:-translate-y-1 backdrop-blur-3xl"
							onClick={() => setOpen(open => !open)}
						>
							<div className="relative min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:scale-105 lg:aspect-none lg:h-80">
								{/* <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" /> */}
								<Image
									src={product.image}
									alt={product.name}
									width={300}
									height={600}
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
							</div>

							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-primary">
										<span aria-hidden="true" className="absolute inset-0 max-h-10 overflow-hidden" />
										{product.name}
										{/* <a href={product.href}>
										</a> */}
									</h3>

									<p className="mt-1 text-sm text-secondary">{product.category}</p>
								</div>

								<p className="text-sm font-medium text-primary">₹{product.price}</p>
							</div>

							<Link href={`/products/${product.id}`} className="absolute top-1 right-1 btn-primary py-1 px-2 scale-95 hover:scale-100">
								Buy
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
