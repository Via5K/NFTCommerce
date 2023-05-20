import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function TransactionCard({ txn, time }) {
	return (
		<div className="overflow-hidden backdrop-blur-3xl shadow-2xl sm:rounded-lg">
			<div className="px-4 py-2.5 sm:px-6 backdrop-blur-3xl">
				<h3 className="text-lg font-semibold leading-6 text-primary">Transaction Information</h3>
				<p className="mt-1 max-w-2xl text-sm text-secondary">Date: {`${time}`}</p>
			</div>

			<div className="border-t border-gray-200">
				<dl>
					<div className="backdrop-blur-xl px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">From</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">{txn.from}</dd>
					</div>
					<div className="backdrop-blur px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">To</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">{txn.to}</dd>
					</div>
					<div className="backdrop-blur-xl px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">Hash</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">{txn.hash}</dd>
					</div>
					<div className="backdrop-blur px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">Block Number</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">{txn.blockNumber}</dd>
					</div>
					<div className="backdrop-blur-xl px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">Block Hash</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">{txn.blockHash}</dd>
					</div>
					<div className="backdrop-blur px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">Value</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">{txn.value}</dd>
					</div>
					<div className="backdrop-blur-xl px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">Gas</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">{txn.gas}</dd>
					</div>
					<div className="backdrop-blur px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">Gas Price</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">{txn.gasPrice}</dd>
					</div>
					<div className="backdrop-blur-xl px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">Gas Used</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">{txn.gasUsed}</dd>
					</div>
					<div className="backdrop-blur px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-semibold text-secondary">Attachments</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">
							<ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
								<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
									<div className="flex w-0 flex-1 items-center">
										<PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
										<span className="ml-2 w-0 flex-1 truncate">front_view.png</span>
									</div>
									<div className="ml-4 flex-shrink-0">
										<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
											Download
										</a>
									</div>
								</li>
								<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
									<div className="flex w-0 flex-1 items-center">
										<PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
										<span className="ml-2 w-0 flex-1 truncate">back_view.png</span>
									</div>
									<div className="ml-4 flex-shrink-0">
										<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
											Download
										</a>
									</div>
								</li>
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
}
