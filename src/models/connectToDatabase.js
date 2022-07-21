const { MongoClient } = require('mongodb');

const password = "parulBansal123";
const uri = `mongodb+srv://bparul:${password}@cluster0.bvv9s.mongodb.net/?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	await client.connect();
	return client;
}

module.exports = {
	connectToDatabase,
}