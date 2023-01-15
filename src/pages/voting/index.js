import PromptModal from '@/components/layouts/PromptModal';
import { useState } from 'react';

export default function Voting() {
	const [open, setOpen] = useState(true);

	return (
		<main className="flex justify-center p-4 sm:px-28">
			<button onClick={() => setOpen(true)} className="bg-red-600 p-6 rounded-md">
				Open Prompt Modal to Vote
			</button>
			<PromptModal open={open} setOpen={setOpen} />
		</main>
	);
}
