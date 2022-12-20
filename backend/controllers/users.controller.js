const users = require('../services/users.services');
const responseUtil = require('../utils/responseUtil');

async function signUp(req, res, next) {
    try{
        const data = req.body;
        const results = await users.signUp(data);

        if(results.name) { res.json(responseUtil.error(7, results)); }
        else if (results.length == 0) { res.json(responseUtil(4, results));}
        
        return res.json(responseUtil.success(1, results));
    } catch (ex) {
        return res.send(ex);
    }
};

module.exports = {
    signUp
}