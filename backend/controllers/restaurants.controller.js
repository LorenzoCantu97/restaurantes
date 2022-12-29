const { response } = require('express');
const restaurants = require('../services/restaurants.services');
const responseUtil = require('../utils/responseUtil');

async function getAll(req, res, next){
    try {
        const data = req.query;
        const results = await restaurants.getAll(data);

        if(results.name) { res.json(responseUtil.error(7, results)); }
        else if (results.length == 0) { res.json(responseUtil.error(4, results));}
        
        return res.json(responseUtil.success(1, results));

    } catch (ex) {
        return res.json(responseUtil.error(0, ex));
    }
};

async function newRestaurant(req, res, next) {
    try {
        const data = req.body;
        const results = await restaurants.newRestaurant(data);

        if(results.name) { res.json(responseUtil.error(7, results)); }
        else if (results.length == 0) { res.json(responseUtil.error(4, results));}
        
        return res.json(responseUtil.success(1, results));
    } catch (ex) {
        return res.json(responseUtil.error(0, ex));
    }
};

async function updateRestaurant(req, res, next) {
    try {
        const data = req.body;
        const results = await restaurants.updateRestaurant(data);

        if(results.name) { res.json(responseUtil.error(7, results)); }
        else if (results.length == 0) { res.json(responseUtil.error(4, results));}
        
        return res.json(responseUtil.success(1, results));
    } catch (ex) {
        return res.json(responseUtil.error(0, ex));
    }
};

async function deleteRestaurant(req, res, next) {
    try {
        const data = req.query;
        const results = await restaurants.deleteRestaurant(data);

        if(results.name) { res.json(responseUtil.error(7, results)); }
        else if(results.length == 0) { res.json(responseUtil.error(4, results)); }

        return res.json(responseUtil.success(1, results));
    } catch (ex) {
        return res.json(responseUtil.error(0, ex));
    }
}

module.exports = {
    getAll,
    newRestaurant,
    updateRestaurant,
    deleteRestaurant
}