const axios = require('axios');

module.exports = {
    async store (req, res){
        const { user, password } = req.body;

        const response = await axios.get('https://api.myjson.com/bins/kj4aq');

        api = response.data;

        let ver=false;
        api.some(api => {
            if (api.user === user){
                ver=true;
            }
        });

        if(ver){
            api.forEach(api => {
                if(api.user === user && api.password === password){
                    return res.json({logged_in: true, user_exist: true, user});
                }
            });
            return res.json({logged_in: false, user_exist: true});
        }else{
            return res.json({logged_in: false, user_exist: false});
        }
    }
};