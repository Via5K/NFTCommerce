// import CategoryFilters from '@/components/layouts/CategoryFilters';
// import ProductList from '@/components/views/ProductList';
// import ProductQuickview from '@/components/views/ProductQuickview';
import { CategoryFilters, ProductList, ProductQuickview } from '@/components';
import { useState } from 'react';
import Data from '/db.json';

export default function Products({ products }) {
	const [open, setOpen] = useState(false);
	console.log(Data.products);
	return (
		<>
			{/* Box with all the filters */}
			<CategoryFilters>{/* <ProductList products={[...Data.products]} /> */}</CategoryFilters>
			<ProductQuickview open={open} setOpen={setOpen} />
			{/* <button onClick={() => setOpen(true)} className="w-80 mt-50 bg-red-600">
				Open
			</button> */}
		</>
	);
}

const products = [
	{
		id: 1,
		name: 'White Crocodile Twist Bag',
		description:
			"Louis Vuitton Crocodile Skin Bag Twist BagMatte white exotic skin bag with shiny silver hardware.Twist 'LV' logo closure and sliding should and Crocodileskin/leather shoulder/crossbody strap.Size - Height 16cm, Width 23cm, Depth 9cmComposition - Crocodile SkinComes With - Bag Only",
		price: 990105.3453,
		seller: '0x82b4F2da4b06cD712ccCEEc9f64c0BCfFd3c6147',
		image: 'https://res.cloudinary.com/dtaakwnul/image/upload/v1674486177/NFTCommerce/LV_bag2/LV_bag2_u2tgem.jpg',
		images: [
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674486422/NFTCommerce/LV_bag2/LV_bag2_d_dl4wsc.jpg',
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674486422/NFTCommerce/LV_bag2/LV_bag2_c_pxsaxz.jpg',
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674486421/NFTCommerce/LV_bag2/LV_bag2_b_oy02d4.jpg',
		],
		category: 'Women Hand Bag',
		specifications: {
			subcategory: 'Twist Bag',
			color: 'white',
			size: '1630x230x90mm',
		},
		keywords: '',
		quantity: 10,
		quantitySold: 150,
		timestamp: 1620000000,
		rating: [4, 5],
	},
	{
		id: 2,
		name: 'X Comme Des Garçons Rare Bag',
		description:
			'Featuring the Louis Vuitton emblem print, the Louis Vuitton x Comme des Garçons Burned Holes Monogram Tote bag was originally crafted in 2014. The cut-out detailing finely represents the burnt holes and the dust bag provided with the bag secures important essentials with the drawstring closure.Louis Vuitton Louis Vuitton X Comme Des Garçons Burned Holes Monogram Tote Bag-Color: brownMaterial: Leather',
		price: 1028859.9074,
		seller: '0x82b4F2da4b06cD712ccCEEc9f64c0BCfFd3c6147',
		image: 'https://res.cloudinary.com/dtaakwnul/image/upload/v1674486170/NFTCommerce/LV_bag1/LV_bag1_ekompf.jpg',
		images: [
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674486829/NFTCommerce/LV_bag1/LV_bag1_b_ue9ulf.jpg',
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674486829/NFTCommerce/LV_bag1/LV_bag1_c_bzxbmj.jpg',
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674486829/NFTCommerce/LV_bag1/LV_bag1_d_jkn2hg.jpg',
		],
		category: 'Women Hand Bag',
		specifications: {
			subcategory: 'Tote Bag',
			color: 'Brown',
			size: '1x420x400mm',
		},
		keywords: '',
		quantity: 20,
		quantitySold: 150,
		timestamp: 1620000000,
		rating: [4, 5],
	},
	{
		id: 3,
		name: 'Gucci Bamboo 1947 small top handle bag',
		description:
			"Heritage elements are reimagined with a contemporary twist throughout The Gucci Aria collection. An emblem of Gucci's origins, bamboo has appeared throughout the House's collections since the '40s. After over eight decades, the material is paired with black leather and two interchangeable shoulder straps atop this small bag—a smooth leather version enhances the style's classic feel while the Web stripe adds logo appeal.",
		price: 9900210,
		seller: '0x82b4F2da4b06cD712ccCEEc9f64c0BCfFd3c6147',
		image: 'https://res.cloudinary.com/dtaakwnul/image/upload/v1674491803/NFTCommerce/Gucci_bag/G_bag1_a_yyebf2.avif',
		images: [
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674491556/NFTCommerce/Gucci_bag/G_bag1_a_m2lvlj.avif',
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674491726/NFTCommerce/Gucci_bag/G_bag1_d_o5oyaa.avif',
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674491726/NFTCommerce/Gucci_bag/G_bag1_c_owjvgu.avif',
		],
		category: 'Female Hand Bag',
		specifications: {
			subcategory: 'Twist Bag',
			size: '6x8.3x2.75',
		},
		keywords: '',
		quantity: 20,
		quantitySold: 150,
		timestamp: 1620000000,
		rating: [4, 5],
	},
	{
		id: 4,
		name: 'Large Flower Mini Matryoshka',
		description:
			'Made from butter-soft calf leather and topped with a handcrafted flower, this Mini Matryoshka bag will lend romance to any ensemble.Stud-fastening strap at topSnake chainBrass feetUnlinedComposition100% Leather',
		price: 99002,
		seller: '0x82b4F2da4b06cD712ccCEEc9f64c0BCfFd3c6147',
		image: 'https://res.cloudinary.com/dtaakwnul/image/upload/v1674492671/NFTCommerce/CH_bag/CH_bag_a_f6wsgy.avif',
		images: [
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674492672/NFTCommerce/CH_bag/CH_bag_b_ipgzyw.avif',
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674492671/NFTCommerce/CH_bag/CH_bag_c_nrino2.avif',
		],
		category: 'Female Hand Bag',
		specifications: {
			subcategory: 'Leather Bag',
			size: '220mmx140mmx95mm',
		},
		keywords: '',
		quantity: 20,
		quantitySold: 150,
		timestamp: 1620000000,
		rating: [4, 5],
	},
	{
		id: 5,
		name: "Nike Air Force 1 '07 LV8",
		description:
			"Vintage details elevate an icon to bring you timeless style that's easy to wear. Real and synthetic leather give these kicks a classic feel, while layered Swoosh logos and exposed foam on the tongue add a retro look. Of course, some things never change: Nike Air units still cushion your every step.",
		price: 10795,
		seller: '0x82b4F2da4b06cD712ccCEEc9f64c0BCfFd3c6147',
		image: 'https://res.cloudinary.com/dtaakwnul/image/upload/v1674492979/NFTCommerce/Nike%20Shoes/NIke%20Airforce%201/Nike_AF1_a_febzm2.webp',
		images: [
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674492979/NFTCommerce/Nike%20Shoes/NIke%20Airforce%201/Nike_AF1_b_y3xegx.webp',
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674492979/NFTCommerce/Nike%20Shoes/NIke%20Airforce%201/Nike_AF1_c_he3txt.webp',
			'https://res.cloudinary.com/dtaakwnul/image/upload/v1674492979/NFTCommerce/Nike%20Shoes/NIke%20Airforce%201/Nike_AF1_d_woavdr.webp',
		],
		category: 'Footwear',
		specifications: {
			subcategory: 'Nike Shoes',
			size: '6,7,8,9,10',
		},
		keywords: '',
		quantity: 20,
		quantitySold: 150,
		timestamp: 1620000000,
		rating: [4, 5],
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 2,
		name: 'Basic Tee',
		href: '#',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 3,
		name: 'Basic Tee',
		href: '#',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 4,
		name: 'Basic Tee',
		href: '#',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 5,
		name: 'Basic Tee',
		href: '#',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	// More products...
];

export async function getStaticProps() {
	// * Api calls
	return {
		props: {
			products,
		},
	};
}
