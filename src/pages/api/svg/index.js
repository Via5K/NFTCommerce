import { generateSVG64 } from '../../../utils/svgRoute/svg.js';
import { isNumeric, colorToMaterialName, isLeapYear, toDate } from '../../../utils/svgRoute/dateFunctions.js';

export default function handler(req, res) {
	try {
		if (req.method === 'GET') {
			console.log(req.query);

			if (!req.query.tokenId || !req.query.year || !req.query.month || !req.query.day || !req.query.color || !req.query.uid)
				return res.status(400).send({ message: `Missing parameters! ` });

			const { year, month, day, color, uid } = req.query;
			if (!isNumeric(year) || !isNumeric(month) || !isNumeric(day) || !isNumeric(color) || day > 31 || month > 12 || color > 7 || color < 0)
				return res.status(400).send({ message: `Invalid parameters! ` });

			const base64encodedSVG = generateSVG64(tokenId, year, month, day, color, uid);

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
