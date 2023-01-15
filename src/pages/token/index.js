import NFTSVGPreview from '@/components/views/NFT';
import Head from 'next/head';

export default function NFTSVG() {
	return (
		<>
			<Head>
				<title>Token: NFT Preview</title>
			</Head>
			<NFTSVGPreview />
		</>
	);
}
