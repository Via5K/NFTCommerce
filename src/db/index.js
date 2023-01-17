// * Add all database code in this directory

/*
Import & export all the models schemas and other defaults from here
make separate files for products and users db functions
*/

// * Default values of user; only id (metamask account address) will be provided on creation of user
export const userDefaults = {
	id: '0x82b4F2da4b06cD712ccCEEc9f64c0BCfFd3c6147', // * REQUIRED my metamask account address
	name: '',
	email: '',
	image: '',
	timestamp: '', // POST: When the user was created
	purchases: [], // type [object]
	transactions: [], // type [string]
};

/*
"purchases": [
  {
    "id": 1620000001,
    "timestamp": 1620000001,
    "productID": 2,
    "tokenId": 9845,
    "hash": "0xea20d60639bdda99e07812a77f3b4193226e9e214cfa543bdd9e9c1df7bbd99a"
  }
],
"transactions": [
  "0xea20d60639bdda99e07812a77f3b4193226e9e214cfa543bdd9e9c1df7bbd99a",
  "0xea20d60639bdda99e07812a77f3b4193226e9e214cfa543bdd9e9c1df7bbd99a"
]
*/

// * Default values of user; only id (metamask account address) will be provided on creation of user
export const productDefaults = {
	id: 1, // * REQUIRED type: number on first creation use timestamp as id
	name: 'Product 1', // * REQUIRED
	description: 'Product 1 description', // * REQUIRED
	price: 19999, // * REQUIRED type: number can be less than 0 in decimals 0.00005445 or 999999
	seller: '0x82b4F2da4b06cD712ccCEEc9f64c0BCfFd3c6147', // * REQUIRED metamask account address
	image: 'https://picsum.photos/200/300', // * REQUIRED
	// TODO: images[0] === image
	images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
	category: 'others',
	specifications: {
		subcategory: '',
		color: '',
	},
	keywords: '',
	quantity: 10, //* required type: number make an endpoint to update this i.e restocking (seperate from quantity sold)
	quantitySold: 0, // type: number make an endpoint to update this only Increment
	timestamp: 1620000000, // type: number update this when the product
	rating: [4, 5], // type: [number]
};
