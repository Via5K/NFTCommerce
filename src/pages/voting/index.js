import PromptModal from '@/components/layouts/PromptModal';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const VOTING = [
	{
		id: 1,
		title: 'iPhone Pro Max Gold Edition',
		description: 'Apple iPhone Pro Max Gold Edition with a mechanical clock on back. Limited quantity only 99 pieces were evermade.',
	},
	{
		id: 2,
		title: 'JK Rowling Books & Audiobooks Collection',
		description: 'The first edition of JK Rowling books collection along with digital version and audiobooks. Limited quantity.',
	},
	{
		id: 3,
		title: 'George R.R. Martin Books & Audiobooks Collection',
		description: 'The first edition of George R.R. Martin books collection along with digital version and audiobooks. Limited quantity.',
	},
	{
		id: 4,
		title: 'Tolkin Books & Audiobooks Collection',
		description: 'The first edition of Tolkin books collection along with digital version and audiobooks. Limited quantity.',
	},
];

export default function Voting() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		toast.info('You can vote for your item of choice.');
	}, []);

	useEffect(() => {
		if (open) toast.success('Successfully voted.');
		else toast.error('Voting unsuccessful. try again later.');
	}, []);

	return (
		<main className="flex justify-center p-4 sm:px-28">
			<div className="container flex flex-col gap-8 mx-auto my-14">
				{VOTING.map(item => (
					<div
						key={item.id}
						className="relative px-4 py-8 rounded-xl flex flex-col justify-center backdrop-blur bg-gradient-to-tr from-slate-900/10 via-black/10 to-gray-800/30 shadow-2xl"
					>
						<h1 className="text-primary text-lg font-bold">{item.title}</h1>
						<p className="subtext-primary ">{item.description}</p>
						<button className="absolute bottom-3 right-3 btn-primary" onClick={() => setOpen(true)}>
							Vote
						</button>
					</div>
				))}
			</div>
			<PromptModal open={open} setOpen={setOpen} />
		</main>
	);
}
