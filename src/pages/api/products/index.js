// * Develop in this sequence, keep a default value of product object in [id].js
/*
TODO: /api/products
GET: returns nothing
POST: returns a new product object (with id = timestamp)
PUT: returns a modified product object (& update timestamp)
DELETE: returns confirmation of deletion
*/
// TODO: /api/products returns [25] products at a time (implement pagination later)
// TODO: /api/products/:id returns a single product {}
// TODO: /api/products?category=automobiles returns all products in the automobiles category
/* 
TODO: /api/products Sorting
Newest arrivals: return timestamp highest to lowest
Price low to high: return price lowest to highest
Price high to low: return price highest to lowest
Most Popular: return quantitySold highest to lowest
*/
/*
TODO: /api/products?
Search by name: return products with name containing the search term
Search by keyword: return products with description/keyword containing the search term
*/

// ! Only for testing delete the code below later

import { connectToDatabase } from '@/db/connection';

/*
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

import DB from '../../../../db.json';

export default async function handler(req, res) {
	try {
		if (req.method === 'GET') {
			return res.status(200).json(DB.products);
			const { db, client } = await connectToDatabase();
			const connected = true; // * await client.isConnected();
			const data = (await db.collection('products').find({ name: 'John Doe' }).toArray()) || 'No data';
			console.log(data);
			// const product = await Product.create({
			// 	name: 'John Doe',
			// 	timestamp: Date.now(),
			// 	product: 'John Doe' + Date.now(),
			// });

			res.status(200).json({ connected });
		} else {
			res.status(400).json({ message: 'Bad Request' });
		}
	} catch (error) {
		console.log(error);
	}
}
