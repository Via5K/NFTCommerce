import { generateSVG64, generateSVG } from '../../../utils/tokens/token.js';
import { isNumeric, colorToMaterialName, isLeapYear, toDate } from '../../../utils/tokens/dateFunctions.js';

const sampleQuery = {
	tokenId: 123456,
	year: 2023,
	month: 1,
	day: 1,
	color: 7,
	uid: 'NFT SVG Token',
	title: 'NFT SVG Token',
};

export default function handler(req, res) {
	try {
		const { tokenId } = req.query;

		// TODO Update sampleQuery with NFT data fetched from the blockchain

		if (req.method === 'GET') {
			if (!req.query.tokenId) return res.status(400).send(`Missing token id! `);
			else if (!isNumeric(tokenId)) return res.status(400).send(`Invalid token id! `);

			const tokenSVG64 = generateSVG64(tokenId, sampleQuery.year, sampleQuery.month, sampleQuery.day, sampleQuery.color, sampleQuery.title);

			return res.status(200).json({
				name: `NFT: ${tokenId}`,
				description: `D-Commerce Token ${tokenId}: NFT in E-Commerce DApp`,
				image: `${tokenSVG64}`,
			});
		} else {
			// Handle any other HTTP method
			res.status(400).send(`${req.method} requests are not allowed.`);
		}
	} catch (err) {
		console.log(err);
		return res.status(500).send(err);
	}
	return res.status(500).send('Internal server error!');
}
