const express=require('express')
const Client=require('../models/Client');
const clientController={};

clientController.listClients= async (req, res) =>{
    const clients= await Client.find();
    res.json({clients:clients});
}
clientController.detailUser = async (req,res) =>{
    const client = await Client.findById(req.params.id);
    res.json({client: client});
}

clientController.createClient = async(req,res) =>{
    const{nombre, apellido, edad, telefono, empresa} = req.body;
    const client = new Client({
        nombre:nombre,
        apellido: apellido,
        edad: edad,
        telefono, telefono,
        empresa: empresa
    })
    await client.save();
    res.json({mesagge: 'cliente registrado exitosamente'});
}

clientController.editClient = async (req,res) =>{
    const{nombre, apellido, edad, telefono, empresa} = req.body;
    const client = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        telefono:telefono,
        empresa: empresa
    }
    await Client.findByIdAndUpdate(req.params.id, client, {useFindAndModify: false});
    res.json({mesagge: 'cliente actualizado'});
}

clientController.deleteClient = async (req,res) =>{
    await Client.findByIdAndDelete(req.params.id, {useFindAndModify: false});
    res.json({mesagge: 'cliente eliminado'})
}

module.exports= clientController;
