import { generateSVG } from '../../utils/svg/svg.js';
import { isNumeric, colorToMaterialName, isLeapYear, toDate } from '../../utils/svg/utils.js';
import { svg64 } from 'svg64';

const tokenId = `73424079983647210902572285069973579475843508985221180214989722260978404425729`;

export default function handler(req, res) {
	try {
		if (req.method === 'GET') {
			console.log(req.query);
			const { year, month, day, color } = req.query;
			// const svg = generateSVG(tokenId, 2023, 1, 1, 7);
			const svg = generateSVG(tokenId, year, month, day, color);

			const s = svg64(svg);
			console.log('SVG Length: ', s.length);

			return res.json({ svg64: `${s}` });
		} else if (req.method === 'POST') {
			// Process a POST request - Example:
			res.status(200).json({ name: 'John Doe' });
		} else {
			// Handle any other HTTP method
		}
	} catch (err) {
		console.log(err);
	}
	res.status(500).send({ message: 'Server Error' });
}
