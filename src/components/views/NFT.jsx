import Head from 'next/head';
import { useState, useEffect } from 'react';
import { generateSVG64 } from '../../utils/svgRoute/svg';
import Image from 'next/image';
import { getDate } from 'date-fns';

const tokenId = 11546846435165;
const color = [
	{ id: 0, name: 'Blue' },
	{ id: 1, name: 'Red' },
	{ id: 2, name: 'Green' },
	{ id: 3, name: 'Black' },
	{ id: 4, name: 'Silver' },
	{ id: 5, name: 'Gold' },
	{ id: 6, name: 'Neon' },
	{ id: 7, name: 'Pearl' },
];

const query = {
	tokenId: tokenId,
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
		const url = `/api/svg?tokenId=${query.tokenId}&year=${query.year}&month=${query.month}&day=${query.day}&color=${query.color}&title=${query.title}`;
		const res = await fetch(url);
		const { svg64 } = await res.json();
		setSVG64(svg64);
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
		<div className="w-screen min-h-screen flex flex-col justify-start items-center gap-2 bg-gradient-to-r from-gray-300 via-gray-50 to-gray-300 dark:from-gray-900 dark:via-gray-600 dark:to-black select-none">
			<Head>
				<title>NFT SVG</title>
			</Head>
			<form className="w-11/12 sm:w-6/12 flex flex-col justify-center items-center gap-6 py-6" onSubmit={handleSubmit}>
				<input className="w-11/12 rounded-md shadow-white p-2" type="text" name="title" defaultValue={query.title} placeholder="NFT Title" />

				<input className="w-11/12 rounded-md shadow-white p-2" type="text" name="tokenId" defaultValue={tokenId} placeholder={tokenId} />

				<input type="date" name="date" defaultValue={'2023-01-01'} className="h-fit w-11/12  p-2 rounded-md shadow-md shadow-white" />

				<select name="color" id="color" className="h-fit w-11/12  p-2 rounded-md shadow-md shadow-white">
					{color.map((color, index) => (
						<option key={index} value={color.id}>
							{color.name}
						</option>
					))}
				</select>

				<button type="submit" className="h-fit w-fit px-6 py-2 backdrop-blur-lg border-2 rounded-md shadow-md hover:shadow-white">
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
