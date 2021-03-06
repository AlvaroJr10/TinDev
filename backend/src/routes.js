const express = require('express')
const DevCotroller = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();


routes.get('/devs', DevCotroller.index);
routes.post('/devs', DevCotroller.store);
routes.post('/devs/:devId/likes', LikeController.store); 
routes.post('/devs/:devId/dislikes', DislikeController.store);  

module.exports = routes;    