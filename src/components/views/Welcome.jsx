import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const features = [
	{
		name: 'Competitive exchange rates',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: GlobeAltIcon,
	},
	{
		name: 'No hidden fees',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: ScaleIcon,
	},
	{
		name: 'Transfers are instant',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: BoltIcon,
	},
	{
		name: 'Mobile notifications',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: DevicePhoneMobileIcon,
	},
];

const specifications = [
	{ name: 'Authenticity', description: 'Designed by Good Goods, Inc.' },
	{ name: 'Security', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
	{ name: 'Decentralization', description: '6.25" x 3.55" x 1.15"' },
	{ name: 'Security', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
	{ name: 'Authenticity', description: 'Designed by Good Goods, Inc.' },
	{ name: 'Decentralization', description: '6.25" x 3.55" x 1.15"' },
];

export default function Welcome() {
	return (
		<div className=" select-none">
			{/* Hero Section */}

			<div className="relative overflow-hidden">
				<div className="pt-12 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
					<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
						<div className="sm:max-w-lg">
							<h1 className="font text-2xl sm:text-5xl font-bold tracking-tight text-primary">NFT Commerce: Dencetralized E-Commmerce using NFTs</h1>
							<p className="mt-4 text-base sm:text-xl text-secondary break-words">
								This dapp is a decentralized e-commerce platform with NFTs. The dapp is built on the Ethereum blockchain and deployed Goerli network.
								Smart contracts are being developed using Solidity. A sample NFT is displayed{' '}
								<Link href="/api/tokens/123/2023/01/01/7/Happy%20New%20Year%20Folks">here</Link>
							</p>
						</div>
						<div>
							<div className="mt-10">
								{/* Decorative image grid */}
								<div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
									<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
										<div className="flex items-center space-x-6 lg:space-x-8">
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
													{/* <img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/> */}
													<Image src="/token.svg" alt="Sample Token" width={176} height={256} />
													{/* className="h-fit w-fit object-cover object-center" /> */}
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<Link
									href="/products"
									className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
								>
									Shop Collection
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}

			<div className="py-24 sm:py-32 lg:py-40">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="sm:text-center">
						<h2 className="text-lg font-semibold leading-8 text-indigo-600">Transactions</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900  dark:text-gray-200 sm:text-4xl">
							A better way to conduct business on decentralized web
						</p>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark dark:text-gray-400">
							Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
						</p>
					</div>

					<div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
						<div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
							{features.map(feature => (
								<div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
										<feature.icon className="h-8 w-8" aria-hidden="true" />
									</div>
									<div className="sm:min-w-0 sm:flex-1">
										<p className="text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100">{feature.name}</p>
										<p className="mt-2 text-base leading-7 text-gray-500 dark:text-gray-400">{feature.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Specification Section */}
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
				<div>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Technical Specifications</h2>
					<p className="mt-4 text-gray-500  dark:text-gray-300">
						D-Commerce is a decetralized progessive web app NFT in e-commerce. It is built on the Ethereum blockchain and uses the IPFS protocol to
						store images and metadata.
					</p>

					<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{specifications.map(feature => (
							<div key={feature.name} className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-gray-900   dark:text-gray-100">{feature.name}</dt>
								<dd className="mt-2 text-sm text-gray-500   dark:text-gray-200">{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
					<img
						src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
						alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
						className="rounded-lg"
					/>
					<img
						src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
						alt="Top down view of walnut card tray with embedded magnets and card groove."
						className="rounded-lg"
					/>
					<img
						src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
						alt="Side of walnut card tray with card groove and recessed card area."
						className="rounded-lg"
					/>
					<img
						src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
						alt="Walnut card tray filled with cards and card angled in dedicated groove."
						className="rounded-lg"
					/>
				</div>
			</div>

			{/* Section */}

			<div className="">
				<div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
						<span className="block">Ready to dive in?</span>
						<span className="block text-indigo-600">Get started today.</span>
					</h2>
					<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
						<div className="inline-flex rounded-md shadow">
							<a
								href="#"
								className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
							>
								Get started
							</a>
						</div>
						<div className="ml-3 inline-flex rounded-md shadow">
							<a
								href="#"
								className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
