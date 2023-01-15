import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="author" content="D-Commerce: NFT in E-Commerce DApp" />
				<meta name="description" content="NFT in E-Commerce DApp" />
				<meta name="keywords" content="NFT, DApp, E-Commerce, Blockchain, NFT Marketplace, SVG, Token" />
				<meta name="robots" content="index, follow" />
				<meta name="language" content="English" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<body className="overflow-x-hidden  bg-gradient-to-r from-gray-300 via-gray-50 to-gray-300 dark:from-gray-900 dark:via-gray-600 dark:to-black">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`/api/token/${123456}`);
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
}
