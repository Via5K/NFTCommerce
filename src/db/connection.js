// * MongoDb Node Driver Docs: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/
import { MongoClient } from 'mongodb';

const { MONGO_URL, MONGO_DB } = process.env;

if (!MONGO_URL) throw new Error('Please define the MONGO_URL environment variable inside .env');

if (!MONGO_DB) throw new Error('Please define the MONGO_DB environment variable inside .env');

/*
 * Global is used here to maintain a cached connection across hot reloads in development.
 * This prevents connections growing exponentially during API Route usage.
 */
let cached = global.mongo;

/*
 * If the connection is cached, use it instead of creating a new connection
 */
if (!cached) {
	cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
	console.log('Connecting to database...');
	try {
		if (cached.conn) {
			console.log('Cached connection found');
			return cached.conn;
		}

		if (!cached.promise) {
			console.log('Establishing connection...');
			const opts = {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			};

			cached.promise = MongoClient.connect(MONGO_URL, opts).then(client => {
				console.log('Connecting...');
				return {
					client,
					db: client.db(MONGO_DB),
				};
			});
			cached.conn = await cached.promise;
		}
	} catch (error) {
		console.log(error);
	}
	return cached.conn;
}
