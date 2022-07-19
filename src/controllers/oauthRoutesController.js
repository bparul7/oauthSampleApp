const greet = async (req, res) => {
	res.send ("Welcome!! Please login using /oauth/google endpoint");
}

const redirectCallback = async (req, res) => {
	if (req.user) {
		const url = "/home?user=" + JSON.stringify(req.user);
		console.log (url)
		return res.redirect (url);
	}
	else {
		return res.redirect ("/oauth");
	}
}

module.exports = {
	greet,
	redirectCallback,
}