const route = require('express').Router();
const {listClients, createClient,editClient, detailUser, deleteClient} =require('../controllers/clientController');

route.get('/list', listClients);
route.get('/detail/:id', detailUser);

route.post('/create', createClient);

route.put('/edit/:id',editClient )

route.delete('/delete/:id', deleteClient);
module.exports= route; 