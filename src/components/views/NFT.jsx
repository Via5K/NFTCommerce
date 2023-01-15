import Head from 'next/head';
import { useState, useEffect } from 'react';
import { generateSVG64 } from '../../utils/tokens/token';
import Image from 'next/image';
import { getDate } from 'date-fns';

const color = [
	{ id: 0, name: 'Blue' },
	{ id: 1, name: 'Red' },
	{ id: 2, name: 'Green' },
	{ id: 3, name: 'Silver' },
	{ id: 4, name: 'Gold' },
	{ id: 5, name: 'Neon' },
	{ id: 6, name: 'Pearl' },
	{ id: 7, name: 'Black' },
];

const query = {
	tokenId: 12345678,
	year: 2021,
	month: 10,
	day: 10,
	color: 0,
	uid: '_uid_5242kmkj__',
	title: 'NFT Title',
};

export default function NFTSVGPreview() {
	const [SVG64, setSVG64] = useState(``);
	const [SVG, setSVG] = useState(``);

	const getSVG = async query => {
		try {
			const url = `/api/token?tokenId=${query.tokenId}&year=${query.year}&month=${query.month}&day=${query.day}&color=${query.color}&title=${query.title}`;
			const res = await fetch(url);
			const svg64 = await res.json();
			if (svg64 && svg64.includes('data:image/svg+xml;base64,') && svg64.length > 10000) setSVG64(svg64);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			if (!e.target.date.value) return alert('Date is required');
			query.year = e.target.date.value.split('-')[0];
			query.month = e.target.date.value.split('-')[1];
			query.day = e.target.date.value.split('-')[2];
			query.color = e.target.color.value;
			query.tokenId = e.target.tokenId.value;
			query.uid = e.target.title.value;
			query.title = e.target.title.value;

			// Generate on frontend
			// setSVG64(generateSVG64(query.tokenId, query.year, query.month, query.day, query.color, query.uid));

			// Generate on backend
			getSVG(query);
		} catch (err) {
			console.log(err);
		}
	};

	function getToday() {
		const today = new Date();
		const year = today.getFullYear();
		const month = today.getMonth() + 1;
		const day = today.getDate();
		return `${year}-${month}-${day}`;
	}

	return (
		<div className="w-screen min-h-screen flex flex-col justify-start items-center gap-2 select-none">
			<Head>
				<title>NFT SVG</title>
			</Head>
			<form className="w-11/12 sm:w-6/12 flex flex-col justify-center items-center gap-6 py-6" onSubmit={handleSubmit}>
				<input
					className="w-11/12 rounded-md shadow-white shadow-md outline-none p-2"
					type="text"
					name="title"
					defaultValue={query.title}
					placeholder="NFT Title"
				/>

				<input
					className="w-11/12 rounded-md shadow-white shadow-md outline-none p-2"
					type="text"
					name="tokenId"
					defaultValue={query.tokenId}
					placeholder={query.tokenId}
				/>

				<input type="date" name="date" defaultValue={'2023-01-01'} className="h-fit w-11/12  p-2 rounded-md shadow-md shadow-white outline-none" />

				<select name="color" id="color" className="h-fit w-11/12  p-2 rounded-md shadow-md shadow-white outline-none">
					{color.map((color, index) => (
						<option key={index} value={color.id}>
							{color.name}
						</option>
					))}
				</select>

				<button
					type="submit"
					className="h-fit w-fit px-6 py-2 backdrop-blur-lg border-2 rounded-md shadow-white shadow-sm hover:shadow-white hover:shadow-md "
				>
					{' '}
					SVG{' '}
				</button>
			</form>

			{SVG ? SVG : <></>}

			{SVG64 ? (
				<>
					<img src={SVG64} alt="SVG" />

					<button
						onClick={() => navigator.clipboard.writeText(SVG64)}
						className="h-fit w-fit px-6 py-2 backdrop-blur-lg border-2 rounded-md shadow-md hover:shadow-white"
					>
						Copy Encoded SVG URL to Clipboard | Length: {SVG64.length}
					</button>

					<code className="break-all overflow-y-scroll w-11/12 h-44 select-none">{SVG64}</code>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
