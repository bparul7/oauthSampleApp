const {connectToDatabase} = require ('./connectToDatabase');
const dbName = 'oauthApp';
const collectionName = 'user';

const createUser = async (user) => {
	var client;
	var res;
	try {
		client = await connectToDatabase();
		const db = client.db(dbName);
		const collection = db.collection (collectionName);
		const result = await collection.insertOne (user);
		console.log (result);
		res = true;

	} catch (err) {
		res = false;
		console.log (`Some Error Occured: ${err}`);
		
	} finally {
		if (client)
			await client.close();
		return res;

	}
}

const readUser = async (query) => {
	var client;
	var res;
	try {
		client = await connectToDatabase();
		const db = client.db(dbName);
		const collection = db.collection (collectionName);
		const result = await collection.find (query).limit(1).toArray();
		console.log (result);
		res = true;

	} catch (err) {
		res = false;
		console.log (`Some Error Occured: ${err}`);
		
	} finally {
		if (client)
			await client.close();
		return res;

	}
}

const updateUser = async (query, value) => {
	var client;
	var res;
	try {
		client = await connectToDatabase();
		const db = client.db(dbName);
		const collection = db.collection (collectionName);
		const result = await collection.updateOne (query, [ {$set : value} ]);
		console.log (result);
		res = true;

	} catch (err) {
		res = false;
		console.log (`Some Error Occured: ${err}`);
		
	} finally {
		if (client)
			await client.close();
		return res;

	}
}

const deleteUser = async (query) => {
	var client;
	var res;
	try {
		client = await connectToDatabase();
		const db = client.db(dbName);
		const collection = db.collection (collectionName);
		const result = await collection.deleteMany (query);
		console.log (result);
		res = true;

	} catch (err) {
		res = false;
		console.log (`Some Error Occured: ${err}`);
		
	} finally {
		if (client)
			await client.close();
		return res;

	}
}

module.exports = {
	createUser,
	readUser,
	updateUser,
	deleteUser,
}