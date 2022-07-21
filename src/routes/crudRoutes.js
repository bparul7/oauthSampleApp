const {createAccount} = require ('../controllers/crudRoutesController');

const express = require ('express');
const routes = express.Router();

routes.get ('/addMe', createAccount);

module.exports = routes;