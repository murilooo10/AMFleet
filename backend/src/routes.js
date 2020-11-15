const express = require('express');
const routes = express.Router();


const UsuarioChefeController = require('./controllers/UsuarioChefeController');
const VeiculosController = require('./controllers/VeiculosController');
const SessionController = require('./controllers/SessionController');
const UsuariosController = require('./controllers/UsuariosController');

routes.post('/sessions', SessionController.create)

routes.get('/veiculos', VeiculosController.index);
routes.post('/veiculos', VeiculosController.create);
routes.delete('/veiculos/:id', VeiculosController.delete);

routes.get('/usuarios', UsuariosController.index);
routes.post('/usuarios', UsuariosController.create);
routes.delete('/usuarios/:id', UsuariosController.delete);

routes.get('/motoristas', UsuariosController.index);
routes.post('/motoristas', UsuariosController.create);
routes.delete('/motoristas/:id', UsuariosController.delete);




module.exports = routes;