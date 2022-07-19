const express = require ('express');
const routes = express.Router();

const {loggedIn} = require ('../controllers/userRoutesController');

routes.get ('/home', loggedIn);

module.exports = routes;