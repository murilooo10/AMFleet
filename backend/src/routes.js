const express = require('express');
const routes = express.Router();


const UsuarioChefeController = require('./controllers/UsuarioChefeController');
const VeiculosController = require('./controllers/VeiculosController');
const SessionController = require('./controllers/SessionController');
const PerfilController = require('./controllers/PerfilController');

routes.post('/sessions', SessionController.create)

routes.get('/usuarios_chefe', UsuarioChefeController.index);
routes.post('/usuarios_chefe', UsuarioChefeController.create);

routes.get('/veiculos', VeiculosController.index);
routes.post('/veiculos', VeiculosController.create);
routes.delete('/veiculos/:id', VeiculosController.delete);

routes.get('/perfil', PerfilController.index);
routes.post('/perfil', PerfilController.create);
routes.delete('/perfil/:id', PerfilController.delete);


module.exports = routes;