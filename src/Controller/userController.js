const axios = require("axios");

module.exports = {
  async store(req, res) {
    const { user, password } = req.body;

    const { data: api } = await axios.get("https://api.myjson.com/bins/kj4aq");

    let userExists = false;

    api.some(api => {
      if (api.user === user) {
        userExists = true;
      }
    });

    if (userExists) {
      api.forEach(api => {
        if (api.user === user && api.password === password) {
          return res.json({ logged_in: true, user_exists: true, user });
        }
      });
      return res.json({ logged_in: false, user_exists: true });
    } else {
      return res.json({ logged_in: false, user_exists: false });
    }
  }
};
