import TransactionCard from '@/components/views/TransactionCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { set } from 'date-fns';
import MyDisclosure from '@/components/ui/MyDisclosure';
import { Tab } from '@headlessui/react';
import { useSelector } from 'react-redux';

export default function Transactions() {
	const [normalTxn, setNormalTxn] = useState({});
	const [internalTxn, setInternalTxn] = useState({});
	const [blocksMined, setBlocksMined] = useState({});
	const address = useSelector(state => state.appData.address) || '0x82b4F2da4b06cD712ccCEEc9f64c0BCfFd3c6147';

	useEffect(() => {
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
					`https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`
				);
				console.log(res?.data);
				setNormalTxn({ ...res.data });
			}
			if (address) {
				// Internal Transactions
				const res = await axios.get(
					`https://api-goerli.etherscan.io/api?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`
				);
				console.log('Internal: ', res.data);
				setInternalTxn({ ...res.data });
			}
			if (address) {
				// Blocks Mined
				const res = await axios.get(
					`https://api-goerli.etherscan.io/api?module=account&action=getminedblocks&address=${address}&blocktype=blocks&page=1&offset=10&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`
				);
				console.log('Internal: ', res.data);
				setBlocksMined({ ...res.data });
			}
		}
		getData();
	}, []);

	return (
		<main className="flex flex-col px-2 py-5 sm:px-28 min-h-screen">
			<Tab.Group>
				<Tab.List className="flex sm:justify-center gap-2 sm:gap-6 w-full py-4">
					<Tab className="text-primary rounded-3xl bg-gray-200/50 backdrop-blur-md px-3 py-1 transition-all hover:scale-105">Normal Transactions</Tab>
					<Tab className="text-primary rounded-3xl bg-gray-200/50 backdrop-blur-md px-3 py-1 transition-all hover:scale-105">
						Internal Transactions
					</Tab>
					<Tab className="text-primary rounded-3xl bg-gray-200/50 backdrop-blur-md px-3 py-1 transition-all hover:scale-105">Blocks Mined</Tab>
				</Tab.List>

				<Tab.Panels>
					<Tab.Panel>
						<section className="flex flex-col gap-2">
							<h2 className="text-primary font-bold text-lg">Normal Transactions</h2>
							{normalTxn.status === '1' &&
								normalTxn.result.map((txn, index) => {
									const time = new Date(txn.timeStamp * 1000);
									console.log(time);
									return (
										<MyDisclosure key={index} heading={`${time}`}>
											<TransactionCard txn={txn} time={`${time}`} />
											<div className="flex flex-col gap-2 py-4 backdrop-blur-md rounded-md" key={index}>
												<p className="text-primary">Time: {`${time}`}</p>
												<p className="text-primary">Hash: {txn.hash}</p>
												<p className="text-primary">From: {txn.from}</p>
												<p className="text-primary">To: {txn.to}</p>
												<p className="text-primary">Value: {txn.value}</p>
												<p className="text-primary">Gas: {txn.gas}</p>
												<p className="text-primary">Gas Price: {txn.gasPrice}</p>
												<p className="text-primary">Gas Used: {txn.gasUsed}</p>
												<p className="text-primary">Time: {txn.timeStamp}</p>
												{/* <p className="text-primary">Time: {new Date(txn.timeStamp * 1000)}</p> */}
											</div>
										</MyDisclosure>
									);
								})}
							<MyDisclosure heading="JSON Data">
								<p className="break-all">{JSON.stringify(normalTxn)}</p>
							</MyDisclosure>
						</section>
					</Tab.Panel>
					<Tab.Panel>
						<section className="flex flex-col gap-2">
							<h2 className="text-primary font-bold text-lg">Internal Transactions</h2>

							<MyDisclosure heading="JSON Data">
								<p className="break-all">{JSON.stringify(internalTxn)}</p>
							</MyDisclosure>
						</section>
					</Tab.Panel>
					<Tab.Panel>
						<section className="flex flex-col gap-2">
							<h2 className="text-primary font-bold text-lg">Blocks Mined</h2>

							<MyDisclosure heading="JSON Data">
								<p className="break-all">{JSON.stringify(blocksMined)}</p>
							</MyDisclosure>
						</section>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</main>
	);
}
