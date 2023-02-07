import Head from 'next/head';
import { Welcome } from '@/components';

export default function Home() {
	return (
		<>
			<Head>
				<title>NFT in Commerce</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="overflow-x-hidden">
				<Welcome />
			</main>
		</>
	);
}
