import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function TransactionCard() {
	return (
		<div className="overflow-hidden backdrop-blur-3xl shadow sm:rounded-lg">
			<div className="px-4 py-5 sm:px-6 bg-white/60">
				<h3 className="text-lg font-medium leading-6 text-primary">Transaction Information</h3>
				<p className="mt-1 max-w-2xl text-sm text-secondary">Personal details and application.</p>
			</div>
			<div className="border-t border-gray-200">
				<dl>
					<div className="bg-gray-50/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-secondary">From</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">Margot Foster</dd>
					</div>
					<div className="bg-white/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-secondary">From Address</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">4257y0176057260497r692</dd>
					</div>
					<div className="bg-gray-50/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-secondary">To</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">Neeraja Nauty</dd>
					</div>
					<div className="bg-white/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-secondary">To Address</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">652461463146354163514651</dd>
					</div>
					<div className="bg-gray-50/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-secondary">Email address</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
					</div>
					<div className="bg-white/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-secondary">Salary expectation</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">$120,000</dd>
					</div>
					<div className="bg-gray-50/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-secondary">About</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">
							Project bnale saale jldi se time kamm ha aur kaam zrada. Kb khoon khaulega re tera, koi contract to ready kr jise call krke frontend pe
							kaam kr sake aur fir backend aur data base bi create krna ha. eu.
						</dd>
					</div>
					<div className="bg-white/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-secondary">Attachments</dt>
						<dd className="mt-1 text-sm text-primary sm:col-span-2 sm:mt-0">
							<ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
								<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
									<div className="flex w-0 flex-1 items-center">
										<PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
										<span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
									</div>
									<div className="ml-4 flex-shrink-0">
										<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
											Download
										</a>
									</div>
								</li>
								<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
									<div className="flex w-0 flex-1 items-center">
										<PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
										<span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
									</div>
									<div className="ml-4 flex-shrink-0">
										<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
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
