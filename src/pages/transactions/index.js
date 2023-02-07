import TransactionCard from '@/components/views/TransactionCard';
import { useEffect } from 'react';
import axios from 'axios';

export default function Transactions() {
	useEffect(() => {
		const address = '0x82b4F2da4b06cD712ccCEEc9f64c0BCfFd3c6147';
		console.log(process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY);
		async function getData() {
			if (address) {
				// Balance
				const res = await axios.get(
					`https://api-goerli.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}}`
				);
				console.log(res.data);
			}
			if (address) {
				// Normal Transactions
				const res = await axios.get(
					`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}}`
				);
				console.log(res.data);
			}
			if (address) {
				// Normal Transactions
				const res = await axios.get(
					`https://api.etherscan.io/api?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}}`
				);
				console.log(res.data);
			}
		}
		getData();
	}, []);

	return (
		<main className="flex justify-center p-4 sm:px-28">
			<TransactionCard />
		</main>
	);
}
