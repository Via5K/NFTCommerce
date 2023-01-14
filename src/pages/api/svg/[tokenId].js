import { generateSVG64 } from '../../../utils/svgRoute/svg.js';
import { isNumeric, colorToMaterialName, isLeapYear, toDate } from '../../../utils/svgRoute/dateFunctions.js';

const sampleQuery = {
	tokenId: 1654165,
	year: 2021,
	month: 10,
	day: 10,
	color: 7,
	uid: 'NFT SVG Token',
};

export default function handler(req, res) {
	try {
		const { tokenId } = req.query;

		// TODO Update sampleQuery with NFT data fetched from the blockchain

		if (req.method === 'GET') {
			if (!req.query.tokenId) return res.status(400).send({ message: `Missing token id! ` });
			else if (!isNumeric(tokenId)) return res.status(400).send({ message: `Invalid token id! ` });

			const base64encodedSVG = generateSVG64(tokenId, sampleQuery.year, sampleQuery.month, sampleQuery.day, sampleQuery.color, sampleQuery.uid);

			return res.status(200).json({ svg64: base64encodedSVG });
		} else {
			// Handle any other HTTP method
			res.status(400).send({ message: `${req.method} requests are not allowed.` });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).send({ message: err });
	}
	return res.status(500).send({ message: 'Internal server error!' });
}
