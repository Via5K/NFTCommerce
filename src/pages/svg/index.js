import NFTSVGPreview from '@/components/NFT';
import Head from 'next/head';

export default function NFTSVG() {
	return (
		<>
			<Head>
				<title>NFT SVG Preview</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NFTSVGPreview />
		</>
	);
}
