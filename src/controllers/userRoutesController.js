const loggedIn = async (req, res) => {
	const user = JSON.parse(req.query.user);
	console.log (user);
	res,status (200);
	return res.send (`Welcome: ${user.displayName}`);
}

module.exports = {
	loggedIn,
}