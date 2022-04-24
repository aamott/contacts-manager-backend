const routes = require('express').Router();
const names = require('../controllers/');

routes.get('/', names.displayname);


module.exports = routes;