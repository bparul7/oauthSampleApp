const {createUser, readUser, updateUser, deleteUser} = require ('../models/crudOperations');

const createAccount = async (req, res) => {
	const user = req.body;
	const result = await createUser(user);
	console.log (result)
	if (result === true) {
		return res.send ({
			success: "User Added",
		})
	} else {
		return res.send ({
			error: "Some error occured, try again",
		})
	}
}

module.exports = {
	createAccount,
}