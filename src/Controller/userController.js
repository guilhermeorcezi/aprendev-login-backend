const axios = require('axios');

module.exports = {
    async store (req, res){
        const { login, pwd } = req.body;

        const response = await axios.get('https://api.myjson.com/bins/kj4aq');

         if (response.data[0].user === login || response.data[1].user === login || response.data[2].user === login){
            
            if(response.data[0].user === login && response.data[0].password === pwd
                ||response.data[1].user === login && response.data[1].password === pwd
                ||response.data[2].user === login && response.data[2].password === pwd
                )
            {
                return res.json({logged_in: true});
            }else{
                return res.json({logged_in: true}); 
            }

        }else{
            return res.json({logged_in: false});
        }
    }
};