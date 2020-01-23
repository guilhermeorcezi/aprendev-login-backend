const axios = require('axios');

module.exports = {
    async store (req, res){
        const { login, pwd } = req.body;

        const response = await axios.get('https://api.myjson.com/bins/kj4aq');

        const { user, password} = response.data[0];

      //  return res.json({response.data.user, pwd});
        
        if (response.data[0].user === login || response.data[1].user === login || response.data[2].user === login){
            
            if(response.data[0].user === login && response.data[0].password === pwd
                ||response.data[1].user === login && response.data[1].password === pwd
                ||response.data[2].user === login && response.data[2].password === pwd
                )
            {
                return res.json({message: 'Login sucessful'});
            }else{
                return res.json({message: 'Wrong password'});  
            }


        }else{
            return res.json({message: 'user does not exist'});
        }
        
    }
};