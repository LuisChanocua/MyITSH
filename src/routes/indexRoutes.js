// const express = require('express')
// const routes = express.Router();

// // const indexControllerRoutes = require('../controllers/indexController');
// const indexController = require('../controllers/indexController');

// routes.get('/', indexController.list);
// routes.post('/save', indexController.saveE);

// module.exports = routes;
const express = require('express');
const routes = express.Router();
const indexController = require('../controllers/indexController');
const showEControlloer = require('../controllers/showEController');

routes.get('/', indexController.list);
routes.post('/saveE', indexController.saveE);
routes.get('/deleteE/:id', indexController.deleteE)
routes.get('/showE', indexController.showE)


module.exports = routes;
