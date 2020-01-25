const axios = require('axios');

module.exports = {
	async store(req, res) {
		const { user, password } = req.body;

		const { data: api } = await axios.get('https://api.myjson.com/bins/kj4aq');

		let login = false;
		api.forEach((api) => {
			if (api.user === user && api.password === password) {
				login = true;
			}
		});

		if (login) return res.json({ logged_in: true, user });
		return res.json({ logged_in: false });
	}
};
