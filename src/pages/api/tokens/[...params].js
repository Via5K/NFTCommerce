import { generateSVG64, generateSVG } from '../../../utils/tokens/token.js';
import { isNumeric, colorToMaterialName, isLeapYear, toDate } from '../../../utils/tokens/dateFunctions.js';

export default async function handler(req, res) {
	try {
		if (req.method === 'GET') {
			const { params } = req.query;

			if (params.length < 6) {
				return res.status(400).send({ message: `Missing parameters! ${params}` });
			}

			const [tokenId, year, month, day, color, title] = params;
			console.log(`https://${req.rawHeaders[1] || 'd-commerce.vercel.app'}${req.url}`);

			if (!isNumeric(year) || !isNumeric(month) || !isNumeric(day) || !isNumeric(color) || day > 31 || month > 12 || color > 7 || color < 0)
				return res.status(400).send({ message: `Invalid parameters! ` });

			const tokenSVG = generateSVG(tokenId, year, month, day, color, title);

			res.setHeader('Content-Type', 'image/svg+xml');
			res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000');
			return res.end(tokenSVG);
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
