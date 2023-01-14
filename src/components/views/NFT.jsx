import Head from 'next/head';
import { useState, useEffect } from 'react';
import { generateSVG64 } from '../../utils/svgRoute/svg';
import Image from 'next/image';

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
};

export default function NFTSVGPreview() {
	const [SVG64, setSVG64] = useState(``);
	const [SVG, setSVG] = useState(``);

	const getSVG = async query => {
		const url = `/api/svg?tokenid=${query.tokenId}&year=${query.year}&month=${query.month}&day=${query.day}&color=${query.color}&uid=${query.uid}`;
		const res = await fetch(url);
		const { svg64 } = await res.json();
		// console.log(svg64);
		if (svg64.length > 5) setSVG64(svg64);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			query.tokenId = e.target.tokenId.value;
			query.year = e.target.date.value.split('-')[0];
			query.month = e.target.date.value.split('-')[1];
			query.day = e.target.date.value.split('-')[2];
			query.color = e.target.color.value;

			// Generate on frontend
			// setSVG64(generateSVG64(query.tokenId, query.year, query.month, query.day, query.color, query.uid));

			// Generate on backend
			getSVG(query);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="w-screen flex flex-col justify-center items-center gap-2 px-4 py-6 dark:bg-red-600">
			<Head>
				<title>NFT SVG</title>
			</Head>
			<form className="w-screen flex flex-col justify-center items-center gap-6 px-4 py-6" onSubmit={handleSubmit}>
				<input type="text" name="tokenId" defaultValue={tokenId} placeholder={tokenId} />
				<input type="date" name="date" className="h-fit w-fit p-2 rounded-md shadow-md shadow-white" />
				<select name="color" id="color" className="h-fit w-fit p-2 rounded-md shadow-md shadow-white">
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

					<code className="break-all overflow-y-scroll w-full h-44 select-none">{SVG64}</code>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
