import { generateSVG64, generateSVG } from '../../../utils/tokens/token.js';
import { isNumeric, colorToMaterialName, isLeapYear, toDate } from '../../../utils/tokens/dateFunctions.js';

export default function handler(req, res) {
	try {
		if (req.method === 'GET') {
			if (!req.query.tokenId || !req.query.year || !req.query.month || !req.query.day || !req.query.color || !req.query.title)
				return res.status(400).send({ message: `Missing parameters! ` });

			const { tokenId, year, month, day, color, title } = req.query;
			if (!isNumeric(year) || !isNumeric(month) || !isNumeric(day) || !isNumeric(color) || day > 31 || month > 12 || color > 7 || color < 0)
				return res.status(400).send({ message: `Invalid parameters! ` });

			return res.status(200).send(JSON.stringify(generateSVG64(tokenId, year, month, day, color, title)));
			// return res.status(200).send(generateSVG(tokenId, year, month, day, color, title));
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
