const Client = require('../models/clientModel');
const mongoose = require('mongoose');

exports.getAllClients = (req, res) => {
    Client.find()
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                clients: docs
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.createClient = (req, res, next) => {
    const client = new Client({
        _id: new mongoose.Types.ObjectId(),
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city,
        street: req.body.street,
        number: req.body.number,
        phone: req.body.phone,
        telephone: req.body.telephone,
        dob: req.body.dob,
        vaccineDates: req.body.vaccineDates,
        vaccineManufacturers: req.body.vaccineManufacturers,
        positiveDate: req.body.positiveDate,
        recoveryDate: req.body.recoveryDate
    });
    client
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created client successfully",
                createdClient: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.getClientById = (req, res, next) => {
    const id = req.params.clientId;
    Client.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ message: 'No valid entry found for provided ID' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.updateClient = (req, res, next) => {
    const id = req.params.clientId;
    if (!id) {
        res.status(401).send('ID is missing');
    }
    Client.findOneAndUpdate(
        { _id: id },
        { $set: req.body })
        .exec()
        .then(result => {
            res.status(200).json({ message: 'Client Updated' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.deleteClient = (req, res, next) => {
    const id = req.params.clientId;
    Client.deleteOne({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};
