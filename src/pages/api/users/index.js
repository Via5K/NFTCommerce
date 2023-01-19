// * Develop these in sequence whenever possible. keep a default value of user object in [id].js

/*
TODO: /api/users
GET: returns nothing
POST: returns a new user object
TODO: /api/users/:id
UPDATE: purchases (seperate endpoint)
UPDATE: transactions (seperate endpoint)
UPDATE: name email image returns a modified user object (don't update timestamp)
*/

// TODO: /api/users/:id returns a single user {}
// TODO: /api/users?name="name"&id="id" returns a single user {} || {}

/*
TODO: /api/users/:id
DELETE: returns confirmation of deletion
*/

// * Implementation of (POST & GET) /api/users/
import { connectToDatabase } from '@/db/connection';

/*
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req, res) {
	// TODO write functions for validating user data in @/utils/userValidation.js &similarly for products

	try {
		if (req.method === 'GET') {
			const { id } = req.query; // /api/users?id=1234567890

			// TODO Validate all the query params

			const user = { id };

			const { db, client } = await connectToDatabase();
			const connected = true; // * await client.isConnected();
			const users = await db.collection('users').find(user);
			console.log(users); // { acknowledged: true, ...  }
			const data = (await db.collection('users').find(user)) || 'No data';

			res.status(200).json({ connected, data });
		} else if (req.method === 'POST') {
			const { db, client } = await connectToDatabase();
			const connected = true; // * await client.isConnected();
			const users = await db.collection('users').insertOne(user);
			console.log(users); // { acknowledged: true || false, insertedId:  }
			const data = (await db.collection('products').find({ name: 'John Doe' }).toArray()) || 'No data';

			res.status(200).json({ connected, data });
		} else if (req.method === 'UPDATE') {
			const { db, client } = await connectToDatabase();
			const connected = true; // * await client.isConnected();
			const users = await db.collection('users').updateOne(user);
			console.log(users); // { acknowledged: true || false, insertedId:  }
			const data = (await db.collection('products').find({ name: 'John Doe' }).toArray()) || 'No data';

			res.status(200).json({ connected, data });
		} else if (req.method === 'Delete') {
			const { db, client } = await connectToDatabase();
			const connected = true; // * await client.isConnected();
			const users = await db.collection('users').insertOne(user);
			console.log(users); // { acknowledged: true || false, insertedId:  }
			const data = (await db.collection('products').find({ name: 'John Doe' }).toArray()) || 'No data';

			res.status(200).json({ connected, data });
		} else {
			res.status(400).json({ message: 'Bad Request' });
		}
	} catch (error) {
		console.log(error);
	}
}
