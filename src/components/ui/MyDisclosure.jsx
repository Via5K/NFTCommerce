import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function MyDisclosure({ heading, children }) {
	return (
		<Disclosure>
			<Disclosure.Button className="py-2">
				{heading || `Is team pricing available?`}
				<ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-purple-500`} />
			</Disclosure.Button>

			<Transition
				enter="transition duration-200 ease-out"
				enterFrom="transform scale-75 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-200 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-75 opacity-0"
			>
				<Disclosure.Panel className="text-primary">
					{children ||
						` Yes! You can purchase a license that you can share with your entire
        team.`}
				</Disclosure.Panel>
			</Transition>
		</Disclosure>
	);
}
